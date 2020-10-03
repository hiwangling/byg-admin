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
 * 寄存证器
 */
class Check extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'name'              => 'require',
		'startime'			=>'require'
    ];

    // 验证提示
    protected $message  =   [
        
        'name.require'              => '车牌不能为空',
        'startime.require'               => '寄存时间不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['name','startime'],
		'add' =>  ['name','startime'],
    ];
    
}
