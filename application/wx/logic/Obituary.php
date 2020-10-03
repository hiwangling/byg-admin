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

 * 车辆逻辑

 */

class Obituary extends BaseLogic

{
       public function getObituaryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

		{
	
			$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
	
			$this->modelObituary->alias('a');
	
			$join = [
	
						[SYS_DB_PREFIX . 'cremation c', 'c.oid = a.id','left'],
	
						[SYS_DB_PREFIX . 'carsend s', 's.oid = a.id AND s.recetype=1 AND s.status=1','left'],
				
						[SYS_DB_PREFIX . 'obituary_record or', 'a.id = or.oid AND or.type=1 AND or.status>0','left'],
	
					];
	
			return $this->modelObituary->getList($where,$field,$order,$paginate,$join);
	
		}
	   
	   public function obituaryAdd($data=[],$type='')
		{
			$ifcheck = !empty($data['ifcheck'])?$data['ifcheck']:2;
			
			$basic = !empty($data['basic'])?$data['basic']:1;
			
			$add_data = array(
	
				'serial'=>$this->getSerial(),
	
				'name'=>$data['name'],
	
				'sex'=>!empty($data['sex'])?$data['sex']:'',
	
				'age'=>!empty($data['sex'])?$data['age']:'',
	
				'registered'=>!empty($data['registered'])?$data['registered']:'',
	
				'dietime'=>!empty($data['dietime'])?$data['dietime']:'',
	
				'nation'=>!empty($data['nation'])?$data['nation']:'',
	
				'linksex'=>!empty($data['linksex'])?$data['linksex']:'',
	
				'card'=>!empty($data['card'])?$data['card']:'',
	
				'reason'=>!empty($data['reason'])?$data['reason']:'',
	
				'relation'=>!empty($data['relation'])?$data['relation']:'',
	
				'linksex'=>!empty($data['linksex'])?$data['linksex']:'',
	
				'linkman'=>$data['linkman'],
	
				'linkphone'=>$data['linkphone'],
				
				'linkcard'=>!empty($data['linkcard'])?$data['linkcard']:'',
				
				'linkaddress'=>!empty($data['linkaddress'])?$data['linkaddress']:'',
				
				'ifcheck'=>$ifcheck,
	
				'basic'=>$basic,
	
				'farewelltime'=>!empty($data['farewelltime'])?$data['farewelltime']:'',
	
				'starttime'=>!empty($data['starttime'])?$data['starttime']:'',
	
				'servertype'=>1,
				
				'unknown'=>!empty($data['unknown'])?$data['unknown']:0,
				
				'nature'=>!empty($data['nature'])?$data['nature']:1,
				
				'operator'=>$data['operator'],
				
				'remark'=>!empty($data['remark'])?$data['remark']:'',
	
				'state'=>$type
	
			);
			
			$result = $this->modelObituary->addInfo($add_data);
	
			return $result;
		}
		
		public function getSerial(){

		 $timeStart= date('Y-m-01',time());

	     $timeEnd= date("Y-m-01", strtotime('+1 month'));

		 $where['create_time'] = [['egt',strtotime($timeStart)],['lt',strtotime($timeEnd)],'AND'];
		
		 $where['nonumber'] = 0;

		 $number = date('Ymd',TIME_NOW);

		 $count = $this->getStat($where,'count','id');

		 $leng = mb_strlen($count+1);

		 $zoreLeng = 4-$leng;

		 $zore ='';

		 for($i=0;$i<$zoreLeng;$i++){

		 	$zore.='0';

		 }

		return $number.$zore.($count+1);

	}
	
	public function obituaryEdit($where=[],$data=[]){

		if(!empty($data))

			$edit_data = $data;

		else

			return false;

		$result = $this->modelObituary->updateInfo($where,$edit_data);
		
		return $result;

	}
	
	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		return $this->modelObituary->stat($where,$stat_type,$field);
	}
	
	public function obituaryInfo($where=[],$field=true){

		$this->modelObituary->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'cremation c', 'c.oid = a.id','left'],

					[SYS_DB_PREFIX . 'finance f', 'f.oid = a.id AND f.status !=-1','left'],
                ];

		return $this->modelObituary->getInfo($where,$field,$join);
	}
	
	public function getWhere($data = [])
    {
        $where = [];
		
        !empty($data['search_data']) && $where['a.name'] = ['like', '%'.$data['search_data'].'%'];

        return $where;
    }
}