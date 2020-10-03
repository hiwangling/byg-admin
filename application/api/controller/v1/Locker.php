<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Locker extends BaseController

{

    

	

	public function lockerList()

    {

		$where = $this->logicLocker->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicLocker->getLockerList($where,true,'id desc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }

    public function lockerAdd()

    {

		return $this->logicLocker->lockerAdd($this->param);

		

    }



    public function lockerDel($id=0)

    {

        return $this->logicLocker->lockerDel(['id'=>$id]);

    }



    public function lockerEdit()

    {

        

		return $this->logicLocker->lockerEdit($this->param);



    }

}