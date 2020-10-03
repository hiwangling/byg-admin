<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Check extends BaseController

{

    

	

	public function checkList()

    {

		$where = $this->logicCheck->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$where['a.status']=['neq',2];

		

		$list = $this->logicCheck->getCheckList($where,'a.*','a.id desc',$limit);

		

        return setRetrunData('success', $list->toArray());

    }



 

    public function checkAdd()

    {

		return $this->logicCheck->checkAdd($this->param);

		

    }

	

	public function checkSign()

    {

		return $this->logicCheck->checkSign($this->param);

		

    }

	

	public function checkRenew()

    {

		return $this->logicCheck->checkRenew($this->param);

		

    }

	

	public function checkTake(){

		

		return $this->logicCheck->checkTake($this->param);

	}



    public function checkDel($id=0)

    {

        return $this->logicCheck->checkDel(['id'=>$id]);

    }



    public function checkEdit()

    {

        

		return $this->logicCheck->checkEdit($this->param);



    }

	

	public function checkDetails(){

		

		return $this->logicCheck->checkDetails($this->param);

	}
	
	public function printRenewList(){
		
		$list = $this->logicCheck->getRenewList(['a.cid'=>$this->param['id']],'a.id,a.totalprice,a.amount');
		
		foreach($list as $k=>$v){
			$v['title'] = "骨灰续存";
		}
		
		return setRetrunData('success', $list);
	}
	
	public function printCheckList(){
		
		$list = $this->logicCheck->getCheckList(['a.id'=>$this->param['id']],'a.id,a.totalprice,a.amount');
		
		foreach($list as $k=>$v){
			$v['title'] = "骨灰寄存";
		}
		
		return setRetrunData('success', $list);
	}

}

