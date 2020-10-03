<?php

namespace app\wx\controller\v1;
// use think\Controller;
// use think\Db;
use app\wx\controller\BaseController;

class Accesstoken extends BaseController {
    
    private $config = array(
        'appid' => "wxcee7b521765291ad",
        'secret' => "5e1e5081565f7af37879adaa4c023cad",
     );
    
 
    /**
     * 获取用户的openid
     * @param  string $openid [description]
     * @return [type]         [description]
     */
    public function baseAuth(){
       
            //静默授权,获取code
            //页面跳转至redirect_uri/?code=CODE&state=STATE
            $code = input('code');
            if(!empty($code))
            {
                 //通过code换取网页授权access_token和openid
            $curl = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$this->config['appid'].'&secret='.$this->config['secret'].'&code='.$code.'&grant_type=authorization_code';
             
            $access_token_json = $this -> https_request($curl);
             
            $access_token_array = json_decode($access_token_json,true);
             
            $access_token = $access_token_array['access_token'];
            
            $openid = $access_token_array['openid'];
            $userInfourl = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN ';
            $userinfo_json = $this -> https_request($userInfourl);
            $where = array(
                'openid'=>$openid
             );
            $userinfo = $this->logicManager->managerInfo($where,'*');
            $list = array(
                "token" => json_decode($access_token_json),
                "user" => json_decode($userinfo_json),
                "userinfo" => $userinfo
            );
           return setRetrunData('', $list);
            }
            else
            {
                return "code为空";
            }
    }
    
    public function https_request($url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl,  CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($curl);
        if (curl_errno($curl)){
            return 'ERROR'.curl_error($curl);
        }
        curl_close($curl);
        return $data;
    }
        
    public function getUser()
    {
        return $this->logicManager->managerValidate($this->param);
    }

 
}

    
    