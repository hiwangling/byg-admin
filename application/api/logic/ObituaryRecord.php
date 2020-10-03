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

 * 租用逻辑

 */

class ObituaryRecord extends BaseLogic

{

	/**

	 * 逝者租用列表

	 * 

	 */ 

	public function recordList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelObituaryRecord->alias('a');

		return $this->modelObituaryRecord->getList($where, $field , $order, $paginate);
	}

	

	/**

	 * 逝者租用单条详情

	 * 

	 */ 

	public function recordInfo($where=[],$field=true){

		$this->modelObituaryRecord->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'obituary o', 'o.id = a.oid','left'],
                ];

		return $this->modelObituaryRecord->getInfo($where,$field,$join);

	}

	

	/**

	 * 租用添加

	 * type 1：悼念厅  2：冷藏

	 */ 

	public function recordAdd($data=[],$oid){

		$mourn = $data['mourn'];

		$cold = $data['cold'];

		if(!empty($cold['list']['id'])){

			$this->modelCold->updateInfo(['id'=>$cold['list']['id']],['state'=>1]);//设置冷柜占用状态

			$this->ObituaryRecordAdd($cold,$oid,$data,2,4);

		}

		if(!empty($mourn['list']['id'])){

			$this->modelMourn->updateInfo(['id'=>$mourn['list']['id']],['state'=>1]);//设置悼念厅占用状态

			$this->ObituaryRecordAdd($mourn,$oid,$data,1,3);

		}

		$this->ObituaryRecordStat($oid);
	}

	

	/**

	 * 租用添加

	 * 

	 */ 

	public function ObituaryRecordAdd($add=[],$oid=0,$data=[],$type=0,$finance_type=0){

		$record_add = array(

			'tid'=>$add['list']['id'],

			'oid'=>$oid,

			'title'=>$add['list']['title'],

			'price'=>$add['list']['price'],

			'startime'=>$add['startime'],

			'endtime'=>$add['endtime'],

			'type'=>$type,
			
			'hours'=>!empty($add['hours'])?$add['hours']:'',

			'remark'=>$add['remark'],

			'operator'=>$data['operator']

		);

		$result = $this->modelObituaryRecord->addInfo($record_add);

		$result && action_log('新增', '新增租用信息，name:' . $data['name'].'，租用ID：'.$result);

		return $result;

	}

	public function ObituaryRecordAddNew($record_add){
		
		$result = $this->modelObituaryRecord->addInfo($record_add);
		
		return $result;
		
	}

	/**

	 * 租用编辑

	 * type 1：悼念厅  2：冷藏

	 */ 

	public function recordEdit($data=[]){

		$record_data = $this->recordList(['a.oid'=>$data['id'],'a.sub'=>0],'a.*','a.id asc',false);

		foreach($record_data as $k=>$v){

			//释放设施
			if($v['type']==1){
				$this->modelMourn->updateInfo(['id'=>$v['tid']],['state'=>0]);//设置悼念厅占用状态
			}elseif($v['type']==2){
				$this->modelCold->updateInfo(['id'=>$v['tid']],['state'=>0]);//设置冷柜占用状态
			}

			//删除记录
			$this->recordDel(['id'=>$v['id']]);
		}

		$this->recordAdd($data,$data['id']);
	}

	/**

	 * 逝者进度编辑

	 * 

	 */ 

	public function ObituaryRecordStat($oid=0){

		//设置逝者进度
		$record_data = $this->recordList(['a.oid'=>$oid,'a.sub'=>0],'a.*','a.id asc',false);

		foreach($record_data as $k=>$v){

			if(!empty($v['endtime'])){

				if(TIME_NOW<strtotime($v['endtime'])){

					if($v['type']==1){

						$obituaryType=9;

					}elseif($v['type']==2){

						$obituaryType=8;

					}

					$this->modelObituaryRecord->updateInfo(['id'=>$v['id']],['status'=>1]);

				}else{

					$this->modelObituaryRecord->updateInfo(['id'=>$v['id']],['status'=>2]);

					if($v['type']==1){

						$this->modelMourn->updateInfo(['id'=>$v['tid']],['state'=>0]);

					}elseif($v['type']==2){

						$this->modelCold->updateInfo(['id'=>$v['tid']],['state'=>0]);

					}

				}

			}else{

				if(TIME_NOW>=strtotime($v['startime'])){

					if($v['type']==1){

						$obituaryType=9;

					}elseif($v['type']==2){

						$obituaryType=8;

					}

					$this->modelObituaryRecord->updateInfo(['id'=>$v['id']],['status'=>1]);

				}

			}

		}

		if(!empty($obituaryType)){

			$this->modelObituary->updateInfo(['id'=>$oid],['state'=>$obituaryType]);
		}

	}

	/**

	 * 主动释放当前租用设备

	 * 

	 */ 

	public function obituaryRecordfree(){

		$record_data = $this->recordList(['a.status'=>1],'a.*','a.id asc',false);

		foreach($record_data as $k=>$v){

			if(!empty($v['endtime']) && TIME_NOW>strtotime($v['endtime'])){

				$this->modelObituaryRecord->updateInfo(['id'=>$v['id']],['status'=>2]);

				if($v['type']==1){

					$this->modelMourn->updateInfo(['id'=>$v['tid']],['state'=>0]);

				}elseif($v['type']==2){

					$this->modelCold->updateInfo(['id'=>$v['tid']],['state'=>0]);

				}

			}

		}

	}

	

	/**

	 * 获取当前租用设备

	 * 

	 */ 

	public function getRecordData($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){

		$data = array();

		$list = $this->recordList($where,$field,$order,$paginate);

		foreach($list as $v){

			if($v['type']==1){

				$data['mourn'] = $v;

				$data['mourn']['list'] = $this->logicMourn->mournInfo(['id'=>$v['tid']],'*');

			}elseif($v['type']==2){

				$data['cold'] = $v;

				$data['cold']['list'] = $this->logicCold->coldInfo(['id'=>$v['tid']],'*');
			}	

		}
		
		return $data;
	}

		/**

     * 设备信息删除

     */

    public function recordDel($where = [])
    {

		$result = $this->modelObituaryRecord->deleteInfo($where,true);

        $result && action_log('删除', '设备信息删除' . '，where：' . http_build_query($where));

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }
	
	public function obituaryRecordList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelObituaryRecord->alias('a');
		
		$join = [
				[SYS_DB_PREFIX . 'obituary o', 'o.id = a.oid','left'],

                ];

		return $this->modelObituaryRecord->getList($where, $field , $order, $paginate,$join);
	}
	
	public function getWhere($data=[]){
		
		$where=[];
		
		!empty($data['search_data']) && $where['o.name'] = ['like', '%'.$data['search_data'].'%'];
		
		return $where;
	}
}

