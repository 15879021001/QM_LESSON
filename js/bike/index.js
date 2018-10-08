//首字母大写，构造函数
// function BicycleShop(){

// }
//变量 = 变量名 + 值 + 类型
//变量没有赋值之前都为 undefined
//变量的类型由值来决定
//类型决定变量的职责和功能
// var BicycleShop;
// BicycleShop = null;
// console.log(BicycleShop); //打印出来是undefined,因为变量没赋值

//portotype 用来给对象添加方法


var BicycleFactory = new function () {
}
BicycleFactory.createBircycle = function (model) {
  switch (model) {
    case 'The Speedster': bicycle = new Speedster();
      break;
    case 'The Lowrider': bicycle = new Lowrider();
      break;
    case 'The Comfort Cruiser': bicycle = new ComfortCruiser();
      break;
    // 缺点，新增品牌时，软件要下线
    // 剥离选择自行车的业务 工厂模式
    // case 'UC': bicycle = new UC(){};
    //   break;
    default: bicycle = new Giant();
  }
  return bicycle;
}
var BicycleShop;

BircleShop = function (name,address) {
  this.name = name;
  this.address = address;
}
var Speedster = function () {

}
Speedster.prototype = {
  assemble: function(){},
  wash: function(){}
}
var Lowrider = function () {

}
Lowrider.prototype = {
  assemble: function(){},
  wash: function(){}
}
var ComfortCruiser = function () {

}
ComfortCruiser.prototype = {
  assemble: function(){
    console.log('组装出一部ComfortCruiser');
  },
  wash: function(){
    console.log('为您清洗好了，感谢您购买ComfortCruiser');
  }
}

var Giant = function () {

}
Giant.prototype = {
  assemble: function(){},
  wash: function(){}
}


BircleShop.prototype = {
  sellBicycle: function(model){
    // 有很多的车型
    var bicycle = BicycleFactory.createBircycle(model);//静态方法


    bicycle.assemble();//拼装
    bicycle.wash();//清洗
    return bicycle;
  }
}
// console.log(typeof BicycleShop);

var bicycleShop = new BircleShop('蓉榕的自行车店');
console.log(bicycleShop.name);
var bicycle = bicycleShop.sellBicycle('The Comfort Cruiser');
