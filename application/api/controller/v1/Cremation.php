<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;



class Cremation extends BaseController

{

	public function cremationList()

    {

		$this->logicObituaryRecord->obituaryRecordfree();

		$where = $this->logicCremation->getWhere($this->param);

		$limit = !empty($this->param['limit'])?$this->param['limit']:DB_LIST_ROWS;

		$where['a.state']=['neq',5];

		$list = $this->logicCremation->getCremationList($where,'a.*,o.farewelltime as o_farewelltime,o.nation as o_nation,o.reason as o_reason,o.linksex as o_linksex,o.card as o_card,o.relation as o_relation,o.dietime as o_dietime,o.registered as o_registered,o.sex as o_sex,o.age as o_age,o.name as o_name,o.linkman as o_linkman,o.linkphone as o_linkphone','id desc',$limit);
		$manager = BaseController::getManagerValue('');
		foreach($list as $k=>$v){

			$services = $this->logicServicesorder->servicesorderList(['a.status'=>1,'a.oid'=>$v['oid']],'a.*','',false);
			$title = array();
			foreach($services as $key=>$val){
				if($val['sid']==152 ||$val['sid']==153){
					$list[$k]['l_title'] = $val['title'];
					$list[$k]['services'] = $val['title'];
				}
			}
			
			if($v['state']==1){
				$servicesCount = $this->logicServicesorder->servicesorderList(['a.status'=>1,'a.oid'=>$v['oid'],'a.state'=>1],'a.*','',false);
				if(count($servicesCount)>=1){
					$list[$k]['sign']=1;
				}else{
					$list[$k]['sign']=0;
				}
			}else{
				$list[$k]['sign']=0;
			}
			if(!empty($v['o_farewelltime']))
			{
			     if($v['o_farewelltime']!='0000-00-00')
				 {
				      $list[$k]['o_farewelltime'] = $v['o_farewelltime'];   
				 }
				 else
				 {
				      $list[$k]['o_farewelltime'] = '';
				 }
			}
			
		}
        return setRetrunData('success', $list->toArray());

    }

	/**

	 *火化服务状态

	 *

	**/

	public function cremationState(){
	
		return $this->logicCremation->cremationState($this->param);
	}

	

	

	public function cremationInfo(){

		$data = array();

		$list = $this->logicCremation->cremationInfo(['a.id'=>$this->param['id']],'a.*,o.nation as o_nation,o.reason as o_reason,o.linksex as o_linksex,o.card as o_card,o.farewelltime,o.relation as o_relation,o.dietime as o_dietime,o.registered as o_registered,o.sex as o_sex,o.age as o_age,o.name as o_name,o.linkman as o_linkman,o.linkphone as o_linkphone');

		$manager = BaseController::getManagerValue('');

		$where['a.oid'] = $this->param['oid'];

		$where['a.'.DATA_STATUS_NAME] = 1;

		$data['list'] = $list;

		$data['services'] = $this->logicServicesorder->getServicesorderDatato($where,3);

		$data['services_totalprice'] = array_sum(array_map(function($val){return $val['totalprice'];}, $data['services']));

		return setRetrunData('success', $data);

		

	}

}