<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <mt-header fixed title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由出口 -->
    <router-view />
    <!-- 底部导航栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/hb_icon1.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/img/hb_icon2.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/img/hb_icon2.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/hb_icon3.png" />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{
      selected: ''
    }
  },
  watch: {
    selected: function(newV, oldV){
      console.log(newV)
      this.$router.push({name: this.selected});
    }
  }

};
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
}
body{
  padding-top: 2.5rem;
}

</style>
