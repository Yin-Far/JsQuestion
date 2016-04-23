function Stack(){
	var _that = this;
	var items = [];
	//入栈
	_that.push=function(element){
		items.push(element);
	};
	//出栈
	_that.pop=function(){
		return items.pop();
	};
	//返回栈顶元素
	_that.peek=function(){
		return items[items.length-1];
	};
	//返回栈的大小
	_that.size=function(){
		return  items.length;
	};
	//清空栈
	_that.clear=function(){
		items = [];
	};
	//栈的判空
	_that.isEmpty=function(){
		return items.length == 0;
	};
	//控制台打印栈
	_that.print=function(){
		console.log(items.toString());
	};
};
function quenue(){
	var items = [];
	var _that = this;
	_that.enqueue=function(element){
		list.push(element);
	};
	_that.dequeue = function(){
		return list.shift();
	};
	_that.first = function(){
		return list[0];
	};
	_that.isEmpty = function(){
		return list.length==0;
	};
	_that.size = function(){
		return list.length;
	};
	_that.clear = function(){
		list= [];
	}
	_that.print = function(){
		console.log(list.toString());
	}
};