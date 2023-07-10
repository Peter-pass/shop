//路由配置信息
//引入路由组件
import Home from '@/pages/Home';
import search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

// 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了

export default [
    {
        path:'/Center',
        component:Center,
        meta:{isShow:true},
        children:[
            {
                path:'myorder',
                component:MyOrder,

            },
            {
                path:'grouporder',
                component:GroupOrder,
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{isShow:true},
    },
    {
        path:'/pay',
        component:Pay,
        meta:{isShow:true},
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path:'/trade',
        component:Trade,
        meta:{ isShow:true},
         // 路由独享
         beforeEnter: (to, from, next) => {
            if(from.path=="/shopcart"){
                next();
            }else{
                // 其他的路由组件而来，停留在当前
                next(false);
            }
        }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { isShow: true }
    },
    {
        path: '/Shopcart',
        component: ShopCart,
      },
    {
        path: '/detail',
        component: Detail,
        meta: { isShow: true }
    },
    {
        path: '/home',
        component:()=>import ('@/pages/Home'),
        meta: { isShow: true }
    },
    {
        path: '/search/:keyword?',
        component: search,
        meta: { show: true },
        name: 'search',
        // 面试题4：路由组件能不能传递props数据？
        //1:布尔值写法:params
        // props:true,
        //2:对象写法：额外给路由组件传递一些props
        // props:{a:1,b:2},
        //3:函数写法：可以params参数，query参数，通过props传递给路由
        // props:(routes)=>{
        //     return {keyword:$route.params.keyword,k:$route.query.k};
        // }


    },
    {
        path: '/login',
        component: Login,
        meta: { isHideFooter: true }
    },
    {
        path: '/Register',
        component: Register,
        meta: { isHideFooter: true }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]