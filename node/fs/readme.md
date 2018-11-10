文件的遍历查找是异步的，使用了 readdirSync同步阻塞式的写法

1. src 目录下找出所有的文件
    stat  isFile  isDir