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

 * 悼念厅逻辑

 */

class Mourn extends BaseLogic

{

    /**

     * 获取悼念厅列表

     */

    public function getMournList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {



		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

		

		return $this->modelMourn->getList($where, $field , $order, $paginate);

    }
	
	/**

     * 悼念厅信息添加

     */

    public function mournAdd($data = [])

    {

        

        $validate_result = $this->validateMourn->scene('add')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateMourn->getError(),'',1);

        }

		

		$data[TIME_CT_NAME] = TIME_NOW;

		

        $result = $this->modelMourn->setInfo($data);

		

		$result && action_log('新增', '新增悼念厅，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

		

    }

	

	/**

     * 悼念厅信息编辑

     */

    public function mournEdit($data = [])

    {

        

        $validate_result = $this->validateMourn->scene('edit')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateMourn->getError(),'',1);

        }

        $result = $this->modelMourn->setInfo($data);

        

        $result && action_log('编辑', '编辑悼念厅，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	/**

     * 悼念厅删除

     */

    public function mournDel($where = [])
    {
		$result = $this->modelMourn->deleteInfo($where,true);

        $result && action_log('删除', '悼念厅删除' . '，where：' . http_build_query($where));

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }

	

	/**

     * 获取冷藏柜列表搜索条件

     */

    public function getWhere($data = [])
    {
        $where = [];
		
        !empty($data['search_data']) && $where['title'] = ['like', '%'.$data['search_data'].'%'];

        return $where;
    }

	public function mournInfo($where=[],$field=true)
	{
		return $this->modelMourn->getInfo($where,$field);
	}
}

