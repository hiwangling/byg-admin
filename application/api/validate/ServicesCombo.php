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
 * 服务验证器
 */
class ServicesCombo extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'title'              => 'require|unique:services',
		'service'			=>'require',
    ];

    // 验证提示
    protected $message  =   [
        
        'title.require'              => '服務名称不能为空',
        'title.unique'               => '服務名称已存在',
		'service.unique'               => '套餐服务不能为空',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' =>  ['title,service'],
		'add' =>  ['title,service'],
    ];
    
}
