function chain_list(){
	var node  = function(element){
		this.element = element;
		this.next = null;
	};
	//head node is null
	var head = null;
	//length = 0
	var length = 0;
	//add new Node on end
	this.appendNode = function(element){
		var oNode = new node(element),
			first;
		if(head === null){
    		head = oNode;
		}else {
			//循环列表，查找最后一项，，使得最后一项的next为oNode
			first = head;
			while(first.next){
				first = first.next;
			}
			first.next = oNode;
		}
		length++;
	};
	//insert node in pos
	this.insert = function(postion,element){
		if(position<=-1 || position>=length){
			return null;
		}else{
			var first = head,
				prev,
				index = 0;
			if(position === 0){
				head = first.next;
			}else{
				
			}
		}
	};
	//remove at pos
	this.removeAt = function(position){

	};
	//remove a node
	this.remove = function(element){

	};
	//chain_table length
	this.size = function(){

	};
	//return a node's index
	this.index = function(element){

	};
	//true or false
	this.isEmpty = function(){

	};
	//output node's info and override toString()
	this.toString = function(){

	};
}