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

class Services extends BaseLogic

{

    

    /**

     * 获取服务列表

     */

    public function getServicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='')
    {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelServices->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'supplies s', 'a.id = s.sid','left'],

					[SYS_DB_PREFIX . 'wreath w', 'a.id = w.sid','left'],

                ];

		return $this->modelServices->getList($where, $field , $order, $paginate,$join,$group);

    }

	

	/**

     * 服务信息添加

     */

    public function servicesAdd($data = [])

    {

 
        $validate_result = $this->validateServices->scene('add')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateServices->getError(),'',1);

        }

		

		$data[TIME_CT_NAME] = TIME_NOW;

		

        $result = $this->modelServices->setInfo($data);

		

		$result && action_log('新增', '新增服务，name:' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

		

    }

	

	/**

     * 服务信息编辑

     */

    public function servicesEdit($data = [])

    {

        

        $validate_result = $this->validateServices->scene('edit')->check($data);

        

        if (!$validate_result) {

            

            return setRetrunData($this->validateServices->getError(),'',1);

        }

        $result = $this->modelServices->setInfo($data);

        

        $result && action_log('编辑', '编辑服务，name：' . $data['title']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	

	/**

     * 服务删除

     */

    public function servicesDel($data = [])

    {

        

		$result = $this->modelServices->deleteInfo(['id'=>$data['id']],true);

        

        $result && action_log('删除', '服务删除' . '，where：' .$data['id']);

        

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	/**

     * 获取服务列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

		

		 !empty($data['type']) && $where['a.type'] = $data['type'];

        

        !empty($data['search_data']) && $where['a.title'] = ['like', '%'.$data['search_data'].'%'];

        

        return $where;

    }

	

	/**

     * 获取服务统计数据

     */

	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		return $this->modelServices->stat($where,$stat_type,$field);

	}

	/**

     * 获取分类列表

	 * type 获取部分分类 1.接运 2.礼厅 3.火化

     */

	public function getServicesData($type=0){

		$list = array();

		$servicesType = parse_config_array('servicesType');

		$needType = $this->getServicesType($type);

		foreach($servicesType as $k=>$v){

			if(in_array($k,$needType)){

				if($k==6){

					$services = $this->logicServicesCombo->getServicesComboList(['status'=>1],true,'',false);

				}else{

					$services = $this->getServicesList(['a.'.DATA_STATUS_NAME=>1,'a.type'=>$k],'a.*','a.iorder asc',false,'a.id');

				}

				$list[$k]['title'] = $v;

				$list[$k]['key'] = $k;

				$list[$k]['services'] = $services;

			}

		}
		return array_values($list);

	}

	

	/**

     * 获取分类列表

	 * type 获取部分分类 1.接运

     */

	public function getServicesType($type=0){
		$servicesType = parse_config_array('servicesType');
		
		$needType = array_keys($servicesType);

		return $needType;
	}

	/**

     * 获取服务详情

	 * 

     */
	public function servicesInfo($where=[],$field=true){

		return $this->modelServices->getInfo($where,$field);
	}

   

    

}

