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

 * 统计逻辑

 */

class Statistics extends BaseLogic

{
   
	

	
	/**

     * 获取车队统计条件

     */

	public function carsendStatWhere($data=[]){

		$where = [];

		if(!empty($data['startime']) && !empty($data['endtime'])){

			$where['a.outtime'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];

		}

        !empty($data['search_data']) && $where['a.linkman|a.linkphone|o.name'] = ['like', '%'.$data['search_data'].'%'];

		!empty($data['driver']) && $where['a.driver'] = ['like', '%'.$data['driver'].'%'];

        return $where;
	}

	

	/**

     * 车辆情况统计表

     */

    public function carsendStat($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelCarsend->alias('a');

		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

					[SYS_DB_PREFIX . 'car c', 'a.cid = c.id','left'],
			
				    [SYS_DB_PREFIX . 'manager m', 'a.driver = m.id','left'],

					[SYS_DB_PREFIX . 'finance f', 'f.tid = a.id AND f.oid=a.oid','left'],

					[SYS_DB_PREFIX . 'servicesorder s', 's.oid = a.oid AND s.sid=61','left'],

                ];
				
		return $this->modelCarsend->getList($where, $field , $order, $paginate,$join);

    }

	

	/**

     * 获取逝者统计列表

     */

    public function getObituaryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelObituary->alias('a');

		$join = [

					[SYS_DB_PREFIX . 'cremation c', 'c.oid = a.id','left'],

					[SYS_DB_PREFIX . 'carsend s', 's.oid = a.id AND s.recetype=1 AND s.status=1','left'],

					[SYS_DB_PREFIX . 'carsend se', 'se.oid = a.id AND se.recetype=2 AND se.status=1','left'],

					[SYS_DB_PREFIX . 'finance f', 'f.oid = a.id','left'],

                ];

		return $this->modelObituary->getList($where,$field,$order,$paginate,$join,'a.id');

    }

	/**

     * 获取逝者信息列表搜索条件

     */

    public function getObituaryStatWhere($data = [])
    {
        $where = [];

		if(!empty($data['startime']) && !empty($data['endtime'])){

			$where['r.create_time'] = [['egt',strtotime($data['startime'])],['elt',strtotime($data['endtime'])],"AND"];

		}
		
        !empty($data['search_data']) && $where['a.name|c.serial'] = ['like', '%'.$data['search_data'].'%'];

        return $where;
    }

	

	/**

     * 无名尸列表搜索条件

     */

    public function getUnknownWhere($data = [])
    {
        $where = [];

		if(!empty($data['startime']) && !empty($data['endtime'])){

			$where['a.create_time'] = [['egt',strtotime($data['startime'])],['elt',strtotime($data['endtime'])],"AND"];

		}

        !empty($data['search_data']) && $where['a.name'] = ['like', '%'.$data['search_data'].'%'];

        return $where;

    }
	
	public function servicesState($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='a.sid'){
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		$this->modelServicesorder->alias('a');
		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

					[SYS_DB_PREFIX . 'services s', 'a.sid = s.id','left'],
                ];
		return $this->modelServicesorder->getList($where,$field,$order,$paginate,$join,$group);
	}

	public function wreathStat($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelWreath->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'services s', 'a.sid = s.id','left'],
                ];

		return $this->modelWreath->getList($where,$field,$order,$paginate,$join,'a.sid');

	}

    public function servicesStateto($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='a.sid')
	{
	    $where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];
		$this->modelServicesorder->alias('a');
		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

					[SYS_DB_PREFIX . 'services s', 'a.sid = s.id','left'],
                ];
		return $this->modelServicesorder->getList($where,$field,$order,$paginate,$join,$group);
	}
	
	public function servicesStatWhereto($data=[]){

		$where = [];
		
		$timeNow =  date('Y-m-01 H:i:s',strtotime(date("Y-m-d")));
		$timeTwo =  date('Y-m-d H:i:s', strtotime("$timeNow +1 month"));

		if(!empty($data['startime']) && !empty($data['endtime'])){
			$where['a.create_time'] = [['egt',strtotime($data['startime'])],['elt',strtotime($data['endtime'])],"AND"];
		}else{
			$where['a.create_time'] = [['egt',strtotime($timeNow)],['elt',strtotime($timeTwo)],"AND"];
		}

        !empty($data['title']) && $where['a.title'] = ['like', '%'.$data['title'].'%'];

		!empty($data['servicestype']) && $where['s.type'] = $data['servicestype'];

		!empty($data['search_data']) && $where['o.name'] = ['like', '%'.$data['search_data'].'%'];

        return $where;

	}
}

