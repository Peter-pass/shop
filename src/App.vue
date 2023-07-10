<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在home，search显示的，在登录，注册隐藏 -->
    <Footer v-show="$route.meta.show"/>
    </div>

</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: '',
  components:{
      Header,
      Footer
  },
  mounted() {
    //派发action||获取商品分类的三级列表的数据
    this.$store.dispatch('getCategoryList');
    
  },
}
</script>

<style scoped>

</style>
