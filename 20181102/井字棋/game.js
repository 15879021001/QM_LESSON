require('./js/libs/weapp-adapter');
//小程序中无dom  bom
// console.log(canvas);
// console.log(window);

//引入  phaser
window.p2 = require('./js/libs/p2');
window.PIXI = require('./js/libs/pixi');
window.Phaser = require('./js/libs/phaser-split');

window.WIDTH = 750;  //设计稿的大小 跟 canvas 比例转化
window.SCALE = WIDTH / canvas.width;
window.HEIGHT = canvas.height * SCALE;  //等比例高度

wx.onShareAppMessage(()=>{
    return{
        title:'井字棋大作大战',
        imageUrl:'images/share.png'
    }
});

wx.showShareMenu({
    widthShareTicket: false
});

window.go ={
    game:null,     //游戏对象
    userInfo:null, //玩家信息  
    opponentInfo:null,//对手信息
    common:require('js/common')
};

const config ={
    width :WIDTH,
    height:HEIGHT,
    renderer:Phaser.CANVAS,  //游戏的渲染方式是canvas
    canvas:canvas
};

const game = new Phaser.Game(config);
go.game = game;
game.state.add('start',require('./js/states/start'));
game.state.add('menu',require('./js/states/menu'));
game.state.start('start');