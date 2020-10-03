<?php
namespace app\api\validate;


class NewAuthRule extends BaseValidate
{
   protected $rule = [
    'pid' => 'require|number',
    'type' => 'isNotEmpty',
    'url' => 'isNotEmpty',
    'title' => 'require|isNotEmpty',
    'status'=>'require|number',
    'ordernum'=>'number',
   ];
}