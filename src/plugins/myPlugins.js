// vue插件一定暴露一个对象
let myPlugins={};

myPlugins.install=function(){
    console.log('调用');
}