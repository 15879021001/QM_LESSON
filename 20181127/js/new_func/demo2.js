function Parent(name){
    this.name = name;
}
let p = new Parent('张三');
Parent.prototype.fn = function(){
    console.log('1111');
    
}
console.log(Parent.prototype);
console.log(p.__proto__==Parent.prototype);
p.fn();


