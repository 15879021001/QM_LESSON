// 命令 ？
// 1. 按键事件
//   不同的按键做不同的操作？
// 2. 不同的player  JSON 

const Ryu = {
    name: 'Ryu',
    attack () {
      console.log(this.name+'攻击');
    },
    defense () {
      console.log(this.name+'防御');
    },
    jump () {
      console.log(this.name+'跳跃');
    },
    crouch () {
      console.log(this.name+'蹲下');
    }
  }

//   回放功能，数据结构，栈
  const commandStack = []
  
  const  makeCommand = function(receiver, state) {
    // 命令对象生成者， 按键对应的操作出来了， 这样就解耦
    // 目的不是执行函数， 而是找到对应的对象的相应动作函数， 进行返回， 
    return function() {
      if(receiver[state]){
        receiver[state]();
      }
    }
  }
  
  const commands = {
    "119": "jump", // W
    "115": "crouch", //S
    "97": "defense", //A
    "100": "attack" //D
  }
  
  document.onkeypress = function(ev) {
    var keyCode = ev.keyCode;
    var command = makeCommand(Ryu, commands[keyCode]);
    if(command){
        commandStack.push(command);
        command();
    }
  }

  document.getElementById("backBtn").addEventListener('click',function(){
    // 用栈来存储命令，以后可以随时调用以前的命令
    var command;
    while(command = commandStack.shift()){
        command();
    }
  },false)
  