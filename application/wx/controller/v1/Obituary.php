<?php

namespace app\wx\controller\v1;

use app\wx\controller\BaseController;



class Obituary extends BaseController
{
     public function obituaryList()
     {
		$where = $this->logicObituary->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state'] = ['neq',15];

		$list = $this->logicObituary->getObituaryList($where,'a.*,s.address as s_address,or.title as mourn_title','a.id desc',$limit);
		
		foreach($list as $k=>$v){

			if(!empty($v['farewelltime']))
			{
			     if($v['farewelltime']!='0000-00-00')
				 {
				      $list[$k]['farewelltime'] = $v['farewelltime'];   
				 }
				 else
				 {
				      $list[$k]['farewelltime'] = '';
				 }
			}

		}

        return setRetrunData('success', $list->toArray());

    }
	 
	 public function obituaryInfo(){

		$data = array();

		$list = $this->logicObituary->obituaryInfo(['a.id'=>$this->param['id']],'a.*,sum(f.totalprice) as totalprice');

		$record = $this->logicObituaryRecord->recordInfo(['a.oid'=>$this->param['id']],'a.*','a.id asc',false);

		$where['a.oid'] = $this->param['id'];

		$where['a.'.DATA_STATUS_NAME] = 1;
		
		$data['obituary'] = $list;
		
		$data['record'] = $record;

		$data['services'] = $this->logicServicesorder->getServicesorderData($where,1);

		return setRetrunData('success', $data);
	}
}