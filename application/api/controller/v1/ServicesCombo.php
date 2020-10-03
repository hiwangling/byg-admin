<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class ServicesCombo extends BaseController
{
    
	
	public function servicesComboList()
    {
		$where = $this->logicServicesCombo->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$list = $this->logicServicesCombo->getServicesComboList($where,true,'id asc',$limit);
		
        return setRetrunData('success', $list->toArray());
    }

 
    public function servicesComboAdd()
    {
		return $this->logicServicesCombo->servicesComboAdd($this->param);
		
    }

    public function servicesComboDel($id=0)
    {
        return $this->logicServicesCombo->servicesComboDel(['id'=>$id]);
    }

    public function servicesComboEdit()
    {
        
		return $this->logicServicesCombo->servicesComboEdit($this->param);

    }
	
	public function servicesInfo(){
		
		$info = $this->logicServicesCombo->servicesComboInfo(['id'=>$this->param['id']]);
		
		$list = $this->logicComboServices->comboServicesList(['a.cid'=>$this->param['id'],'a.status'=>1],'a.*,s.title','',false);
		
		return setRetrunData('success', $list);
	
	}
	
	public function servicesComboCommon(){

		$data['services'] = $this->logicServices->getServicesData(2);
		
		return setRetrunData('success', $data);
		
	}
}