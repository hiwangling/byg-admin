<?php
namespace app\api\controller\v1;
use app\api\controller\BaseController;

class Supplies extends BaseController
{
    
	
	public function suppliesList()
    {
		$where = $this->logicServices->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$where['a.type'] = 4;
		
		//$where['s.status'] = 1;
		
		$list = $this->logicServices->getServicesList($where,'a.*,sum(s.number) as supplies_number','a.id desc',$limit,'a.id');
		
		foreach($list as $k=>$v){
			$v['supplies_number'] = !empty($v['supplies_number'])?$v['supplies_number']:0;
		}
		
        return setRetrunData('success', $list->toArray());
    }
	
	public function storageList(){
		
		//$where = $this->logicSupplies->getWhere($this->param);
		
		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;
		
		$where['a.sid'] = $this->param['sid'];
		
		$where['a.type'] = 1;
		
		$list = $this->logicSupplies->getStorageList($where,'a.*,s.title','a.id desc',$limit);
		
        return setRetrunData('success', $list->toArray());
		
	}

 
    public function suppliesAdd()
    {
		return $this->logicSupplies->suppliesAdd($this->param);
		
    }

    public function suppliesDel($id=0)
    {
        return $this->logicSupplies->suppliesDel(['id'=>$id]);
    }

    public function suppliesEdit()
    {
        
		return $this->logicSupplies->suppliesEdit($this->param);

    }
}