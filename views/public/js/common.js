    //
	//NProgress.start();
    //
	//NProgress.done();
    //
	//$('.navs ul').prev('a').on('click', function () {
	//	$(this).next().slideToggle();
	//});

	/*
	*判断cookie是否存在和当前页面是否为login,如果都不是跳转到login页面
	* */
	if(!$.cookie('PHPSESSID') && location.pathname!='/login'){
		location.href='/login';
	}
	/*
	* 用artTemplate将头像和名字渲染进去
	* 1.先判断是否在login页面上
	* 2，如果不是在login页面上就将侧边栏渲染上去
	* */
	 if(location.pathname!='/login' && location.pathname!='/index.php/login/' && location.pathname!='/index.php/dashboard/login'){
		 var cookieInfo =JSON.parse($.cookie('cookie'));
		 var html =template('template',cookieInfo);
		 $('.aside>.profile').html(html);
	 }
	/*
	* 退出登陆
	* 1.点击退出按钮，回到登陆页面，清除缓存信息
	* */
	$('#logout').on('click',function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			success:function(logoutInfo){
				if(logoutInfo.code==200){
					location.href='/login';
				}
			},
			error:function(){
				alert('无法退出登陆');
			}
		})
	})