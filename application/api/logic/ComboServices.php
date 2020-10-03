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
 * 套餐明细
 */
class ComboServices extends BaseLogic
{
    
	
	/**
	 * 套餐列表
	 */
    public function comboServicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelComboServices->alias('a');
		
		$join = [
					[SYS_DB_PREFIX . 'services s', 's.id = a.sid','left'],	
                ];
		
		return $this->modelComboServices->getList($where,$field,$order,$paginate,$join);
	}
	
	/**
	 * 套餐添加
	 */
    public function comboServicesAdd($data=[],$cid){
		
		foreach($data as $k=>$v){
			$add_data = array(
				'cid'=>$cid,
				'sid'=>$v['id'],
				'number'=>1,
				'price'=>$v['price']
			);
			$this->modelComboServices->addInfo($add_data);
		}
	}
	
	/**
	 * 套餐服务详情
	 */
	public function comboServicesInfo($where=[],$field=true){
		
		$this->modelComboServices->alias('a');
		
		$join = [
					[SYS_DB_PREFIX . 'services s', 's.id = a.sid','left'],	
                ];
		
		return $this->modelComboServices->getInfo($where,$field,$join);
		
	}
}
