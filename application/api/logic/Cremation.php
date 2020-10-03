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

 * 火化逻辑

 */

class Cremation extends BaseLogic

{

    

   

	/**

     * 获取火化列表

     */

    public function getCremationList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)
    {
		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelCremation->alias('a');

		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],	

                ];

		return $this->modelCremation->getList($where,$field,$order,$paginate,$join);

    }

	public function cremationDispose($data=[]){

		$oid = $this->logicObituary->obituaryAdd($data,10);

		$cremation_data = array(

			'oid'=>$oid,

			'number'=>$data['number'],

			'operator'=>$data['operator'],

			'remark'=>!empty($data['c_remark'])?$data['c_remark']:'',

			'haulier'=>!empty($data['haulier'])?$data['haulier']:'',

			'state'=>1

		);

		$result = $this->cremationAdd($cremation_data);

		$data['oid'] = $oid;

		//服务编辑

		$this->logicServicesorder->servicesorderEdit($data,3);//修改服务信息

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	}

	/**

     * 火化信息编辑

     */

	public function cremationAlter($data=[]){

		//修改逝者信息

		$obituary_data = array(

			'name'=>$data['name'],

			'sex'=>$data['sex'],

			'nation'=>$data['nation'],

			'age'=>$data['age'],

			'dietime'=>!empty($data['dietime'])?$data['dietime']:'',

			'reason'=>$data['reason'],

			'registered'=>$data['registered'],

			'card'=>$data['card'],

			'linkman'=>$data['linkman'],

			'linksex'=>$data['linksex'],

			'relation'=>$data['relation'],

			'linkphone'=>$data['linkphone'],

			'state'=>10

		);

		$this->logicObituary->obituaryEdit(['id'=>$data['oid']],$obituary_data);

		//火化编辑

		$cremation_data = array(

			'oid'=>$data['oid'],

			'number'=>$data['number'],

			'operator'=>$data['operator'],

			'remark'=>!empty($data['c_remark'])?$data['c_remark']:'',

			'haulier'=>!empty($data['haulier'])?$data['haulier']:'',

			'state'=>1

		);

		$result = $this->cremationEdit(['id'=>$data['id']],$cremation_data);

		//服务编辑

		$this->logicServicesorder->servicesorderEdit($data,3);//修改服务信息

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}

	/**

     * 火化信息添加

     */

	public function cremationAdd($data=[]){

		if(!empty($data))
			$add_data = $data;
		else
			return false;

		$result = $this->modelCremation->addInfo($add_data);

		$result && action_log('添加', '添加火化信息，逝者ID:' . $data['oid'].' 火化ID'.$result);

		return $result;
	}

	/**

     * 火化信息编辑

     */

	public function cremationEdit($where=[],$data=[]){

		if(!empty($data))
			$edit_data = $data;
		else
			return false;

		$result = $this->modelCremation->updateInfo($where,$edit_data);

		$result && action_log('编辑', '编辑火化信息，逝者ID:' . $data['oid'].' 火化ID'.http_build_query($where));

		return $result;
	}

	/**

     * 获取火化编号

     */

	public function getSerial(){

		 $timeStart= date('Y-01-01 00:00:00',strtotime(date("Y-m-d")));

	     $timeEnd= date('Y-m-d H:i:s', strtotime("$timeStart +1 year"));

		 $where['farewelltime'] = [['egt',$timeStart],['lt',$timeEnd],'AND'];
		
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

		return $this->modelCremation->stat($where,$stat_type,$field);
	}
	
	
	
	public function getCremationValue($where = [],$field = 'id'){
	
		return $this->modelCremation->getValue($where,$field);
	}

	

	/**

	 * 火化详情

	 */

	public function cremationInfo($where=[],$field=true){

		$this->modelCremation->alias('a');

		$join = [

					[SYS_DB_PREFIX . 'obituary o', 'a.oid = o.id','left'],	

                ];

		return $this->modelCremation->getInfo($where,$field,$join);
		
	}

	

	/**

     * 获取火化信息列表搜索条件

     */

    public function getWhere($data = [])

    {

        

        $where = [];

        if(!empty($data['startime']) && !empty($data['endtime'])){

			

			$where['a.farewelltime'] = [['egt',$data['startime']],['elt',$data['endtime']],"AND"];

		}

        !empty($data['search_data']) && $where['o.name'] = ['like', '%'.$data['search_data'].'%'];
		
		!empty($data['nature']) && $where['o.nature'] =$data['nature'];
		
		!empty($data['town']) && $where['o.town'] = ['like', '%'.$data['town'].'%'];
		
		!empty($data['village']) && $where['o.village'] = ['like', '%'.$data['village'].'%'];

        

        return $where;

    }

	

	/**

     * 火化状态编辑

     */

	public function cremationState($data=[]){

		

		$update = array();

		switch($data['state']){

			case 1:

				$update['state'] = 2;

				$update['startime'] = date('Y-m-d H:i',TIME_NOW);

				$obituaryState = 11;
				
				$services = $this->logicServicesorder->servicesorderList(['a.status'=>1,'a.oid'=>$data['oid'],'a.sid'=>[['eq',152],['eq',153],'OR']],'a.*','',false);
				
				$tid ='';
				$price='';
				
				foreach($services as $k=>$v){
					if($v['sid']==153){
						$tid=153;
						$price = 40;
					}else{
						$tid=152;
						$price = 20;
					}
				}

				//火化炉占用
				$update['fid'] = $data['fid'];
				$this->modelFurnace->updateInfo(['id'=>$data['fid']],['status'=>2]);
				break;

			case 2:

				$update['state'] = 3;

				$update['endtime'] = date('Y-m-d H:i',TIME_NOW);

				$obituaryState = 12;

				break;

			case 3:

				$update['state'] = 5;
				
				$this->modelFurnace->updateInfo(['id'=>$data['fid']],['status'=>1]);

				$obituaryState = 13;

				break;

			default:

				$update['state'] = $data['state'];

				$obituaryState = 6;

		}

		

		$result = $this->modelCremation->updateInfo(['id'=>$data['id']],$update);	
		$obituary_state = $this->modelObituary->getValue(['id'=>$data['oid']],'state');
		if($obituary_state!=15){
			$this->modelObituary->updateInfo(['id'=>$data['oid']],['state'=>$obituaryState]);
		}
		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

	

	}

}

