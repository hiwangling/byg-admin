<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\model\Servicesorder as ServicesorderModel;


class Services extends BaseController

{

    

	

	public function servicesList()

    {

		$where = $this->logicServices->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicServices->getServicesList($where,'a.*','a.iorder asc',$limit,'a.id');

		

        return setRetrunData('success', $list->toArray());

    }



 

    public function servicesAdd()

    {

		return $this->logicServices->servicesAdd($this->param);

		

    }



    public function servicesDel()

    {

        return $this->logicServices->servicesDel($this->param);

    }



    public function servicesEdit()

    {

        

		return $this->logicServices->servicesEdit($this->param);



    }

	

	public function servicesCommon(){

		

		$data['branch'] = $this->logicBranch->getBranchList([DATA_STATUS_NAME=>1],'id,branch_name','id asc',false);

		

		$data['iorder'] = $this->logicServices->getStat('','max','iorder');

		

		return setRetrunData('success', $data);

		

		

	}
	
	public function servicesSign(){
		
		$Servicesorder = new ServicesorderModel();
		
		$data = $this->param;
		
		$services = $this->logicServicesorder->servicesorderList(['a.status'=>1,'a.oid'=>$data['oid'],'a.state'=>1],'a.*','',false);
		
		$list = array();
		foreach($services as $k=>$v){
			$list[$k]['id']=$v['id'];
			$list[$k]['state']=2;
		}
		
		$result = $Servicesorder->saveAll($list);
		
		return setRetrunData('success', $result);
	}

}