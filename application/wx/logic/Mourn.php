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
}

