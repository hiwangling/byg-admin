<?php
// +---------------------------------------------------------------------+
// | OneBase    | [ WE CAN DO IT JUST THINK ]                            |
// +---------------------------------------------------------------------+
// | Licensed   | http://www.apache.org/licenses/LICENSE-2.0 )           |
// +---------------------------------------------------------------------+
// | Author     | Bigotry <3162875@qq.com>                               |
// +---------------------------------------------------------------------+
// | Repository | https://gitee.com/Bigotry/OneBase                      |
// +---------------------------------------------------------------------+

namespace app\api\logic;
use app\api\controller\BaseController as BaseController;

/**
 * 服务逻辑
 */
class ServicesCombo extends BaseLogic
{
    
    /**
     * 获取服务列表
     */
    public function getServicesComboList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelServicesCombo->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 服务信息添加
     */
    public function servicesComboAdd($data = [])
    {
        
        $validate_result = $this->validateServicesCombo->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateServicesCombo->getError(),'',1);
        }
		
		$add_array = array(
			'title' => $data['title'],
			'price' => $data['price']
		);
        $result = $this->modelServicesCombo->addInfo($add_array);
		
		$this->logicComboServices->comboServicesAdd($data['service'],$result);
		
		$result && action_log('新增', '新增服务，name：' . $data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	/**
     * 服务信息编辑
     */
    public function servicesComboEdit($data = [])
    {
        
        $validate_result = $this->validateServicesCombo->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateServicesCombo->getError(),'',1);
        }
		
		$add_array = array(
			'title' => $data['title'],
			'price' => $data['price']
		);
		
        $result = $this->modelServicesCombo->updateInfo(['id'=>$data['id']],$add_array);
		
		//删除套餐服务详情
		$this->modelComboServices->deleteInfo(['cid'=>$data['id']],true);
		
		$this->logicComboServices->comboServicesAdd($data['service'],$data['id']);
        
        $result && action_log('编辑', '编辑服务，name：' . $data['title']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
	/**
     * 服务删除
     */
    public function servicesComboDel($where = [])
    {
        
		$result = $this->modelServicesCombo->deleteInfo($where,true);
        
        $result && action_log('删除', '服务删除' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 获取服务列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['search_data']) && $where['title'] = ['like', '%'.$data['search_data'].'%'];
        
        return $where;
    }
	
	/**
     * 获取服务统计数据
     */
	public function getStat($where = [], $stat_type = 'count', $field = 'id'){
		
		return $this->modelServicesCombo->stat($where,$stat_type,$field);
		
	}
   /**
     * 获取套餐详情数据
     */
	public function servicesComboInfo($where=[],$field=true){
		
		return $this->modelServicesCombo->getInfo($where,$field);
	}
	
    
}
