<template>
<div class='tabcontrol'>
  <div
  @click='itembtn(index)'
  v-for="(item, index) in titles" 
  :key="index" class="tabitem" 
  :class="{active:index === currentIndex} 
  ">
    <span>{{ item }}</span>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
return {
currentIndex:0
};
},
props:{
titles:{
  type:Array
}
},
computed: {},
//监控data中的数据变化
watch: {},
methods: {
  itembtn(index){
    // console.log(index);
    this.currentIndex = index;
    
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
//@import url(); 引入公共css类
</script>
<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px; 
}
.tabitem{
  flex: 1;
}
.tabitem span{
  
  padding: 4px;
}
.active{
  color:rgb(255, 43, 54);
}
.active span{
border-bottom: 2px solid rgb(255, 43, 54);
}
</style>