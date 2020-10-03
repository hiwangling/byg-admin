<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Statistics extends BaseController

{

	/**

	 *	接运统计

	 */

	public function carsendStat(){

		$where = $this->logicStatistics->carsendStatWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state'] = 5;

		$list = $this->logicStatistics->carsendStat($where,'a.*,o.name,f.totalprice,s.price as s_price,s.operator as s_operator,m.username','a.id desc',$limit);
		
		foreach($list as $k=>$v){
			$v['sealiftperson'] = !empty($v['sealiftperson'])?explode(',',$v['sealiftperson']):'';
		}

        return setRetrunData('success', $list->toArray());
	}

	/**

	 *	完结业务统计

	 */

	public function obituaryStat(){

		$where = $this->logicStatistics->getObituaryStatWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		if(!empty($this->param['ordername'])){
			if($this->param['ordername']=="farewelltime"){
				$ordername='a.farewelltime';
			}elseif($this->param['ordername']=="serial"){
				$ordername='c.serial';
			}
		}else{
			$ordername='c.serial';
		}
		
		$order = !empty($this->param['order'])?$this->param['order']:"desc";

		$where['a.state'] = 15;

		$list = $this->logicStatistics->getObituaryList($where,'a.*,s.address as s_address,c.serial as c_serial,c.signtime as c_signtime,sum(f.totalprice) as f_totalprice,se.id as se_id',$ordername.' '.$order,$limit);

		foreach($list as $k=>$v){

			$v['c_signtime'] = !empty($v['c_signtime'])?date('Y-m-d H:i',$v['c_signtime']):'';
		}
		
        return setRetrunData('success', $list->toArray());
	}
	
	public function excelobituaryStat(){

		$where = $this->logicStatistics->getObituaryStatWhere($this->param);

		$where['a.state'] = 15;

		$where['f.status'] = 2;
		
		$list = $this->logicStatistics->getObituaryList($where,'a.*,s.address as s_address,c.serial as c_serial,c.signtime as c_signtime,sum(f.totalprice) as f_totalprice,se.id as se_id,h.id as h_id','a.id desc',false);

		foreach($list as $k=>$v){

			$v['c_signtime'] = !empty($v['c_signtime'])?date('Y-m-d H:i',$v['c_signtime']):'';

			if(!empty($v['h_id']) || !empty($v['se_id'])){

				$v['bone_ash'] =1;

			}else{

				$v['bone_ash'] =0;

			}

		}
		
        return setRetrunData('success', $list);

	}

	/**

	 *	无名尸统计

	 */

	public function obituaryUnknown(){

		$where = $this->logicStatistics->getUnknownWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.unknown'] = 1;

		$where['f.status'] = ['neq',-1];

		$list = $this->logicStatistics->getObituaryList($where,'a.*,s.address as s_address,c.signtime as c_signtime,sum(f.totalprice) as f_totalprice','a.id desc',$limit);
        return setRetrunData('success', $list->toArray());

	}

	/**

	 *	火化登记薄

	 */

	public function gather(){

		$where = $where = $this->logicCremation->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$where['o.state'] =15;
		
		$list = $this->logicCremation->getCremationList($where,'a.*,o.farewelltime as o_farewelltime,o.nation as o_nation,o.reason as o_reason,o.linksex as o_linksex,o.card as o_card,o.relation as o_relation,o.dietime as o_dietime,o.registered as o_registered,o.sex as o_sex,o.age as o_age,o.name as o_name,o.linkman as o_linkman,o.linkphone as o_linkphone,o.nature','a.farewelltime desc',$limit);
		
		 return setRetrunData('success', $list->toArray());

	}

	/**

	 *	服务统计

	 */

	public function servicesState(){
		//服务统计
		$where = $this->logicStatistics->servicesStatWhereto($this->param);
		$where['o.state'] = 15;
		$where['a.pay'] = 1;
		$servicestype = parse_config_array('servicestype');
		$list = $this->logicStatistics->servicesStateto($where,'a.sid,s.type as s_type,a.title,a.price,count(a.id) as count_id,sum(a.totalprice) as sum_price','s.type,a.id asc',false);
		foreach($list as $k=>$v)
		{
		
		}
		return setRetrunData('success', $list);
	}
	
	public function ServicesStateInfo(){
		
		$where = $this->logicStatistics->servicesStatWhereto($this->param);
		
		$where['a.pay'] = 1;
		
		$servicestype = parse_config_array('servicestype');
		
		$list = $this->logicStatistics->servicesState($where,'a.sid,s.type as s_type,a.title,a.price,count(a.id) as count_id,sum(a.totalprice) as sum_price','s.type,a.id asc',false,'a.price');

		return setRetrunData('success', $list);
	}
	
}