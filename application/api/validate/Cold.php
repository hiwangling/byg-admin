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



namespace app\api\validate;



/**

 * 冷柜验证器

 */

class Cold extends BaseValidate

{

    

    // 验证规则

    protected $rule =   [

        

        'title'              => 'require',

    ];



    // 验证提示

    protected $message  =   [

        

        'title.require'              => '名称不能为空',

    ];



    // 应用场景

    protected $scene = [

        

        'edit' =>  ['title'],

		'add' =>  ['title'],

    ];

    

}

