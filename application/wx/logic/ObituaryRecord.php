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

 * 租用逻辑

 */

class ObituaryRecord extends BaseLogic

{
	public function recordList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS){

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelObituaryRecord->alias('a');

		return $this->modelObituaryRecord->getList($where, $field , $order, $paginate);
	}

	public function recordInfo($where=[],$field=true){

		$this->modelObituaryRecord->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'obituary o', 'o.id = a.oid','left'],
                ];

		return $this->modelObituaryRecord->getInfo($where,$field,$join);

	}
}

