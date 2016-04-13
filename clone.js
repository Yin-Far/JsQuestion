function clone(Obj){
    var buf;
    if(Obj instanceof Array){
        buf = [];//创建一个新的数组
        var i = Obj.length;
        while(i--){
            buf[i] = clone(Obj[i]);
        }
    }else if (Obj instanceof Object){
        buf = {};
        for(var k in Obj){
            buf[k] = clone(Obj[k]);
        }
    return buf;
    }else{
        return Obj;
    }
}
var op = {a: 0, b: 1, c: 2};
var newOp = clone(op);
delete newOp.a;
console.log(op);
console.log(newOp);