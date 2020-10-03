<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Mourn extends BaseController

{

    

	

	public function mournList()

    {

		$where = $this->logicMourn->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicMourn->getMournList($where,true,'id desc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }

    public function mournAdd()

    {

		return $this->logicMourn->mournAdd($this->param);

		

    }



    public function mournDel($id=0)

    {

        return $this->logicMourn->mournDel(['id'=>$id]);

    }



    public function mournEdit()

    {

        

		return $this->logicMourn->mournEdit($this->param);



    }

}