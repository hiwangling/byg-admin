<?php

namespace app\api\controller\v1;



use app\api\controller\BaseController;

use app\api\validate\EditManager;

use app\api\validate\EditPwd;

use app\api\model\Manager as ManagerModel;

use app\api\validate\IDMustBePositiveInt;

use app\api\validate\NewManager;

use app\lib\exception\ManagerException;





class Manager extends BaseController

{



    public function managerList()

    {

       

		$where = $this->logicManager->getWhere($this->param);

		

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		

		$list = $this->logicManager->getManagerList($where,true,'id desc',$limit);

		

        return setRetrunData('success', $list->toArray());

		

    }
	
	public function getManagerList(){
		
		$where=[];
		
		$where['a.id']=['neq',1];
		if(!empty($this->param['branch'])){
			if($this->param['branch']==2){
				$where['a.grade_id'] = $this->param['branch'];
			}else{
				$where['a.branch'] = $this->param['branch'];
			}
			
		}else{
			$where['a.branch'] = [['eq',2],['eq',3],['eq',15],'OR'];
		}
		$list = $this->logicManager->getManagerListNew($where,'a.*,b.branch_name','a.branch asc',false);
		
		return setRetrunData('success', $list);
	}

    public function managerAdd()

    {

        

		return $this->logicManager->ManagerAdd($this->param);



    }



    public function managerEdit()

    {

		

		return $this->logicManager->ManagerEdit($this->param);

    }





    public function managerInfo()

    {

        $data = [

            'manager_info' => $this->manager_info,

            'manager_auth_url' => $this->auth_arr['manager_auth_url'],

            'perms' => $this->auth_arr['manager_auth_url2'],

            'manager_menus' => $this->auth_arr['manager_menus'],

            'roles' => $this->auth_arr['roles'],

			'config'=>config()

        ];

        return setRetrunData('success', $data);

    }



    public function editPwd()

    {

        $validate = new EditPwd();

        $validate->goCheck();

        $data = input('post.');



        if (md5(md5($data['password'])) != $this->manager->password) {

            throw new ManagerException([

                'code' => 400,

                'msg' => '旧密码不正确',

                'errorCode' => 60001

            ]);

        }



        if (md5(md5($data['new_pwd'])) == $this->manager->password) {

            throw new ManagerException([

                'code' => 400,

                'msg' => '新密码和旧密码一致',

                'errorCode' => 60002

            ]);

        }

        $this->manager->password = md5(md5($data['new_pwd']));

        if ($this->manager->save()) {

            return setRetrunData('修改成功');

        } else {

            return setRetrunData('修改失败', '', 1);

        }

    }
	
	 public function managerDel($id=0)

    {

        return $this->logicManager->managerDel(['id'=>$id]);

    }



}