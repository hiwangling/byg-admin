<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Carsend extends BaseController

{

	public function carsendList()
    {
		$where = $this->logicCarsend->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state'] = ['lt',5];

		$list = $this->logicCarsend->getCarsendList($where,'a.*,o.servertype,o.unknown,o.name,o.sex,o.age','a.id desc',$limit);

        return setRetrunData('success', $list->toArray());
    }

    public function carsendAdd()
    {
		 return $this->logicCarsend->carsendAdd($this->param);
    }

	/**
	 *接运任务中心
	**/

	public function carsendTask(){

		$where = $this->logicCarsend->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state'] = [['egt',1],['lt',5],'AND'];

		$list = $this->logicCarsend->getCarsendList($where,'a.*,c.number as c_number,o.servertype,o.unknown,o.name,o.sex,o.age','a.id desc',$limit);

        return setRetrunData('success', $list->toArray());
	}

	/**
	 *编辑接运服务状态
	**/

	public function carsendState()
	{
		return $this->logicCarsend->carsendState($this->param);
	}

    public function carsendDel()
    {
        return $this->logicCarsend->carsendDel($this->param);
    }

    public function carsendEdit()
    {
		return $this->logicCarsend->carsendEdit($this->param);
    }

	public function carsendEditInfo()
	{

		$list = $this->logicCarsend->carsendInfo(['a.id'=>$this->param['id']],'a.*,c.number as c_number,o.servertype,o.unknown,o.name,o.sex,o.age');

		$data['list'] = $list->toArray();

		$where['a.oid'] = $this->param['oid'];
		
		$where['a.tid'] = $this->param['id'];

		$where['a.'.DATA_STATUS_NAME] = 1;

		if($this->param['type']==2){			

			$where['a.inlet'] = 1;

		}
        
		$data['services'] = $this->logicServicesorder->getServicesorderDatato($where,1);
		
		$data['services_totalprice'] = array_sum(array_map(function($val){return $val['totalprice'];}, $data['services']));
		
		return setRetrunData('success', $data);

	}

	public function carsendCommon()
	{
		$data['recetype'] = parse_config_array('recetype');

		$data['car'] = $this->logicCar->getCarList([DATA_STATUS_NAME=>1,'state'=>0],true,'id asc',false);

		$data['services'] = $this->logicServices->getServicesData(1);

		return setRetrunData('success', $data);
	}
}