<?php

namespace app\wx\controller\v1;

use app\wx\controller\BaseController;



class Carsend extends BaseController
{


	public function carsendList()
    {
      
	    $where = $this->logicCarsend->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state'] = ['lt',5];

		$list = $this->logicCarsend->CarsendList($where,'a.*,o.servertype,o.unknown,o.name,o.sex,o.age','a.id desc',$limit);

        return setRetrunData('success', $list->toArray());
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
       
		$data['services'] = $this->logicServicesorder->getServicesorderData($where,1);
		
		return setRetrunData('success', $data);
	}
	
	public function carsendAdd()
    {
		 return $this->logicCarsend->carsendAdd($this->param);
    }
	
	public function carsendEdit()
    {
		return $this->logicCarsend->carsendEdit($this->param);
    }
	
	public function severEdit()
    {
		return $this->logicCarsend->severEdit($this->param);
    }
	
	public function carsendState()
	{
		return $this->logicCarsend->carsendState($this->param);
	}
	
	public function carsendCommon()
	{
		$data['recetype'] = parse_config_array('recetype');

		$data['services'] = $this->logicServices->getServicesData(1);

		return setRetrunData('success', $data);
	}
}