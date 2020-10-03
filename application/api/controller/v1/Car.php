<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Car extends BaseController

{

    

	

	public function carList()

    {

		$where = $this->logicCar->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicCar->getCarList($where,true,'id desc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }



 

    public function carAdd()

    {

		return $this->logicCar->carAdd($this->param);

		

    }



    public function carDel($id=0)

    {

        return $this->logicCar->carDel(['id'=>$id]);

    }



    public function carEdit()

    {

        

		return $this->logicCar->carEdit($this->param);



    }

}