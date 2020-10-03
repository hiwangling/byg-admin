<?php

// +---------------------------------------------------------------------+

// | OneBase    | [ WE CAN DO IT JUST THINK ]                            |

// +---------------------------------------------------------------------+

// | Licensed   | http://www.apache.org/licenses/LICENSE-2.0 )           |

// +---------------------------------------------------------------------+

// | Author     | Bigotry <3162875@qq.com>                               |

// +---------------------------------------------------------------------+

// | Repository | https://gitee.com/Bigotry/OneBase                      |

// +---------------------------------------------------------------------+



namespace app\api\logic;

use app\api\controller\BaseController as BaseController;



/**

 * 服务信息逻辑

 */

class Servicesorder extends BaseLogic

{

    



	/**

	 *获取已选服务列表

	 */

	public function servicesorderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){

		

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		

		$this->modelServicesorder->alias('a');

		

		$join = [

					[SYS_DB_PREFIX . 'services s', 'a.sid = s.id','left'],

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

                ];

		

		return $this->modelServicesorder->getList($where, $field , $order, $paginate,$join);

		

	}

	

	

	/**

     * 服务信息添加

	 * data 添加属性

	 * type 服务入口属性 1.接运 2.业务大厅 3.火化服务 4.大厅

     */

	public function servicesorderAdd($data=[],$oid=0,$type=0)

	{

		if(empty($data['server']) || empty($data['server']['service'])){

			return false;

		}

		$orderData = $data['server']['service'];

		$add_data = array();

		$log_id = array();

		foreach($orderData as $k=>$v){

			if(empty($v['type'])){

				$result = $this->logicServicesComboorder->ServicesComboorderAdd($v,$oid,$data['operator']);

				$serviceComboData = $this->logicServicesComboorder->getServiceComboData($v,$result);

				foreach($serviceComboData as $key=>$val){

					$this->servicesorderAppend($val,$oid,$type,$data['operator']);
				}

			}else{

				if($v['type']==4){

					$inlet = !empty($data['inlet'])?$data['inlet']:$type;

					$this->logicSupplies->suppliesExpend($v,$oid,$data['operator'],$inlet);

				}
				
				$tid = !empty($data['tid'])?$data['tid']:0;
				
				$result = $this->servicesorderAppend($v,$oid,$type,$data['operator'],$tid);

			}

			$log_id[] = $result;

		}
				
		action_log('新增', '新增服务信息，name:'.$data['name'].',id：' . http_build_query($log_id));

	}

	/**

     * 服务信息添加

	 * data 服务信息  

	 * type 服务入口属性 1.接运 2.业务大厅 3.火化服务 4.大厅

	 * oid 逝者ID

	 * operator 操作人

     */

	public function servicesorderAppend($data=[],$oid=0,$type,$operator,$tid=0){

		if(empty($tid) && !empty($data['tid'])){
			$tid = $data['tid'];
		}
		
		$add_data = array(

			'oid'=>$oid,

			'sid'=>$data['id'],
			
			'tid'=>$tid,

			'cid'=>!empty($data['cid'])?$data['cid']:0,

			'inlet'=>!empty($data['inlet'])?$data['inlet']:$type,

			'type'=>$data['type'],

			'title'=>$data['title'],

			'price'=>$data['price'],

			'number'=>$data['number'],

			'totalprice'=>$data['totalprice'],
			
			'task'=>!empty($data['task'])?$data['task']:'',

			'operator'=>$operator,

			'state'=>!empty($data['state'])?$data['state']:1,

			'pay'=>!empty($data['pay'])?1:0

		);

		$result = $this->modelServicesorder->addInfo($add_data);

		return $result;

	}

	

	

	/**

     * 服务信息编辑

	 * data 服务信息  array_column

	 * type 服务入口属性

     */

	public function servicesorderEdit($data=[],$type=0){

		

		$servicesType = $this->logicServices->getServicesType($type);

		

		$delId = array();//获取所有删除服务ID

		

		foreach($servicesType as $v){

			$idwhere = ['a.oid'=>$data['oid'],'a.type'=>$v,'a.status'=>1];
			
			if(!empty($data['tid'])){
				$idwhere['a.tid'] = $data['tid'];
			}

			$idArray = $this->servicesorderList(['a.oid'=>$data['oid'],'a.type'=>$v,'a.status'=>1],'a.id',true,false);

			

			$delId = implode(',',array_column($idArray,'id'));

			

			if($v==6){

				$this->logicServicesComboorder->servicesComboorderDel(['oid'=>$data['oid']]);

			}

			$where = ['oid'=>$data['oid'],'type'=>$v];
			
			if(!empty($data['tid'])){
				
				$where['tid'] = $data['tid'];
				
			}	

			$this->servicesorderDel($where,$delId);
			
			

		}
	
		$this->servicesorderAdd($data,$data['oid'],$type);
	}

	

	/**

     * 编辑财务信息

     */

	public function financeServicesEdit($where=[],$data=[]){

		$finance_data = $data;

		unset($finance_data['name']);

		$result = $this->modelServicesorder->updateInfo($where,$finance_data);

		$serviceFinance = $this->getStat(['oid'=>$where['oid'],'status'=>1,'type'=>['neq',6]],'sum','totalprice');
		
		$comboFince = $this->logicServicesComboorder->getStat(['oid'=>$where['oid'],'status'=>1],'sum','totalprice');

		$totalprice = $serviceFinance+$comboFince;

		$this->logicFinance->financeEdit(['oid'=>$where['oid'],'status'=>['neq',-1],'state'=>2],['totalprice'=>$totalprice,'name'=>$data['name']]);

		$result && action_log('编辑', '编辑服务信息，name:' . $data['name'].' where:'.http_build_query($where));

		

		return $result;

		

	}

	

	/**

     * 服务信息删除

     */

    public function servicesorderDel($where = [],$delId='')

    {

        

		$result = $this->modelServicesorder->deleteInfo($where);

		

		$delArray = !empty($delId)?$delId:http_build_query($where);

        

        $result && action_log('删除', '服务信息删除' . '，where：' . $delArray);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	/**

     * 获取服务信息列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

        

        !empty($data['search_data']) && $where['number'] = ['like', '%'.$data['search_data'].'%'];

        

        return $where;

    }

	

	/**

     * 获取服务信息统计数据

     */

	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		

		return $this->modelServicesorder->stat($where,$stat_type,$field);

		

	}

	

	/**

     * 获取服务信息单值

     */

	public function getServicesorderValue($where = [],$field = 'id'){

		

		return $this->modelServicesorder->getValue($where,$field);

		

	}

   

	

	/**

     * 获取指定分类已选服务

	 * type 获取部分分类 1.接运

     */
	 
	public function getServicesorderDatato($where=[],$type=0){

		

		$list = array();
		$servicesType = parse_config_array('servicesType');
		$needType = $this->logicServices->getServicesType($type);

		foreach($servicesType as $k=>$v){

			if(in_array($k,$needType)){

				if($k==6){

					$comboWhere = $where;

					unset($comboWhere['a.inlet']);

					unset($comboWhere['a.type']);
					
					unset($comboWhere['a.tid']);

					$services = $this->logicServicesComboorder->getServicesComboorderList($comboWhere,'a.*','',false);

					//套餐服务详情

					$combo = array();

					foreach($services as $key=>$val){

						$combo = $this->servicesorderList(['a.cid'=>$val['id'],'a.type'=>6,'a.status'=>1],'a.sid',true,false);

						$val['combo'] = array_column($combo,'sid');

					}

				}else{

					$where['a.type'] = $k;
					
					$where['a.status'] = 1;

					$services = $this->servicesorderList($where,'a.*,s.unit','a.id asc',false);

				}

				$list[$k]['title'] = $v;

				$list[$k]['key'] = $k;

				$list[$k]['services'] = $services;

				$list[$k]['totalprice'] = !empty($services)?array_sum(array_map(function($val){return $val['totalprice'];}, $services)):0;
			}

		}

		return array_values($list);

	}

	/**

     * 编辑服务信息

     */

	public function servicesorderUpdate($where=[],$data=[]){



		$result = $this->modelServicesorder->updateInfo($where,$data);

		

		return $result;

		

	}
	
	public function servicesorderSave($data=[]){



		$result = $this->modelServicesorder->saveAll($data);

		

		return $result;

		

	}
	
	public function servicesorderInfo($where=[],$field=true){
		
		$this->modelServicesorder->alias('a');
		
		$join = [
					[SYS_DB_PREFIX . 'services s', 'a.sid = s.id','left'],

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

                ];
		
		return $this->modelServicesorder->getInfo($where,$field,$join);
	}

    public function servicesorderStat($where = [], $stat_type = 'count', $field = 'id'){
		
		return $this->modelServicesorder->stat($where,$stat_type,$field);
		
	}

}

