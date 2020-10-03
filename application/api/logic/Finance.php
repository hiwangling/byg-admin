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

 * 财务信息逻辑

 */

class Finance extends BaseLogic

{
	/**

     * 财务列表

     */

    public function getFinanceList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelFinance->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'carsend c', 'c.id = a.tid AND a.state=1','left'],
                ];

		return $this->modelFinance->getList($where,$field,$order,$paginate,$join);

    }

	/**

     * 获取财务信息单条数据

     */

	public function getFinanceInfo($where=[],$field = true){

		return $this->modelFinance->getInfo($where,$field);
	}

	/**

     * 获取财务信息统计数据

     */

	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		return $this->modelFinance->stat($where,$stat_type,$field);
	}

	/**

     * 获取财务信息列表搜索条件

     */

    public function getWhere($data = [])
	{
        $where = [];

        !empty($data['search_data']) && $where['a.name'] = ['like', '%'.$data['search_data'].'%'];

        return $where;
    }

	

	/**

     * 未支付列表

     */

	public function getObituaryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelObituary->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'cremation c', 'c.oid = a.id','left'],
					
					[SYS_DB_PREFIX . 'obituary_record or', 'a.id = or.oid AND or.type=1 AND or.status>0','left'],
					
					['(select oid,sum(totalprice) as totalprice from ky_servicesorder where `status`<>-1 GROUP BY oid) f','f.oid=a.id','left'],

                ];

		

		return $this->modelObituary->getList($where,$field,$order,$paginate,$join,'a.id');

    }

	/**

     * 未支付详情

     */
	 
    public function financeInfo($data=[]){


		$obituary = $this->logicObituary->obituaryInfo(['a.id'=>$data['id']],'a.*,c.serial as c_serial,c.signature as c_signature,c.signtime as c_signtime');
		
		$branch = parse_config_array('servicesType');
		
		foreach($branch as $k=>$v)
		{
			$where['a.type'] = $k;
			
			$where['a.oid'] = $data['id'];
			
			$where['a.'.DATA_STATUS_NAME] = 1;
			
			$services = $this->logicServicesorder->getServicesorderDatato($where,0);
		}
		
		$data['services_totalprice'] = array_sum(array_map(function($val){return $val['totalprice'];}, $services));
		
		$data['hall'] = $this->logicObituaryRecord->recordInfo(['a.oid'=>$data['id'],'a.type'=>1,'a.status'=>1],'a.*');
		
		$data['cold'] = $this->logicObituaryRecord->recordInfo(['a.oid'=>$data['id'],'a.type'=>2,'a.status'=>1],'a.*');

		$data['branchList'] = $services;

		$data['obituary'] = $obituary;

		return setRetrunData('success', $data);

	}

	/**

     * 支付

     */
   public function financePay($data=[]){

	    //支付记录
	   $finance = [
	       'oid'=>$data['oid'],
		   'totalprice'=>$data['totalprice'],
		   'inlet'=>2,
		   'paytype'=>'现金',
		   'paytime'=>TIME_NOW,
		   'operator'=>$data['operator'],
		   'ispay'=>2,
		   'status'=>2,
		   'create_time'=>TIME_NOW,
	   ];
	   

	   $result = $this->modelFinance->addInfo($finance);

	   $result && $this->modelObituary->updateInfo(['id'=>$data['oid']],['state'=>15]);

	   //所有服务结算
	   $result && $this->logicServicesorder->servicesorderUpdate(['oid'=>$data['oid'],'status'=>1],['pay'=>1,'state'=>4]);

	   $result && $this->logicServicesComboorder->servicesComboorderUpdate(['oid'=>$data['oid'],'status'=>1],['pay'=>1]);

       $result && $this->recordUpdate(['id'=>$data['oid']]);
	   
	   return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

   }
   
   public function recordUpdate($data = [])
   {
        $info_hall = $this->modelObituaryRecord->getInfo(['oid'=>$data['id'],'type'=>1],false);
		
		$info_cold = $this->modelObituaryRecord->getInfo(['oid'=>$data['id'],'type'=>1],false);
		
		if(!empty($info_hall))
		{
		      $this->modelObituaryRecord->updateInfo(['id'=>$info_hall['id']],['status'=>2]);
			  
			  $this->modelMourn->updateInfo(['id'=>$info_hall['tid']],['state'=>0]);
			  
			  
		}
		
		if(!empty($info_cold))
		{
		      $this->modelObituaryRecord->updateInfo(['id'=>$info_cold['id']],['status'=>2]);
			  
			  $this->modelCold->updateInfo(['id'=>$info_cold['tid']],['state'=>0]);
			  
			  
		}
   }
}

