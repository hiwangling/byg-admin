<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Finance extends BaseController

{
	public function financeList()
    {

		$where = $this->logicFinance->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state']=['neq',15];

		$list = $this->logicFinance->getObituaryList($where,'a.*,sum(f.totalprice) as totalprice,c.serial as c_serial,c.signtime as c_signtime,or.title as mourn_title','a.id desc',$limit);

		

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

	public function financeInfo(){

		return $this->logicFinance->financeInfo($this->param);

	}

	public function financePay(){

		return $this->logicFinance->financePay($this->param);
	}

	
}