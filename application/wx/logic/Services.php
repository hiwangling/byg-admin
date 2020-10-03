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



namespace app\wx\logic;

use app\wx\controller\BaseController as BaseController;



/**

 * 服务逻辑

 */

class Services extends BaseLogic

{

     public function getServicesList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS,$group='')
     {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelServices->alias('a');

		$join = [

                ];

		return $this->modelServices->getList($where, $field , $order, $paginate,$join,$group);

     }
	
     public function getServicesData($type=0){

		$services = $this->getServicesList(['a.'.DATA_STATUS_NAME=>1,'a.type'=>$type],'a.*','a.iorder asc',false,'a.id');

		return array_values($services);

	}
}