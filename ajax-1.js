if(window.XMLHttpRequest){
	var xhr = new XMLHttpRequest();
}else if(window.ActiveObject){
	var xhr = new ActiveObject();
}
xhr.onreadystatechange = function(){
	if(xhr.readyState ==4){
		if(xhr.status ==200){
			console.log(xhr.responseText);
		}else{
			console.log("error");
		}
	}
}
xhr.open(method,url,boolean);//true为异步
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;");//post
xhr.send(data);//在调用open()之前调用onreadystatechange()为了确保浏览器兼容性