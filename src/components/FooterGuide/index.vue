<template>
  <footer class="footer_guide">
    <span
      class="guide_item"
      :class="{ on: $route.path == '/home' }"
      @click="goTo('/home')"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <span
      class="guide_item"
      :class="{ on: $route.path == '/search' }"
      @click="goTo('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span
      class="guide_item"
      :class="{ on: $route.path == '/order' }"
      @click="goTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span
      class="guide_item"
      :class="{ on: $route.path == '/profile' }"
      @click="goTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style  >
.footer_guide {
  position: relative;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
}
.footer_guide::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
.footer_guide .guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  /* margin: 5px; */
  color: #999;
}
.footer_guide .guide_item.on {
  color: #02a774;
}
.footer_guide .guide_item span {
  font-size: 12px;
  /* margin-top: 2px; */
  margin-bottom: 2px;
}
.footer_guide .guide_item span .iconfont {
  font-size: 20px;
}
</style>