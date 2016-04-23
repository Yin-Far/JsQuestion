function jsonp(url){
	var script = document.creatElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',url);
	document.getElementByTagName('body')[0].appendchild(script);
}