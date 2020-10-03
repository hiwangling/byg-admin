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

 * 寄存柜逻辑

 */

class Locker extends BaseLogic

{
       public function getLockerList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
	   {
	        
			$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

            
			return $this->modelLocker->getList($where, $field , $order, $paginate);
			
	   }
	   
	   /**
	
		 * 寄存柜信息添加
	
		 */
	
		public function lockerAdd($data = [])
	
		{
			$data[TIME_CT_NAME] = TIME_NOW;
	
			$data[DATA_STATUS_NAME] = 1;
	
			$result = $this->modelLocker->setInfo($data);
	
			
	
			$result && action_log('新增', '新增部门，name：' . $data['title']);
	
			
	
			return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	
			
	
		}
	/**

     * 寄存柜信息编辑

     */

    public function lockerEdit($data = [])

    {

        $result = $this->modelLocker->setInfo($data);

        

        $result && action_log('编辑', '编辑部门，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	/**

     * 寄存柜删除

     */

    public function lockerDel($where = [])

    {

        

		$result = $this->modelLocker->deleteInfo($where,true);

        

        $result && action_log('删除', '部门删除' . '，where：' . http_build_query($where));

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	/**

     * 获取寄存柜列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

        

        !empty($data['search_data']) && $where['title'] = ['like', '%'.$data['search_data'].'%'];

        

        return $where;

    }
}