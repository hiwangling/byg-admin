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
class ServicesComboorder extends BaseLogic
{
	
	/**
	 *获取已选套餐服务列表
	 */
	public function getServicesComboorderList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelServicesComboorder->alias('a');
		
		$join = [
					[SYS_DB_PREFIX . 'services_combo s', 'a.sid = s.id','left'],
					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],
                ];
		
		return $this->modelServicesComboorder->getList($where, $field , $order, $paginate,$join);
		
	}
	
	/**
     * 套餐服务信息添加
     */
    public function ServicesComboorderAdd($data = [],$oid=0,$operator)
    {
      
		$add_data = array(
			'oid'=>$oid,
			'sid'=>$data['id'],
			'title'=>$data['title'],
			'price'=>$data['price'],
			'number'=>$data['number'],
			'totalprice'=>$data['totalprice'],
			'operator'=>$operator
		);

        $result = $this->modelServicesComboorder->addInfo($add_data);
		
		$result && action_log('新增', '新增套餐服务，name：' . $add_data['title'].' 逝者ID:'.$oid);
        
        return $result;
		
    }
	
	/**
     * 获取套餐具体服务
     */
	public function getServiceComboData($data=[],$cid){
		
		$list = array();
		$service = '';
		if(!empty($data['combo'])){
			foreach($data['combo'] as $k=>$v){
				$service = $this->logicComboServices->comboServicesInfo(['a.cid'=>$data['id'],'a.sid'=>$v,'a.status'=>1],'a.*,s.title');
				if($service){
					$list[$k] = $service;
				}
			}
		}else{
			$list = $this->logicComboServices->comboServicesList(['a.cid'=>$data['id'],'a.status'=>1],'a.*,s.title','',false);
		}
		foreach($list as $k=>$v){
			$v['type']=6;
			$v['totalprice'] = $v['price'];
			$v['cid']=$cid;
			$v['id'] = $v['sid'];
		}
		
		return $list;
	}

	
	/**
     * 获取套餐服务统计数据
     */
	public function getStat($where = [], $stat_type = 'count', $field = 'id'){
		
		return $this->modelServicesComboorder->stat($where,$stat_type,$field);
		
	}
	
	/**
     * 服务信息删除
     */
    public function servicesComboorderDel($where = [])
    {
        
		$result = $this->modelServicesComboorder->deleteInfo($where);
        
        $result && action_log('删除', '服务信息删除' . '，where：' .http_build_query($where));
        
        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	
	/**
     * 编辑服务信息
     */
	public function servicesComboorderUpdate($where=[],$data=[]){

		$result = $this->modelServicesComboorder->updateInfo($where,$data);
		
		return $result;
		
	}
   
    
}
