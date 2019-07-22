<template>
  <div id="app">
    <app-header :style="{ height: screenHeight + 'px' ,width:(0.2*screenWidth)+'px'}" id="header"></app-header>
    <router-view :style="{ height: screenHeight + 'px' ,width:(0.8*screenWidth)+'px'}" id="content"></router-view>
  </div>
</template>

<script>
import Header from "./components/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader: Header
  },
  data() {
    return {
      screenHeight: document.body.clientHeight,
      screenWidth: document.body.clientWidth
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight;
        that.screenHeight = window.screenHeight;
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenHeight(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          console.log(that.screenHeight);
          that.timer = false;
        }, 400);
      }
    },
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          console.log(that.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
