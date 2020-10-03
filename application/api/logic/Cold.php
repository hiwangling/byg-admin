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

class Cold extends BaseLogic

{

    

    /**

     * 获取冷柜列表

     */

    public function getColdList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {



		$where[DATA_STATUS_NAME] = !empty($where[DATA_STATUS_NAME])?$where[DATA_STATUS_NAME]:['neq', DATA_DELETE];

		

		return $this->modelCold->getList($where, $field , $order, $paginate);

    }


	

	/**

     * 冷柜信息添加

     */

    public function ColdAdd($data = [])

    {

        

        $validate_result = $this->validateCold->scene('add')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateCold->getError(),'',1);

        }

		

		$data[TIME_CT_NAME] = TIME_NOW;

        $result = $this->modelCold->setInfo($data);

		

		$result && action_log('新增', '新增，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

		

    }

	

	/**

     * 冷柜信息编辑

     */

    public function coldEdit($data = [])

    {

        

        $validate_result = $this->validateCold->scene('edit')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateCold->getError(),'',1);

        }

        $result = $this->modelCold->setInfo($data);

        

        $result && action_log('编辑', '编辑冷柜，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	

	/**

     * 冷柜删除

     */

    public function ColdDel($where = [])

    {

        

		$result = $this->modelCold->deleteInfo($where);

        

        $result && action_log('删除', '冷柜删除' . '，where：' . http_build_query($where));

        

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

	

	public function coldInfo($where=[],$field=true){

		

		return $this->modelCold->getInfo($where,$field);

		

	}

   

    

}

