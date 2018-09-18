const chior = []; //乐队

//只需要会嘎嘎叫的才要

var duck= {

    duckSing: function(){
        console.log('嘎嘎嘎');
    }

}

var chicken = {
    chickSing: function(){
        console.log('咯咯咯');
    },
    
}
/*
*功能：加入合唱团
*params:animal 动物对象
* chior 加入新成员
*/
function joinChior(animal){
    
    if(animal && typeof animal.duckSing == 'function'){
        chior.push(animal);
    }

}
//函数式编程 ，将编程目的分为一个或多个函数
for(var i=0; i<999; i++){

    joinChior(duck);
}

chicken.duckSing = function(){
    console.log('嘎嘎嘎');
}

joinChior(chicken);
console.log(chior.length);



//1000只要求，只能找到999只
//typeof 可以用来验证返回类型
// for(var i=0; i < 999; i++){
//     if (typeof duck.duckSing === 'function'){
//         chior.push(duck);
//     }
// }