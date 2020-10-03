<?php
use app\api\logic\Log as LogicLog;



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






/**

 * 记录行为日志

 */

function action_log($name = '', $describe = '',$manager = '')

{



    $logLogic = get_sington_object('logLogic', LogicLog::class);

    

    $logLogic->logAdd($name, $describe,$manager);

}


function uploadfiles($f)

{

    $img = '';

    if (!$_FILES) {

        return '';

    }

    $temp_files_arr = array_keys($_FILES);
	
	$name = $_FILES[$temp_files_arr[0]]['name'];
	
	$nameDate = explode('.',$name);

    $file = request()->file($temp_files_arr[0]);

    $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads' . DS . $f,$nameDate[0]);

        if (!$info) {

            return '';

        } else {

            $img = 'uploads' . DS . $f . DS . $info->getSaveName();

        }

    return $img;

}