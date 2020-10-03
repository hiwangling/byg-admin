<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\model\Servicesorder as ServicesorderModel;


class ObituaryRecord extends BaseController

{
     
	 public function  HallList()
	 {
	      $list = $this->logicMourn->getMournList([],true,'id desc',false);
		  
		  foreach($list as $k=>$v)
		  {
		        $a = $this->logicObituaryRecord->recordInfo(['a.type'=>1,'a.status'=>1,'a.tid'=>$v['id']],'a.*,o.*');
				
				if(!empty($a))
				{
				     $title = $a['title'];
					 
					 $price = $a['price'];
					 
					 $startime = $a['startime'];
					 
					 $endtime = $a['endtime'];
					 
					 $remark = $a['remark'];
                     
					 $hours = $a['hours'];
					 
					 $name = $a['name'];
					 
					 $sex = $a['sex'];
					 
					 $age = $a['age'];					 
 					 
				}
				else
				{
				     $title = '';
					 
					 $price = '';
					 
					 $startime = '';
					 
					 $endtime = '';
					 
					 $remark = '';
                     
					 $hours = '';
					 
					 $name = '';
					 
					 $sex = '';
					 
					 $age = '';
				}
				
				$list[$k]['hall_title']= $title;
				
				$list[$k]['hall_price']= $price;
				
				$list[$k]['hall_startime']= $startime;
				
				$list[$k]['hall_endtime']= $endtime;
				
				$list[$k]['hall_remark']= $remark;
				
				$list[$k]['hall_hours']= $hours;
				
				$list[$k]['hall_name']= $name;
				
				$list[$k]['hall_sex']= $sex;
				
				$list[$k]['hall_age']= $age;
		  }
		  
		  return setRetrunData('success', $list);
	 }
	 
	 public function ColdList()
	 {
	      $list = $this->logicCold->getColdList([],true,'id desc',false);
		  
		  foreach($list as $k=>$v)
		  {
		        $a = $this->logicObituaryRecord->recordInfo(['a.type'=>2,'a.status'=>1,'a.tid'=>$v['id']],'a.*,o.*');
				
				if(!empty($a))
				{
				     $title = $a['title'];
					 
					 $price = $a['price'];
					 
					 $startime = $a['startime'];
					 
					 $endtime = $a['endtime'];
					 
					 $remark = $a['remark'];
                     
					 $hours = $a['hours'];
					 
					 $name = $a['name'];
					 
					 $sex = $a['sex'];
					 
					 $age = $a['age'];					 
 					 
				}
				else
				{
				     $title = '';
					 
					 $price = '';
					 
					 $startime = '';
					 
					 $endtime = '';
					 
					 $remark = '';
                     
					 $hours = '';
					 
					 $name = '';
					 
					 $sex = '';
					 
					 $age = '';
				}
				
				$list[$k]['cold_title']= $title;
				
				$list[$k]['cold_price']= $price;
				
				$list[$k]['cold_startime']= $startime;
				
				$list[$k]['cold_endtime']= $endtime;
				
				$list[$k]['cold_remark']= $remark;
				
				$list[$k]['cold_hours']= $hours;
				
				$list[$k]['cold_name']= $name;
				
				$list[$k]['cold_sex']= $sex;
				
				$list[$k]['cold_age']= $age;
		  }
		  
		  return setRetrunData('success', $list);
	 } 
}