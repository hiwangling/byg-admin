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
 * 车辆逻辑
 */
class Car extends BaseLogic
{
    
    /**
     * 获取车辆列表
     */
    public function getCarList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		return $this->modelCar->getList($where, $field , $order, $paginate);
    }
	
	/**
     * 车辆信息添加
     */
    public function carAdd($data = [])
    {
        
        $validate_result = $this->validateCar->scene('add')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCar->getError(),'',1);
        }
		
		$data[TIME_CT_NAME] = TIME_NOW;
		
        $result = $this->modelCar->setInfo($data);
		
		$result && action_log('新增', '新增车辆，name：' . $data['number']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
		
    }
	
	/**
     * 车辆信息编辑
     */
    public function carEdit($data = [])
    {
        
        $validate_result = $this->validateCar->scene('edit')->check($data);
        
        if (!$validate_result) {
            
            return setRetrunData($this->validateCar->getError(),'',1);
        }
        $result = $this->modelCar->setInfo($data);
        
        $result && action_log('编辑', '编辑车辆，name：' . $data['number']);
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	
	/**
     * 车辆删除
     */
    public function carDel($where = [])
    {
        
		$result = $this->modelCar->deleteInfo($where,true);
        
        $result && action_log('删除', '车辆删除' . '，where：' . http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 获取车辆列表搜索条件
     */
    public function getWhere($data = [])
    {
        
        $where = [];
        
        !empty($data['search_data']) && $where['number'] = ['like', '%'.$data['search_data'].'%'];
        
        return $where;
    }
	
   
    
}
