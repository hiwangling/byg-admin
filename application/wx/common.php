<?php
//use app\api\model\Order as OrderModel;
//use app\api\model\Cemetery as CemeteryModel;
//use app\api\model\CemeteryClassify as CemeteryClassifyModel;
//use app\api\model\Bury as BuryModel;
//use app\api\model\Servicebill as ServicebillModel;
//use app\api\model\Images as ImagesModel;
use app\wx\logic\Log as LogicLog;

function checkisPositiveInteger($value)
{
    if (is_numeric($value) && is_int($value + 0) && ($value + 0) > 0) {
        return true;
    }
    return false;
}

function getRandChar($length)
{
    $str = null;
    $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    $max = strlen($strPol) - 1;

    for ($i = 0;
         $i < $length;
         $i++) {
        $str .= $strPol[rand(0, $max)];
    }

    return $str;
}

function setRetrunData($msg, $data = '', $errorCode = 0)
{
    $request = \think\Request::instance();
    $result = [
        'msg' => $msg,
        'code' => $errorCode,
        'request_url' => $request->baseUrl(),
        'data' => $data
    ];
    return $result;
}

/*function getOrderNo()
{
    $danhao = "";
    $currno = OrderModel::where("status=1")->max('order_no');
    if (!empty($currno)) {
        $ddate = date("Ym");
        $str1 = substr($currno, 0, 6); //截取日期，年-月
        $str2 = substr($currno, 6); //六个以后的数据
        if ($ddate != $str1) {
            $danhao = date("Ym") . "00001";
        } else {
            $bianhao = preg_replace('/^0+/', '', $str2);
            $hao = $bianhao + 1;
            $danhao = $str1 . sprintf("%05d", $hao);
        }
    } else {
        $danhao = date("Ym") . "00001";
    }
    return $danhao;
}*/

/*function getServicebillOrderNo()
{
    $danhao = "";
    $currno = ServicebillModel::where("status=1")->max('order_no');
    if (!empty($currno)) {
        $ddate = date("Ym");
        $str1 = substr($currno, 0, 6); //截取日期，年-月
        $str2 = substr($currno, 6); //六个以后的数据
        if ($ddate != $str1) {
            $danhao = date("Ym") . "00001";
        } else {
            $bianhao = preg_replace('/^0+/', '', $str2);
            $hao = $bianhao + 1;
            $danhao = $str1 . sprintf("%05d", $hao);
        }
    } else {
        $danhao = date("Ym") . "00001";
    }
    return $danhao;
}*/


/*function getCemeteryFullName($cid)
{
    $cemetery = CemeteryModel::get($cid);
    $qu_data = CemeteryClassifyModel::get($cemetery->classify_id);
    $yuan_data = CemeteryClassifyModel::get($qu_data->parent_id);
    $res_str = '';
    $res_str = $yuan_data->type_name . $qu_data->type_name . $cemetery->vno . $cemetery->cname;
    return $res_str;
}*/


/*function getBuryNames($cid)
{
    $burys = BuryModel::all(['cid' => $cid]);
    $names = '';
    if ($burys) {
        foreach ($burys as $k => $v) {
            $names .= $v['vcname'] . ',';
        }
    }
    return $names;
}*/

/**
 * 记录行为日志
 */
function action_log($name = '', $describe = '',$manager = '')
{

    $logLogic = get_sington_object('logLogic', LogicLog::class);
    
    $logLogic->logAdd($name, $describe,$manager);
}

/**
 * 用户登录记录行为日志
 */
/*function action_log($manager='',$name = '', $describe = '')
{

    $logLogic = get_sington_object('logLogic', LogicLog::class);
    
    $logLogic->logAddManager($manager,$name, $describe);
}*/


function uploadfiles($f)
{
    $img = '';
    if (!$_FILES) {
        return '';
    }
    $temp_files_arr = array_keys($_FILES);
    $file = request()->file($temp_files_arr[0]);
    $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads' . DS . $f);
        if (!$info) {
            return '';
        } else {
            $img = 'uploads' . DS . $f . DS . $info->getSaveName();
        }
    return $img;
}