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
 * 接运证器
 */
class Carsend extends BaseValidate
{
    
    // 验证规则
    protected $rule =   [
        
        'address'              => 'require',
		'linkman'              => 'require',
		'linkphone'            => 'require',
		'cid'                  => 'gt:0',
    ];

    // 验证提示
    protected $message  =   [
        
        'address.require'              => '接运地址不能为空',
        'linkman.require'               => '联系人不能为空',
		'linkphone.require'               => '联系电话不能为空',
		'cid'							=>'请选择接运车辆',
    ];

    // 应用场景
    protected $scene = [
        
        'edit' => ['address,linkman,linkphone,cid'],
		'add' =>  ['address,linkman,linkphone,cid'],
    ];
    
}
