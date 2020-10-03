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
 * 车辆证器
 */
class Car extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'number'              => 'require|unique:car',
    ];

    // 验证提示
    protected $message  =   [
        
        'number.require'              => '车牌不能为空',
        'number.unique'               => '车牌已存在',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['number'],
		'add' =>  ['number'],
    ];
    
}
