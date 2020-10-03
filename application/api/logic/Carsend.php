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

 * 接运逻辑

 */

class Carsend extends BaseLogic
{
    /**

     * 获取接运列表

     */

    public function getCarsendList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		
		$this->modelCarsend->alias('a');
		
		$join = [
					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],
			
					[SYS_DB_PREFIX . 'manager m', 'a.driver = m.id','left'],

					[SYS_DB_PREFIX . 'car c', 'a.cid = c.id','left'],
                ];
				
		return $this->modelCarsend->getList($where, $field , $order, $paginate,$join);

    }

	

	/**

     * 接运信息添加

     */

    public function carsendAdd($data = [])

    {

		$oid = $this->logicObituary->obituaryAdd($data,1);//逝者信息添加

        $result = $this->carsendAppend($data,$oid);//接运添加
		
		$data['tid'] = $result;

		$this->logicServicesorder->servicesorderAdd($data,$oid,1);//服务添加

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }
	
	/**

     * 接运数据添加

     */

	public function carsendAppend($data,$oid){
	
		$validate_result = $this->validateCarsend->scene('add')->check($data);
		
        if (!$validate_result) {

            return setRetrunData($this->validateCarsend->getError(),'',1);

        }
		
		$carsend_add_data = array(

			'oid'=>$oid,

			'linkman'=>$data['linkman'],

			'linkphone'=>$data['linkphone'],

			'outtime'=>$data['outtime'],

			'address'=>$data['address'],

			'driver'=>!empty($data['driver'])?$data['driver']:'',

			'operator'=>$data['operator'],

			'recetype'=>$data['recetype'],

			'remark'=>$data['remark'],

			'state'=>1

		);


		$result = $this->modelCarsend->addInfo($carsend_add_data);//接运添加
		
		$result && action_log('新增', '新增接运，name:' . $data['name']);

		return $result;
	}

	

	/**

     * 接运信息编辑

     */

    public function carsendEdit($data = [])
    {
        $validate_result = $this->validateCarsend->scene('edit')->check($data);
		
        if (!$validate_result) 
		{
            return setRetrunData($this->validateCarsend->getError(),'',1);
        }
		
		$obituary_data = array(

			'name'=>$data['name'],

			'sex'=>!empty($data['sex'])?$data['sex']:'',

			'age'=>!empty($data['sex'])?$data['age']:'',

			'operator'=>$data['operator']

		);

		$this->logicObituary->obituaryEdit(['id'=>$data['oid']],$obituary_data);//修改逝者信息
		
		$carsend_data = array(

			'id'=>$data['id'],

			'linkman'=>$data['linkman'],

			'linkphone'=>$data['linkphone'],

			'outtime'=>$data['outtime'],

			'address'=>$data['address'],

			'driver'=>$data['driver'],

			'operator'=>$data['operator'],

			'recetype'=>$data['recetype'],

			'remark'=>$data['remark'],

		);

        $result = $this->modelCarsend->updateInfo(['id'=>$data['id']],$carsend_data);//修改出车信息

		$data['tid'] = $data['id'];
		
		$result && $this->logicServicesorder->servicesorderEdit($data,1);//修改服务信息
				
        $result && action_log('编辑', '编辑接运，name：' . $data['name']);

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }
		
	/**

     * 接运单值

     */

	public function carsendValue($where=[],$field=true){

		return $this->modelCarsend->getValue($where,$field);
	}

	/**

     * 接运状态编辑

     */

	public function carsendState($data=[]){

		$update = array();
		
		$recetype = $this->carsendValue(['id'=>$data['id']],'recetype');

		switch($data['state']){

			case 1:

				$update['state'] = 3;

				$update['signtime'] = TIME_NOW;

				break;

			case 3:
                $update['state'] = 4;

				$update['gotime'] = TIME_NOW;

				break;

			case 4:
				if($recetype==3){
					$update['state'] = 7;
				}elseif($recetype==2){
					$update['state'] = 13;
				}else{
					$update['state'] = 5;
				}
				$update['backtime'] = TIME_NOW;

				break;

			default:

				$update['state'] = $data['state'];

		}
		
		$result = $this->modelCarsend->updateInfo(['id'=>$data['id']],$update);

		$this->modelObituary->updateInfo(['id'=>$data['oid']],['state'=>$update['state']]);

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	}
	/**

     * 接运删除

     */

    public function carsendDel($where = [])
	{
		$result = $this->modelCarsend->deleteInfo(['id'=>$where['id']],true);
		
		$result && $this->modelObituary->deleteInfo(['id'=>$where['oid']],true);
		
        $result && action_log('删除', '接运删除' . '，where：' . http_build_query($where));

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }
	/**

     * 获取接运列表搜索条件

     */

    public function getWhere($data = [])
    {
        $where = [];

		if(!empty($data['startime']) && !empty($data['endtime'])){

			$where['a.outtime'] = [['egt',strtotime($data['startime'])],['elt',strtotime($data['endtime'])],"AND"];

		}

        !empty($data['search_data']) && $where['a.linkman|a.linkphone|o.name'] = ['like', '%'.$data['search_data'].'%'];

		!empty($data['driver']) && $where['a.driver'] = ['like', '%'.$data['driver'].'%'];

        return $where;

    }

	/**

     * 获取接运统计数据

     */

	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		return $this->modelCarsend->stat($where,$stat_type,$field);
	}
	
	/**

     * 接运详情

     */

	public function carsendInfo($where=[],$field=true){

		

		$this->modelCarsend->alias('a');

		

		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],
			
				    [SYS_DB_PREFIX . 'manager m', 'a.driver = m.id','left'],

					[SYS_DB_PREFIX . 'car c', 'a.cid = c.id','left'],

					[SYS_DB_PREFIX . 'finance f', 'f.tid = a.id AND f.oid= a.oid AND f.state=1','left'],

                ];

		

		return $this->modelCarsend->getInfo($where,$field,$join);



	}
}



