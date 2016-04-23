var EventUtil = {
	addHandler:function(element,type,handle){
		if(element.addEventListener){
			element.addEventListener(type,handle,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handle);
		}else{
			element["on"+type] = handle;
		}
	},
	removeHandler:function(element,type,handle){
		if(element.removeEventListener){
			element.removeEventListener(type,handle,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handle);
		}else{
			element["on"+type] = null;
		}
	},
	//事件对象的引用
	getEvent:function(event){
		return event ? event:window.event;
	},
	//返回事件的目标节点或者触发该事件的节点
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	//取消默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	//阻止事件流
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancleBubble = true;
		}
	}
}