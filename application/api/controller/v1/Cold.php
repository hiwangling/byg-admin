<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Cold extends BaseController

{

    

	

	public function coldList()

    {

		$where = $this->logicCold->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicCold->getColdList($where,true,'id asc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }

	public function coldObituary(){
		
		$where = $this->logicObituaryRecord->getWhere($this->param);
		
		$where['a.type']=2;
		$where['a.status']=1;
		
		$list = $this->logicObituaryRecord->obituaryRecordList($where,'a.*,o.name,o.sex,o.age','a.tid asc',false);
		
		 return setRetrunData('success', $list);
		
	}


 

    public function coldAdd()

    {

		return $this->logicCold->ColdAdd($this->param);

		

    }



    public function coldDel($id=0)

    {

        return $this->logicCold->ColdDel(['id'=>$id]);

    }



    public function coldEdit()

    {

        

		return $this->logicCold->ColdEdit($this->param);



    }

}