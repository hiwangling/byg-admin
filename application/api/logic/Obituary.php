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

 * 逝者信息逻辑

 */

class Obituary extends BaseLogic
{
	/**

     * 获取逝者列表

     */

    public function getObituaryList($where = [], $field = true, $order = '', $paginate = DB_LIST_ROWS)

    {

		$where['a.'.DATA_STATUS_NAME] = !empty($where['a.'.DATA_STATUS_NAME])?$where['a.'.DATA_STATUS_NAME]:['neq', DATA_DELETE];

		$this->modelObituary->alias('a');

		$join = [

					[SYS_DB_PREFIX . 'cremation c', 'c.oid = a.id','left'],

					[SYS_DB_PREFIX . 'carsend s', 's.oid = a.id AND s.recetype=1 AND s.status=1','left'],
			
					[SYS_DB_PREFIX . 'obituary_record or', 'a.id = or.oid AND or.type=1 AND or.status>0','left'],

                ];

		return $this->modelObituary->getList($where,$field,$order,$paginate,$join);

    }

	

	/**

     * 业务添加

	 * data 添加属性

	 * $type 6:办理中\n7:冷冻中\n8:冷藏中\n9:守灵中\n10:待火化

     */

	public function obituaryDispose($data=[]){

		$type=6;

		$result = $this->obituaryAdd($data,$type);//逝者信息

		$this->logicObituaryRecord->recordAdd($data,$result);//添加设备租用

		$this->logicServicesorder->servicesorderAdd($data,$result,2);//服务添加

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}

	

	/**

     * 业务编辑

	 * data 添加属性

	 * $type 6:办理中\n7:冷冻中\n8:冷藏中\n9:守灵中\n10:待火化

     */

	public function obituaryAlter($data=[]){

		$obituary_update = array(

			'name'=>$data['name'],

			'sex'=>$data['sex'],

			'age'=>$data['age'],

			'registered'=>!empty($data['registered'])?$data['registered']:'',

			'nation'=>!empty($data['nation'])?$data['nation']:'',

			'linksex'=>!empty($data['linksex'])?$data['linksex']:'',

			'card'=>!empty($data['card'])?$data['card']:'',

			'reason'=>!empty($data['reason'])?$data['reason']:'',

			'relation'=>!empty($data['relation'])?$data['relation']:'',
			
			'dietime'=>!empty($data['dietime'])?$data['dietime']:'',

			'linkman'=>$data['linkman'],

			'linkphone'=>$data['linkphone'],
			
			'linkcard'=>!empty($data['linkcard'])?$data['linkcard']:'',
			
			'linkaddress'=>!empty($data['linkaddress'])?$data['linkaddress']:'',
			
			'ifcheck'=>!empty($data['ifcheck'])?$data['ifcheck']:2,

			'basic'=>!empty($data['basic'])?$data['basic']:1,
			
			'unknown'=>!empty($data['unknown'])?$data['unknown']:0,
			
			'nature'=>!empty($data['nature'])?$data['nature']:1,

			'farewelltime'=>!empty($data['farewelltime'])?$data['farewelltime']:'',

			'starttime'=>!empty($data['starttime'])?$data['starttime']:'',
			
			'remark'=>!empty($data['remark'])?$data['remark']:'',

			'operator'=>$data['operator'],
		);

		if(!empty($data['farewelltime'])){

			$cremation = $this->logicCremation->cremationInfo(['a.oid'=>$data['id']],'a.*');

			if(empty($cremation)){

				$cremation_add = array(
					
					'serial'=>$this->logicCremation->getSerial(),
					
					'farewelltime'=>$data['farewelltime'],

					'oid'=>$data['id'],

					'state'=>1

				);

				$this->logicCremation->cremationAdd($cremation_add);

			}else{
				$this->modelCremation->updateInfo(['oid'=>$data['id'],'status'=>1],['farewelltime'=>$data['farewelltime']]);
			}

		}

		$data['oid'] = $data['id'];

		$result = $this->obituaryEdit(['id'=>$data['id']],$obituary_update);//逝者信息编辑

		$this->logicObituaryRecord->recordEdit($data);//添加设备租用

		$this->logicServicesorder->servicesorderEdit($data,2);//修改服务信

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}

	

	/**

     * 逝者信息添加

	 * data 添加属性

	 * type 1.接运 

     */

	public function obituaryAdd($data=[],$type='')
	{
		$ifcheck = !empty($data['ifcheck'])?$data['ifcheck']:2;
		
		$basic = !empty($data['basic'])?$data['basic']:1;
		
		$add_data = array(

			'serial'=>$this->getSerial(),

			'name'=>$data['name'],

			'sex'=>!empty($data['sex'])?$data['sex']:'',

			'age'=>!empty($data['sex'])?$data['age']:'',

			'registered'=>!empty($data['registered'])?$data['registered']:'',

			'dietime'=>!empty($data['dietime'])?$data['dietime']:'',

			'nation'=>!empty($data['nation'])?$data['nation']:'',

			'linksex'=>!empty($data['linksex'])?$data['linksex']:'',

			'card'=>!empty($data['card'])?$data['card']:'',

			'reason'=>!empty($data['reason'])?$data['reason']:'',

			'relation'=>!empty($data['relation'])?$data['relation']:'',

			'linksex'=>!empty($data['linksex'])?$data['linksex']:'',

			'linkman'=>$data['linkman'],

			'linkphone'=>$data['linkphone'],
			
			'linkcard'=>!empty($data['linkcard'])?$data['linkcard']:'',
			
			'linkaddress'=>!empty($data['linkaddress'])?$data['linkaddress']:'',
			
			'ifcheck'=>$ifcheck,

			'basic'=>$basic,

			'farewelltime'=>!empty($data['farewelltime'])?$data['farewelltime']:'',

			'starttime'=>!empty($data['starttime'])?$data['starttime']:'',

			'servertype'=>1,
			
			'unknown'=>!empty($data['unknown'])?$data['unknown']:0,
			
			'nature'=>!empty($data['nature'])?$data['nature']:1,
			
            'operator'=>$data['operator'],
			
			'remark'=>!empty($data['remark'])?$data['remark']:'',

			'state'=>$type

		);
		
		$result = $this->modelObituary->addInfo($add_data);

		if(!empty($data['farewelltime'])){

			$cremation_add = array(
				
				'serial'=>$this->logicCremation->getSerial(),
					
				'farewelltime'=>$data['farewelltime'],

				'oid'=>$result,

				'state'=>1

			);

			$crid = $this->logicCremation->cremationAdd($cremation_add);
		}
		
		$result && action_log('新增', '新增逝者信息，name:' . $data['name']);

		return $result;

	}

	

	/**

     * 逝者信息修改

	 * data 添加信息

	 * where 条件

     */

	public function obituaryEdit($where=[],$data=[]){

		if(!empty($data))

			$edit_data = $data;

		else

			return false;

		$result = $this->modelObituary->updateInfo($where,$edit_data);
		
		$result && action_log('编辑', '编辑逝者信息，name:' . $data['name']);
		
		return $result;

	}

	

	/**

     * 获取业务编号

     */
	public function getSerial(){

		 $timeStart= date('Y-m-01',time());

	     $timeEnd= date("Y-m-01", strtotime('+1 month'));

		 $where['create_time'] = [['egt',strtotime($timeStart)],['lt',strtotime($timeEnd)],'AND'];
		
		 $where['nonumber'] = 0;

		 $number = date('Ymd',TIME_NOW);

		 $count = $this->getStat($where,'count','id');

		 $leng = mb_strlen($count+1);

		 $zoreLeng = 4-$leng;

		 $zore ='';

		 for($i=0;$i<$zoreLeng;$i++){

		 	$zore.='0';

		 }

		return $number.$zore.($count+1);

	}

	

	/**

     * 逝者信息删除

     */

    public function obituaryDel($where = [])

    {
		$result = $this->modelObituary->deleteInfo($where,true);

		//删除接运任务
		$this->modelCarsend->deleteInfo(['oid'=>$where['id']],true);

		//删除所有服务项目
        $this->modelServicesorder->deleteInfo(['oid'=>$where['id']],true);

		//删除套餐服务
		$this->logicServicesComboorder->servicesComboorderDel(['oid'=>$where['id']]);

		//删除所有设备租用
		$record_data = $this->logicObituaryRecord->recordList(['a.oid'=>$where['id'],'a.status'=>['neq',-1]],'a.*','a.id asc',false);

		foreach($record_data as $k=>$v){
			//释放设施
			if($v['type']==1){

				$this->modelMourn->updateInfo(['id'=>$v['tid']],['state'=>0]);//设置悼念厅占用状态

			}elseif($v['type']==2){

				$this->modelCold->updateInfo(['id'=>$v['tid']],['state'=>0]);//设置冷柜占用状态

			}
			//删除记录
			$this->modelObituaryRecord->deleteInfo(['id'=>$v['id']],true);
		}		
		//删除火化任务
		$this->modelCremation->deleteInfo(['oid'=>$where['id']],true);
		
        $result && action_log('删除', '逝者信息删除' . '，where：' . http_build_query($where));

        return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);

    }

	/**

     * 获取逝者信息列表搜索条件

     */

    public function getWhere($data = [])
    {
        $where = [];
		
        !empty($data['search_data']) && $where['a.name'] = ['like', '%'.$data['search_data'].'%'];

        return $where;
    }

	/**

     * 获取逝者信息统计数据

     */

	public function getStat($where = [], $stat_type = 'count', $field = 'id'){

		return $this->modelObituary->stat($where,$stat_type,$field);
	}
	
	
	public function obituaryValue($where = [],$field = 'id'){

		return $this->modelObituary->getValue($where,$field);
	}
	
	public function obituaryState($data=[]){

		$result = $this->modelObituary->updateInfo(['id'=>$data['id']],['state'=>$data['state']]);

		$result && action_log('状态操作', '状态操作，oid:' . $data['id'].' state'.$data['state']);

		return $result ? setRetrunData(RESULT_SUCCESS,$result):setRetrunData(RESULT_ERROR,'',1);
	}
	
	/**

     * 获取逝者信息单条数据

     */

	public function obituaryInfo($where=[],$field=true){

		$this->modelObituary->alias('a');

		$join = [
					[SYS_DB_PREFIX . 'cremation c', 'c.oid = a.id','left'],

					[SYS_DB_PREFIX . 'finance f', 'f.oid = a.id AND f.status !=-1','left'],
                ];

		return $this->modelObituary->getInfo($where,$field,$join);
	}
}

