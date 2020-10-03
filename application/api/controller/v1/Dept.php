<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Dept extends BaseController

{

    

	

	public function deptList()

    {

		$where = $this->logicDept->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicDept->getDeptList($where,true,'id desc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }

    public function deptAdd()

    {

		return $this->logicDept->deptAdd($this->param);

		

    }



    public function deptDel($id=0)

    {

        return $this->logicDept->deptDel(['id'=>$id]);

    }



    public function deptEdit()

    {

        

		return $this->logicDept->deptEdit($this->param);



    }

}