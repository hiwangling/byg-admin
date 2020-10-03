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

 * 部门逻辑

 */

class Manager extends BaseLogic

{

    

	/**

     * 人员统计查询

     */

    public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		

		return $this->modelManager->stat($where,$stat_type,$field);

		

	}

	

	/**

     * 人员信息添加

     */

	public function ManagerAdd($data=[]){

		

		$validate_result = $this->validateManager->scene('add')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateManager->getError(),'',1);

        }

        

		$data['password'] = md5(md5($data['password']));

		

        $result = $this->modelManager->setInfo($data);

		

		$result && action_log('新增', '新增员工，name：' . $data['username']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

		

	}

	

	/**

     * 人员信息编辑

     */

	public function ManagerEdit($data=[]){

		

		$validate_result = $this->validateManager->scene('edit')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateManager->getError(),'',1);

        }

        

		if($data['password']){

			$data['password'] = md5(md5($data['password']));

		}else{

			unset($data['password']);

		}



        $result = $this->modelManager->setInfo($data);

		

		$result && action_log('编辑', '编辑员工，name：' . $data['username']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

		

	}

	

	/**

     * 人员信息列表

     */

	public function getManagerList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){

		

		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

		

		return $this->modelManager->getList($where, $field , $order, $paginate);

		

	}
	
	public function getManagerListNew($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){
		
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelManager->alias('a');
		
		$join = [

					[SYS_DB_PREFIX . 'branch b', 'a.branch = b.id','left'],

                ];
		
		
		return $this->modelManager->getList($where, $field , $order, $paginate,$join);
	}

	

	/**

     * 获取人员列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

        

        !empty($data['username']) && $where['userno|nickname|realname|username|mobile'] = ['like', '%'.$data['username'].'%'];

        

        return $where;

    }

	

	/**

     * 获取人员列表详情

     */

	public function managerInfo($where=[],$field=true){

		

		return $this->modelManager->getInfo($where,$field);

	}

	

	/**

     * 获取人员列表详情

     */

	public function managerValue($where=[],$field=true){

		

		return $this->modelManager->getValue($where,$field);

	}
	
	public function managerDel($where = [])

    {

        

		$result = $this->modelManager->deleteInfo($where,true);

        $result && action_log('删除', '员工删除' . '，where：' . http_build_query($where));

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

   

    

}

