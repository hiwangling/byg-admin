<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Obituary extends BaseController

{

	public function obituaryList()
    {
		$this->logicObituaryRecord->obituaryRecordfree();
		
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

    public function obituaryAdd()
    {
		return $this->logicObituary->obituaryDispose($this->param);
    }



    public function obituaryDel($id=0)
    {
        return $this->logicObituary->obituaryDel(['id'=>$id]);

    }

    public function obituaryEdit()
    {
		return $this->logicObituary->obituaryAlter($this->param);
    }
	
	public function obituaryState(){

		return $this->logicObituary->obituaryState($this->param);

	}

	public function obituaryInfo(){

		$data = array();

		$this->logicObituaryRecord->obituaryRecordfree();

		$list = $this->logicObituary->obituaryInfo(['a.id'=>$this->param['id']],'a.*,sum(f.totalprice) as totalprice');

		

		$record = $this->logicObituaryRecord->getRecordData(['a.oid'=>$this->param['id'],'a.sub'=>0],'a.*','a.id asc',false);



		$data = array_merge($list->toArray(),$record);

		

		$where['a.oid'] = $this->param['id'];

		

		$where['a.'.DATA_STATUS_NAME] = 1;

		

		$data['services'] = $this->logicServicesorder->getServicesorderDatato($where,0);

		

		$data['services_totalprice'] = array_sum(array_map(function($val){return $val['totalprice'];}, $data['services']));
		
		return setRetrunData('success', $data);
	}

	

	public function obituaryCommon(){

		$data['mourn'] = $this->logicMourn->getMournList([DATA_STATUS_NAME=>1],true,'id asc',false);

		$data['cold'] = $this->logicCold->getColdList([DATA_STATUS_NAME=>1],true,'id asc',false);

		$data['services'] = $this->logicServices->getServicesData(2);
		
		$data['recetype'] = parse_config_array('recetype');

		return setRetrunData('success', $data);
	}
	
}