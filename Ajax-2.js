//单例封装
//闭包
//返回一个对象引用
Ajax = function(){
	function request(url,param){
		function fn(){};//返回对象的引用
		var async = param.async||false,
			method = param.method||'GET',
			data = param.data||'null',
			encode = param.encode||'utf-8',
			success = param.success||fn;
			failure = param.failure||fn;
			method = method.toUpperCase();
		var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject();
		//onreadystatechange()在open（）之前调用为了确保浏览器的兼容性
		xhr.onreadystatechange = function(xhr,success,failure){
			_onreadystatechange(xhr,success,failure);
		};
		// xhr.setRequestHeader("x-Content-Security-Policy;","default-src");
		xhr.open(method,url,async);
		if(method == 'GET'&&data){
			url += (url.indexOf('?')==-1?'?':'&')+data;
			data =null;
		}
		if(method == 'POST'){
			xhr.setRequestHeader("Content-type","x-www-form-urlencode;");
		}
		xhr.send(data);
		function _onreadystatechange(xhr,success,failure){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					success(xhr);
				}else{
					failure(xhr);
				}
			}
		}
	};
	return {request:request};
} 