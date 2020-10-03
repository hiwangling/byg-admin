<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Furnace extends BaseController

{

    

	

	public function furnaceList()

    {

		$where = $this->logicFurnace->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicFurnace->getFurnaceList($where,'a.*','a.id asc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }

    public function furnaceAdd()

    {

		return $this->logicFurnace->FurnaceAdd($this->param);

		

    }

    public function furnaceDel($id=0)

    {

        return $this->logicFurnace->FurnaceDel(['id'=>$id]);

    }



    public function furnaceEdit()

    {

		return $this->logicFurnace->FurnaceEdit($this->param);

    }

}