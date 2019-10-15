<template>
  <div id="home">
    <Navbar class="home-nav">
      <div slot="center">购物街</div>
    </Navbar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommend"/>
    <Feature/>
    <tab-control class="tab-list" :titles="['流行','新款','精选']"/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
  
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Navbar from "components/common/navbar/NavBar";
import HomeSwiper from './chlidComps/homeSwiper'
import HomeRecommend from './chlidComps/homeRecommend'
import Feature from './chlidComps/homeFeature'
// 数据在不是 import default的时候要加上大括号  是import default的时候就不用加括号了


import TabControl from 'components/content/tabControl/tabControl'



import { getHomeMultidata } from "./../../network/home";
// 导入请求的这个数据

// import Swiper from "components/common/swiper/Swi per"
// import SwiperItem from "components/common/swiper/SwiperItem"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    Feature,


    TabControl
  },
  data() {
    return {
      // result:null
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //发送网络请求
    // 创建页面前去调用
    getHomeMultidata().then(res => {
      console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
      this.recommend = res.data.recommend.list;
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
//@import url(); 引入公共css类
</script>
<style scoped>
#home{
  padding-top:44px; 
}
.home-nav {
  background-color: rgb(255, 43, 54);
  color: #fff;
   position: fixed;
  left: 0;
  top:0;
  right: 0;
  z-index: 99;
}
.tab-list{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>