如何设计一个跨终端的网页栅格系统， 实现4等分（PC） 三等分（Ipad） 
  二等分（手机）

- Twitter Bootstrap是个自适应的前端框架
    在一个col上定义多个尺寸，
    media query
    .col-lg-n 超大 > min-width:1200px
    .col-md-n 中等电脑 > min-width:1000px  1000px <-> 1200px
    .col-sm-n ipad > min-width:768px      768px <-> 1024px
    .col-xs-n 手机 max-width:767px

- .container
  .row
  .col-${n}

- float 具有良好的兼容性

