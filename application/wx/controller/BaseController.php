<?php
namespace app\wx\controller;
use app\common\controller\ControllerBase;

class BaseController extends ControllerBase
{
	protected $openid = null ;
	protected $manager = null ;
    
	public function _initialize()
    {
        parent::_initialize();
		
		if(!empty($this->param['tolopenid'])){
			
			$this->openid = $this->param['tolopenid'];
		
			unset($this->param['tolopenid']);
		}
    }
	
	public static function getManagerValue(){

		return (new self())->openid;	
		
	}
	
}