/*
*自定义事件
事件是JS与浏览器交互的重要途径。
事件的实质是观察者模式；对象可以发布事件用来表示在该对象的生命周期中的某个时刻
其他对象观察该对象，等待这个时刻到来并运行代码响应。
*/
//使用混合模式创建自定义类型对象
function EventTarget(){
	//handler 用于储存事件处理程序
	this.handle = {};
}
EventTarget.prototype = {
	constructor:EventTarget,
	//注册自定义事件
	addHandler:function(type,handler){
		if(typeof this.handle[type] == 'undefined'){
			this.handle[type] = [];
		}
		this.handle[type].push(handler);
	},
	//触发自定义事件
	trigger:function(event){
		if(!event.target){
			event.target = this;
		}
	},
	//移除自定义事件
	removeHandler:function(type,handler){

	}
};