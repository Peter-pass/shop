import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

//三级联动组件---全局组件
import typeNav from '@/components/TypeNav';
import Carsousel from '@/components/Carousel';
import Paginaton from '@/components/Pagination';
import { Button,MessageBox } from 'element-ui';
//全局组件：第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(typeNav.name,typeNav);
Vue.component(Carsousel.name,Carsousel);
Vue.component(Paginaton.name,Paginaton);
Vue.component(Button.name,Button);
// ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox=MessageBox;
Vue.prototype.$alert=MessageBox.alert;

//引入mockserve.js---mock数据
import '@/mock/mockServe';
//引入
import 'swiper/css/swiper.css';
// 统一接口API文件夹里面全部请求函数
// 统一引入
import * as API from '@/api';
//引入路由
import router  from '@/router';
//引入仓库
import store  from '@/store';
// 引入插件
import VueLazyload from 'vue-lazyload'
// 注册插件
Vue.use(VueLazyload,{
  // 懒加载默认的图片
  loading:atm
})
import atm from '@/assets/1.jpg';
// 引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:'upper'
});
// 引入表单校验插件
import '@/plugins/validate';

//引入swiper样式
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  //注册路由：底下的写法KV一致省略
  router,
  //注册仓库:组件实例的身上多个一个属性$store属性
  store,
  $
}).$mount('#app')
