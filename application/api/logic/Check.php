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



namespace app\api\logic;

use app\api\controller\BaseController as BaseController;



/**

 * 寄存逻辑

 */

class Check extends BaseLogic

{

    

    /**

     * 获取寄存列表

     */

    public function getCheckList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {



		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		

		$this->modelCheck->alias('a');

		

		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

					//[SYS_DB_PREFIX . 'finance f', 'f.tid = a.id AND f.oid=a.oid AND f.state=5','left'],

                ];

		

		return $this->modelCheck->getList($where, $field , $order, $paginate,$join,'a.id');

		

    }
	
	//续存列表
	 public function getRenewList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {



		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		

		$this->modelRenew->alias('a');

		

		$join = [

					[SYS_DB_PREFIX . 'check c', 'a.cid = c.id','left'],

					//[SYS_DB_PREFIX . 'finance f', 'f.tid = a.id AND f.oid=a.oid AND f.state=5','left'],

                ];

		

		return $this->modelRenew->getList($where, $field , $order, $paginate,$join,'a.id');

		

    }

	
	
	/**
     * 寄存信息添加
     */
    public function checkAdd($data = [])

    {
        /*$validate_result = $this->validateCheck->scene('add')->check($data);

        if (!$validate_result) {

            return setRetrunData($this->validateCheck->getError(),'',1);
        }*/
		
		if(empty($data['oid'])){
			$add_data=array(
				'serial'=>$this->logicObituary->getSerial(),
				'name'=>$data['name'],
				'linkman'=>$data['linkman'],
				'linkphone'=>$data['linkphone'],
				'operator'=>$data['operator'],
				'relation'=>$data['relation'],
				'registered'=>!empty($data['registered'])?$data['registered']:'',
				'nonumber'=>1,
				'state'=>15
			);
			$oid = $this->modelObituary->addInfo($add_data);
			$status = 1;
			$type=2;
		}else{
			$oid =$data['oid'];
			$status = 0;
			$type=1;
		}
		
		$check_add = array(
			'oid'=>$oid,
			'number'=>!empty($data['number'])?$data['number']:'',
			'relation'=>!empty($data['relation'])?$data['relation']:'',
			'name'=>$data['name'],
			'card'=>$data['card'],
			'startime'=>!empty($data['startime'])?$data['startime']:'',
			'linkman'=>$data['linkman'],
			'linkcard'=>!empty($data['linkcard'])?$data['linkcard']:'',
			'linkphone'=>$data['linkphone'],
			'linkaddress'=>!empty($data['linkaddress'])?$data['linkaddress']:'',
			'endtime'=>!empty($data['endtime'])?$data['endtime']:'',
			'operator'=>!empty($data['operator'])?$data['operator']:'',
			'totalprice'=>!empty($data['totalprice'])?$data['totalprice']:'',
			'registered'=>!empty($data['registered'])?$data['registered']:'',
			'amount'=>!empty($data['amount'])?$data['amount']:1,
			'status'=>$status,
			'type'=>$type
		);
		
		if($type==2){
			$check_add['serial'] = 'GW'.$this->getSerial();
		}else{
			$check_add['serial'] = 'GN'.$this->getSerial();
		}
		
        $result = $this->modelCheck->addInfo($check_add);

		/*$finance_add = array(

			'name'=>$data['name'],

			'totalprice'=>!empty($data['totalprice'])?$data['totalprice']:0,

			'operator'=>$data['operator']

		);

		$this->logicFinance->financeAdd($finance_add,$oid,$result,5);*/

		$result && action_log('新增', '新增寄存，name：' . $data['name']);

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	
	/**

     * 获取寄存编号

     */

	public function getSerial(){

		

		 $timeStart= date('Y-01-01 00:00:00',strtotime(date("Y-m-d")));

	     $timeEnd= date('Y-m-d H:i:s', strtotime("$timeStart +1 year"));

		 $where['create_time'] = [['egt',$timeStart],['lt',$timeEnd],'AND'];
		
		 $where['type']=2;
		
		 $number = date('Y',TIME_NOW);

		 $count = $this->getStat($where,'count','id');

		 $leng = mb_strlen($count+1);

		 $zoreLeng = 4-$leng;

		 $zore ='';

		 for($i=0;$i<$zoreLeng;$i++){

		 	$zore.='0';

		 }
		//echo $count;
		return $number.$zore.($count+1);

	}
	
	/**

     * 获取逝者信息统计数据

     */

	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		

		return $this->modelCheck->stat($where,$stat_type,$field);

		

	}
	
	/**

     * 寄存信息编辑

     */

    public function checkEdit($data = [])

    {

        

        $validate_result = $this->validateCheck->scene('edit')->check($data);

        if (!$validate_result) {

            return setRetrunData($this->validateCheck->getError(),'',1);
        }
		
		
		//$check_add['status']=1;

		//unset($check_add['totalprice']);

        $result = $this->modelCheck->setInfo($data);

		/*$finance_edit = array(

			'name'=>$data['name'],

			'totalprice'=>$data['totalprice'],

			'operator'=>$data['operator']

		);

		$this->logicFinance->financeEdit(['tid'=>$data['id'],'state'=>5],$finance_edit);*/

        $result && action_log('编辑', '编辑寄存，name：' . $data['name']);

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
    }

	/**

     * 寄存签字

     */

	public function checkSign($data=[]){

		$sign_data = array(

			'signature'=>$data['signature'],

			'ifsignature'=>!empty($data['signature'])?1:0,

		);

		$result = $this->modelCheck->updateInfo(['id'=>$data['id']],$sign_data);

		

		$result && action_log('签字', '寄存签字，寄存ID'.$data['id']);

		

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	}

	

	/**

     * 寄存取出

     */

	public function checkTake($data=[]){

		$take_data = array(

			'taketime'=>$data['taketime'],

			'takename'=>$data['takename'],

			'takeoperator'=>$data['operator'],

			'take_signature'=>!empty($data['take_signature'])?$data['take_signature']:'',

			'take_ifsignature'=>!empty($data['take_signature'])?1:0,

			'status'=>2,

		);

		$result = $this->modelCheck->updateInfo(['id'=>$data['id']],$take_data);

		

		$result && action_log('取出', '寄存取出，寄存ID'.$data['id']);

		

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	}

	

	/**

     * 寄存续存

     */

	public function checkRenew($data=[]){

		
		
		$check = $this->getCheckInfo(['a.id'=>$data['id']],'a.*');
		
		$renew = array(
			'cid'=>$check['id'],
			'statr'=>$check['endtime'],
			'end'=>$data['endtime'],
			'totalprice'=>$data['totalprice'],
			'amount'=>!empty($data['amount'])?$data['amount']:1,
			'operator'=>$data['operator']
		);

		$this->modelRenew->addInfo($renew);
		
		$renew_data = array(

			'endtime'=>$data['endtime'],

		);

		$result = $this->modelCheck->updateInfo(['id'=>$data['id']],$renew_data);
		
		
		/*$finance_add = array(

			'name'=>$data['name'],

			'totalprice'=>$data['totalprice'],

			'operator'=>$data['operator'],

		);

		

		$oid = !empty($data['oid'])?$data['oid']:0;

		$this->logicFinance->financeAdd($finance_add,$oid,$data['id'],6);*/

		

		$result && action_log('续存', '骨灰续存，寄存ID'.$data['id']);

		

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	}

	/**

     * 寄存删除

     */

    public function checkDel($where = [],$type=1)

    {

        if($type==1){
			$info = $this->getCheckInfo(['a.id'=>$where['id']],'a.*');
		}else{
			$info = $this->getCheckInfo(['a.oid'=>$where['oid']],'a.*');
		}
		if(!empty($info)){
			if($info['type']==2){
				$this->modelObituary->deleteInfo(['id'=>$info['oid']],true);
			}
			$this->modelRenew->deleteInfo(['cid'=>$info['id']],true);
			
		}
		
		$result = $this->modelCheck->deleteInfo($where,true);
		
        $result && action_log('删除', '寄存删除' . '，where：' . http_build_query($where));

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	

	/**

     * 获取寄存列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

		

		if(!empty($data['startime']) && !empty($data['endtime'])){

			

			$where['a.taketime'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];

		}

        

        !empty($data['search_data']) && $where['a.name'] = ['like', '%'.$data['search_data'].'%'];

        

        return $where;

    }

	

	/**

     * 获取寄存信息单条数据

     */

	public function getCheckInfo($where=[],$field = true){

		

		$this->modelCheck->alias('a');

		

		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],

					//[SYS_DB_PREFIX . 'finance f', 'f.oid = a.oid AND f.tid = a.id AND f.state=5','left'],

                ];

		

		return $this->modelCheck->getInfo($where,$field,$join);

		

	}

	

	/**

     * 获取寄存详情

     */

   public function checkDetails($data=[]){

	   $info = $this->getCheckInfo(['a.id'=>$data['id']],'a.*,o.sex as o_sex,o.age as o_age');
	   
	   if($info['type']==1){
		   
		   $info['serial'] = $this->logicCremation->getCremationValue(['oid'=>$info['oid']],'serial');
	   }
	   /*$financeState = parse_config_array('financeState');

	   $finance = $this->logicFinance->getFinanceList(['a.tid'=>$data['id'],'a.state'=>[['eq',5],['eq',6],'OR']],'a.*',false);

	   foreach($finance as $k=>$v){

		   $v['state_name'] = $financeState[$v['state']];

		   $v['paytime'] = !empty($v['paytime'])?date('Y-m-d H:i:s',$v['paytime']):'';

	   }

	   $info['finance_list'] = $finance;*/
	   
	   $renewList = $this->getRenewList(['a.cid'=>$data['id']],'a.*','a.id asc',false);
	   
	   foreach($renewList as $k=>$v){
		   $v['title']="骨灰续存";
	   }
	   $info['finance_list'] = $renewList;
	   
	   return setRetrunData(RESULT_SUCCESS,$info);

   }

   

}

