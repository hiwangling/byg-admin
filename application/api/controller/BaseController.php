<?php

namespace app\api\controller;

use app\lib\exception\AuthException;

use app\lib\exception\ManagerException;

use think\Controller;

use think\Request;

use app\api\service\Token;

use app\api\service\Manager as ManagerService;

use app\api\model\Manager as ManagerModel;

use app\common\controller\ControllerBase;



class BaseController extends ControllerBase

{

    protected $mid = null ;

    protected $manager = null;

    protected $manager_info = null;

    protected $auth_arr = null;

	protected $method = null;

	protected $curr_url = null;



    public function _initialize()

    {

        parent::_initialize();
		
		$data = input('get.');
	
		$noVal = !empty($data['noVal'])?$data['noVal']:0;

		if($noVal==0){

        	$this->mid = Token::getCurrentUid();

			$this->manager = ManagerModel::get($this->mid);

		

			if(!$this->manager){

			  throw new ManagerException();

			}

			$this->manager_info = ManagerService::getManagerInfo($this->manager);



			$request = Request::instance();



			$curr_url = $request->baseUrl();



			$this->curr_url = $curr_url;



			$this->method = $request->method();



			$this->auth_arr = ManagerService::getManagerMenu($this->manager);



			if (!array_key_exists($curr_url, $this->auth_arr['allaule'])) {

				//throw new AuthException();

			}

			if (!array_key_exists($curr_url,  $this->auth_arr['aule'])) {

				//throw new AuthException();

			}
		}else{
			
		}



    }

	

	public static function getManagerValue($type){

		switch($type){

			case 'mid':

				return (new self())->mid;

				break;

			case 'realname':

				return (new self())->manager->realname;

				break;

			case 'username':

				return (new self())->manager->username;

				break;

			default:

				return (new self())->manager;	

		}

		

	}



    protected function getSellname()

    {

        $sellname = '';

        if ($this->manager->realname)

            $sellname = $this->manager->realname;

        else

            $sellname = $this->manager->username;

        return $sellname;

    }

	

	

}