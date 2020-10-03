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
 * 殡葬用品证器
 */
class Supplies extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
		'number'			=>'gt:0'
    ];

    // 验证提示
    protected $message  =   [
        
        'number'               => '数量不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['number'],
		'add' =>  ['number'],
    ];
    
}
