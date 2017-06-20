<?php
    header('Content-Type:text/html;charset=utf-8');
    $path="";
//    检查键名PATH_INFO是否存在于$__SERVER中
    if(array_key_exists("PATH_INFO",$_SERVER)){
        $path =$_SERVER['PATH_INFO'];
        $path =substr($path,1);
        $arr =explode('/',$path);
        if(count($arr)==2){
            $path ='/views/'.$arr[0].'/'.$arr[1];
        }else if(count($arr)==1){
            $path ='/views/dashboard/'.$arr[0];
        }
    }else {
        $path ='/views/dashboard/index';
    }
    $path =$path.'.html';
    include $path;
?>