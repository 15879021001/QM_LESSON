1. weapp-adapter
    全局的window canvas对象
    降低了游戏开发的难度

2. canvas 的比例问题
    宽度是手机的宽度
    设计稿750
    绘制比例  设计稿大小 * canvas大小 / 750
    canvas.width 和 image 都可以width

3. 游戏框架准备好了大多数对象 Game State
    流行的框架 : 
         2D:cocos-2d
            phaser
            Egret   (typescript)
         3D:three.js

    preload  加载资源
    create   绘制界面