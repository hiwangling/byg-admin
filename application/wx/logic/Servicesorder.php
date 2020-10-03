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



namespace app\wx\logic;

use app\wx\controller\BaseController as BaseController;



/**

 * 服务逻辑

 */

class Servicesorder extends BaseLogic

{
	  public function servicesorderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
			$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
			$this->modelServicesorder->alias('a');
		
			$join = [
		
						[SYS_DB_PREFIX . 'services s', 'a.sid = s.id','left'],
		
						[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],
		
					];
		
			return $this->modelServicesorder->getList($where, $field , $order, $paginate,$join);
	   }
	   
	   public function servicesorderAdd($data=[],$oid=0,$type=0)
       {
	
			if(empty($data['server'])){
	
				return false;
	
			}
	        
			$orderData = $data['server'];
			
			foreach($orderData as $k=>$v)
			{
			    $tid = !empty($data['tid'])?$data['tid']:0;
				
				$this->servicesorderAppend($v,$oid,$type,$data['operator'],$tid);
			}
	   }
	   
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
	
				'number'=>!empty($data['number'])?$data['number']:1,
	
				'totalprice'=>$data['totalprice'],
				
				'task'=>!empty($data['task'])?$data['task']:'',
	
				'operator'=>$operator,
	
				'state'=>!empty($data['state'])?$data['state']:1,
	
				'pay'=>!empty($data['pay'])?1:0
	
			);
	
			$result = $this->modelServicesorder->addInfo($add_data);
	
			return $result;
	
		}
		
		
	public function servicesorderEdit($data=[],$type=0){

		$idArray = $this->servicesorderList(['a.oid'=>$data['oid'],'a.type'=>$type,'a.status'=>1],'a.id',true,false);

		$delId = implode(',',array_column($idArray,'id'));
		
		$where = ['oid'=>$data['oid'],'type'=>$type];
		
		$del = $this->servicesorderDel($where,$delId);
		
		if($del!==false)
		{
	        $this->servicesorderAdd($data,$data['oid'],$type);
		}
	}
	
	public function servicesorderDel($where = [],$delId='')
    {
		$result = $this->modelServicesorder->deleteInfo($where,true);
		
		return $result;
    }
	
	public function getServicesorderData($where=[],$type=0)
	{	
		//$list = array();
		
		$where['a.type'] = $type;
		
		$where['a.status'] = 1;

		$services = $this->servicesorderList($where,'a.*,s.unit','a.id asc',false);

		//$list['services'] = $services;

		//$list['totalprice'] = !empty($services)?array_sum(array_map(function($val){return $val['totalprice'];}, $services)):0;

		return array_values($services);
	}
}