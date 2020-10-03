<?php

/**

 * 分析数组及枚举类型配置值 格式 a:名称1,b:名称2

 * @return array

 */

function parse_config_attr($string)

{



    $array = preg_split('/[,;\r\n]+/', trim($string, ",;\r\n"));



    if (strpos($string, ':')) {



        $value = [];



        foreach ($array as $val) {



            list($k, $v) = explode(':', $val);



            $value[$k] = $v;

        }



    } else {



        $value = $array;

    }



    return $value;

}



/**

 * 解析数组配置

 */

function parse_config_array($name = '')

{



    return parse_config_attr(config($name));

}



/**

 * 字符串前缀验证

 */

function str_prefix($str, $prefix)

{

    

    return strpos($str, $prefix) === DATA_DISABLE ? true : false;

}



/**

 * 字符串替换

 */

function sr($str = '', $target = '', $content = '')

{

    

    return str_replace($target, $content, $str);

}



/**

 * 写入执行信息记录

 */

function write_exe_log($begin = 'app_begin', $end = 'app_end', $type = 0)

{

    

    if (empty(config('is_write_exe_log'))) { return false; }

    

    $source_url = empty($_SERVER["HTTP_REFERER"]) ? '未知来源' : $_SERVER["HTTP_REFERER"];

    

    $exe_log['ip']              = request()->ip();

    $exe_log['exe_url']         = request()->url();

    $exe_log['exe_time']        = debug($begin, $end);

    $exe_log['exe_memory']      = debug($begin, $end, 'm');

    $exe_log['exe_os']          = get_os();

    $exe_log['source_url']      = $source_url;

    $exe_log['session_id']      = session_id();

    $exe_log['browser']         = browser_info();

    $exe_log['status']          = DATA_NORMAL;

    $exe_log['create_time']     = TIME_NOW;

    $exe_log['update_time']     = TIME_NOW;

    $exe_log['type']            = $type;

    $exe_log['login_id']        = is_login();

    

    $exe_log_path = "../log/exe_log.php";

    

    file_exists($exe_log_path) && $now_contents = file_get_contents($exe_log_path);

    

    $arr = var_export($exe_log, true);

    

    empty($now_contents) ? $contents = "<?php\nreturn array (".$arr.");\n" : $contents = str_replace(');', ','. $arr . ');', $now_contents);

    

    file_put_contents($exe_log_path, $contents);

}



/**

 * 通过闭包控制缓存

 */

function auto_cache($key = '', $func = null, $time = 3)

{

    

    $result = cache($key);

    

    if (empty($result)) {

        

        $result = $func();

        

        !empty($result) && cache($key, $result, $time);

    }

    

    return $result;

}



/**

 * 通过类创建逻辑闭包

 */

function create_closure($object = null, $method_name = '', $parameter = [])

{

    

    $func = function() use($object, $method_name, $parameter) {

        

                return call_user_func_array([$object, $method_name], $parameter);

            };

            

    return $func;

}



/**

 * 获取单例对象

 */

function get_sington_object($object_name = '', $class = null)

{



    $request = request();

    

    $request->__isset($object_name) ?: $request->bind($object_name, new $class());

    

    return $request->__get($object_name);

}
//curl请求
function curlPost($url,$data,$post="post",$header=''){
	
	$ch = curl_init ();
	curl_setopt ( $ch, CURLOPT_URL, $url);
	curl_setopt ( $ch, CURLOPT_POST, 1 );
	curl_setopt ( $ch, CURLOPT_HEADER, 0 );
	curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt ( $ch, CURLOPT_POSTFIELDS, $data );
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
	$return = curl_exec ( $ch );
	curl_close ( $ch );
	return $return;
}



/**
 * 生成二维码
 * @param string $data      写入数据
 * @param string $path      二维码保存路径
 * @param string $ecc       错误修正水平    'L','M','Q','H'
 * @param int    $size      二维码大小      1 - 10
 */
function create_qrcode($data = '', $path = '', $ecc = 'H', $size = 10)
{
    
    $save_path = empty($path) ? PATH_UPLOAD . 'extend' . DS . 'qrcode' . DS : $path;
    
    include_once EXTEND_PATH . 'qrcode' . DS . 'qrlib.php';
    
    if (!file_exists($save_path)) { mkdir($save_path); }
    
    $filename = $save_path.'.png';
    
    $errorCorrectionLevel = 'L';
    
    if (isset($ecc) && in_array($ecc, array('L','M','Q','H'))) { $errorCorrectionLevel = $ecc; } 
    
    $matrixPointSize = 4;
    
    if (isset($size)) { $matrixPointSize = min(max((int)$size, 1), 10); }
    
    if (isset($data)) {
        
        if (trim($data) == '') {  exception("qrcode data cannot be empty"); }
        
        $filename = $save_path.md5($data.'|'.$errorCorrectionLevel.'|'.$matrixPointSize).'.png';
        
        QRcode::png($data, $filename, $errorCorrectionLevel, $matrixPointSize, 2);
        
    }else{
        
        QRcode::png('PHP QR Code :)', $filename, $errorCorrectionLevel, $matrixPointSize, 2);    
    }
    
    $name = basename($filename);
    
    $return_data['name'] = $name;
    $return_data['path'] = $save_path . $name;
    
    return $return_data;
    
}

