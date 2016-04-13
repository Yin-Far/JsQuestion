function create(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName(){
	console.log(this.name);//将sayName设置在全局的作用域中
};
var per1 = new create('dede','23','code');
per1.sayName();
var per2 = new create('derf','233','co3333de');
per2.sayName();	