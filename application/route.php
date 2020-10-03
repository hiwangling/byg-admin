<?php

use think\Route;

Route::post('api/:version/upload/upload', 'api/:version.Upload/upload');

Route::post('api/:version/token/app', 'api/:version.Token/getAppToken');

Route::get('api/:version/manager/info', 'api/:version.Manager/managerInfo');

//员工管理
Route::get('api/:version/manager/list', 'api/:version.Manager/ManagerList');

Route::get('api/:version/manager/getlist', 'api/:version.Manager/getManagerList');

Route::post('api/:version/manager/add', 'api/:version.Manager/ManagerAdd');

Route::post('api/:version/manager/edit', 'api/:version.Manager/ManagerEdit');

Route::post('api/:version/manager/edit_pwd', 'api/:version.Manager/editPwd');

Route::get('api/:version/manager/del', 'api/:version.Manager/managerDel');


//权限管理
Route::post('api/:version/auth_rule/list', 'api/:version.AuthRule/authRuleList');

Route::post('api/:version/auth_rule/add', 'api/:version.AuthRule/authRuleAdd');

Route::post('api/:version/auth_rule/edit', 'api/:version.AuthRule/authRuleEdit');

Route::get('api/:version/auth_rule/del', 'api/:version.AuthRule/authRuleDel');


//权限列表
Route::get('api/:version/auth_rule/all','api/:version.AuthRule/authRuleAll');

Route::get('api/:version/auth_rule/alls','api/:version.AuthRule/authRuleAlls');

//部门管理(角色管理)
Route::post('api/:version/branch/list', 'api/:version.Branch/branchList');

Route::post('api/:version/branch/add', 'api/:version.Branch/branchAdd');

Route::post('api/:version/branch/edit', 'api/:version.Branch/branchEdit');

Route::post('api/:version/branch/all_name', 'api/:version.Branch/branchAllName');

Route::get('api/:version/branch/del', 'api/:version.Branch/branchDel');

//部门管理
Route::post('api/:version/dept/list', 'api/:version.Dept/deptList');

Route::post('api/:version/dept/add', 'api/:version.Dept/deptAdd');

Route::post('api/:version/dept/edit', 'api/:version.Dept/deptEdit');

Route::get('api/:version/dept/del', 'api/:version.Dept/deptDel');

//悼念厅管理
Route::post('api/:version/mourn/list', 'api/:version.Mourn/mournList');

Route::post('api/:version/mourn/add', 'api/:version.Mourn/mournAdd');

Route::post('api/:version/mourn/edit', 'api/:version.Mourn/mournEdit');

Route::get('api/:version/mourn/del', 'api/:version.Mourn/mournDel');

//车辆管理
Route::post('api/:version/car/list', 'api/:version.Car/carList');

Route::post('api/:version/car/add', 'api/:version.Car/carAdd');

Route::post('api/:version/car/edit', 'api/:version.Car/carEdit');

Route::get('api/:version/car/del', 'api/:version.Car/carDel');

//服务套餐管理
Route::post('api/:version/servicesCombo/list', 'api/:version.ServicesCombo/servicesComboList');

Route::post('api/:version/servicesCombo/add', 'api/:version.ServicesCombo/servicesComboAdd');

Route::post('api/:version/servicesCombo/edit', 'api/:version.ServicesCombo/servicesComboEdit');

Route::get('api/:version/servicesCombo/del', 'api/:version.ServicesCombo/servicesComboDel');

Route::get('api/:version/servicesCombo/services', 'api/:version.ServicesCombo/servicesInfo');

Route::get('api/:version/servicesCombo/common', 'api/:version.ServicesCombo/servicesComboCommon');


//服务管理
Route::post('api/:version/services/list', 'api/:version.Services/servicesList');

Route::post('api/:version/services/add', 'api/:version.Services/servicesAdd');

Route::post('api/:version/services/edit', 'api/:version.Services/servicesEdit');

Route::get('api/:version/services/del', 'api/:version.Services/servicesDel');

//配置管理
Route::post('api/:version/config/list', 'api/:version.Config/configList');

Route::post('api/:version/config/add', 'api/:version.Config/configAdd');

Route::post('api/:version/config/edit', 'api/:version.Config/configEdit');

Route::get('api/:version/config/del', 'api/:version.Config/configDel');

Route::get('api/:version/config/common', 'api/:version.Config/getConfigCommonData');

//接运管理
Route::post('api/:version/carsend/list', 'api/:version.Carsend/carsendList');

Route::post('api/:version/carsend/add', 'api/:version.Carsend/carsendAdd');

Route::get('api/:version/carsend/editinfo', 'api/:version.Carsend/carsendEditInfo');

Route::post('api/:version/carsend/edit', 'api/:version.Carsend/carsendEdit');

Route::get('api/:version/carsend/common', 'api/:version.Carsend/carsendCommon');

Route::get('api/:version/carsend/del', 'api/:version.Carsend/carsendDel');

//任务中心-接运任务
Route::post('api/:version/carsend/task', 'api/:version.Carsend/carsendTask');

Route::post('api/:version/carsend/state', 'api/:version.Carsend/carsendState');


//部门授权
Route::post('api/:version/branch/auth', 'api/:version.Branch/branchAuth');

//冷藏柜管理
Route::post('api/:version/cold/add','api/:version.Cold/coldAdd');

Route::post('api/:version/cold/list','api/:version.Cold/coldList');

Route::post('api/:version/cold/edit','api/:version.Cold/coldEdit');

Route::get('api/:version/cold/del','api/:version.Cold/coldDel');

//火化炉管理
Route::post('api/:version/furnace/list','api/:version.Furnace/furnaceList');

Route::post('api/:version/furnace/add','api/:version.Furnace/furnaceAdd');

Route::post('api/:version/furnace/edit','api/:version.Furnace/furnaceEdit');

Route::get('api/:version/furnace/del','api/:version.Furnace/furnaceDel');

//业务大厅
Route::post('api/:version/obituary/list','api/:version.Obituary/obituaryList');

Route::post('api/:version/obituary/add','api/:version.Obituary/obituaryAdd');

Route::post('api/:version/obituary/edit','api/:version.Obituary/obituaryEdit');

Route::get('api/:version/obituary/info','api/:version.Obituary/obituaryInfo');

Route::get('api/:version/obituary/common','api/:version.Obituary/obituaryCommon');


//火化办理
Route::post('api/:version/cremation/list','api/:version.Cremation/cremationList');

Route::post('api/:version/cremation/state','api/:version.Cremation/cremationState');

Route::post('api/:version/services/sign', 'api/:version.Services/servicesSign');//火化服务签收

Route::get('api/:version/cremation/info','api/:version.Cremation/cremationInfo');



//财务结算
Route::post('api/:version/finance/list','api/:version.Finance/financeList');

Route::get('api/:version/finance/info','api/:version.Finance/financeInfo');

Route::post('api/:version/finance/pay','api/:version.Finance/financePay');

//统计
Route::post('api/:version/statistics/services','api/:version.Statistics/servicesState');//服务统计

Route::post('api/:version/statistics/servicesInfo','api/:version.Statistics/ServicesStateInfo');//服务详情

Route::post('api/:version/statistics/carsend','api/:version.Statistics/carsendStat');//接运统计

Route::post('api/:version/statistics/gather','api/:version.Statistics/gather');//火化统计

Route::post('api/:version/statistics/unknown','api/:version.Statistics/obituaryUnknown');//无名尸统计

Route::post('api/:version/statistics/obituary','api/:version.Statistics/obituaryStat');//完结服务统计

Route::post('api/:version/statistics/excelobituary','api/:version.Statistics/excelobituaryStat');//完结业务信息导出

//灵堂显示详情
Route::get('api/:version/obituary_record/hall_list', 'api/:version.ObituaryRecord/HallList');

//冷柜显示详情
Route::get('api/:version/obituary_record/cold_list', 'api/:version.ObituaryRecord/ColdList');

Route::get('wx/:version/accesstoken/baseauth','wx/:version.Accesstoken/baseAuth');
/****************************************************************微信端******************************************************************************/
//预约派车
Route::post('wx/:version/carsend/list','wx/:version.Carsend/carsendList');

Route::post('wx/:version/carsend/add', 'wx/:version.Carsend/carsendAdd');

Route::post('wx/:version/carsend/edit', 'wx/:version.Carsend/carsendEdit');

Route::post('wx/:version/carsend/severedit', 'wx/:version.Carsend/severEdit');

Route::get('wx/:version/carsend/common', 'wx/:version.Carsend/carsendCommon');

Route::get('wx/:version/obituary/info','wx/:version.Obituary/obituaryInfo');

Route::post('wx/:version/carsend/state', 'wx/:version.Carsend/carsendState');

Route::get('wx/:version/carsend/editinfo', 'wx/:version.Carsend/carsendEditInfo');

Route::post('wx/:version/obituary/list','wx/:version.Obituary/obituaryList');

Route::get('wx/:version/obituary_record/hall_list', 'wx/:version.ObituaryRecord/HallList');