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

class Furnace extends BaseLogic

{

    /**

     * 获取冷柜列表

     */

    public function getFurnaceList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelFurnace->alias('a');
		
		$join = [
					
					
                ];
		

		return $this->modelFurnace->getList($where, $field , $order, $paginate,$join);
    }


	

	/**

     * 冷柜信息添加

     */

    public function FurnaceAdd($data = [])

    {

		$data[TIME_CT_NAME] = TIME_NOW;

        $result = $this->modelFurnace->setInfo($data);

		

		$result && action_log('新增', '新增，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

		

    }

	

	/**

     * 冷柜信息编辑

     */

    public function furnaceEdit($data = [])

    {


        $result = $this->modelFurnace->setInfo($data);

        

        $result && action_log('编辑', '编辑，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	

	/**

     * 冷柜删除

     */

    public function FurnaceDel($where = [])

    {

        

		$result = $this->modelFurnace->deleteInfo($where);

        

        $result && action_log('删除', '删除' . '，where：' . http_build_query($where));

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	/**

     * 获取冷藏柜列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

        

        !empty($data['search_data']) && $where['a.title'] = ['like', '%'.$data['search_data'].'%'];

        

        return $where;

    }

	

	public function furnaceInfo($where=[],$field=true){

		

		return $this->modelFurnace->getInfo($where,$field);

		

	}
	
	public function furnaceValue($where=[],$field=true){

		

		return $this->modelFurnace->getValue($where,$field);

		

	}

   

    

}

