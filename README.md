## 1：vue-cli脚手架初始化项目
node+webpack+淘宝镜像

node_modules文件夹：项目依赖文件夹
public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。

src文件夹（程序员源代码文件夹）：
    assets文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源）。需要注意，放置在assets文件夹里面静态资源，在webpack打包的时候，webpack会把静态资源当做一个模块，打包JS文件里面。
    
    component文件夹：一般放置的是非路由的组件（全局组件）

    App.vue：唯一的根组件，Vue当中的组件（.vue）

    main.js：程序入口文件，也是整个程序当中最先执行的文件

babel.config.js:配置文件

package.json文件：认为项目‘身份证’，记录项目叫做什么，项目当中有哪些依赖，项目怎么运行

package-lock.json：缓存文件

4,完成非路由组件Header与footer业务
在咱们项目当中，不在以HTML+css为主，主要以搞业务，逻辑在开发项目的时候：
1：书写静态页面（html+css）
2：拆分组件
3：获取服务器的数据动态展示
4：完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构+组件的样式+图片资源

注意2：咱们项目采用的less样式，浏览器不识别less样式，需要通过less，less-loader【安装五版本】进行处理
less，把less样式变成css样式，浏览器才可以识别

注意3：如果想让组件识别less样式，需要在style标签身上加lang=less

## 4.1使用组件的步骤（非路由组件）
-创建或者定义
-引入
-注册

## 5路由组件的搭建
vue-router
在上面
-pages|views文件夹：经常放置路由组件
5.1配置路由
项目当中配置的路由一般放置在router文件夹中

5.2

3:注册完路由，不管路由路由组件，还是非路由组件身上都有$route\router属性

$route：一般获取路由信息【路径，query，params等等】
$router:一般进行编程式导航进行路由跳转【push|replace】

5.3路由的跳转
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
binac

## 组件通信的方式有哪些？面试频率高
props ： 用于父子组件通信
自定义事件：@on @emit 可以  实现子传父通信
全局事件总线：$bus  全能
pubsub-js:vue当中几乎不用 全能
插槽
vuex
