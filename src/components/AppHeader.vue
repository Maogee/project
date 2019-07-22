<template>
  <div class="appheader">
    <img class="me" @click="routerLink('1','/Introduce')" src="../assets/1.jpg" />
    <ul class="ul-item">
      <li v-for="(item,index) in nav" @click="routerLink(index,item.path)" :key="index">
        <button :class="navIndex===item.en?'item-title-active':'item-title'">
          <b>{{item.title}}</b>
        </button>
      </li>
    </ul>
    <ul class="list-ui">
      <li class="weixin-list">
        <i class="iconfont icon-weixin" />
        <div class="weixin">
          <img src="../assets/2.png" />
        </div>
      </li>
      <li class="qq-list">
        <i class="iconfont icon-qq" />
        <div class="qq">
          <img class="qq" src="../assets/2.png" />
        </div>
      </li>
      <li class="github-list">
        <a href="https://github.com/Maogee" target="_blank">
          <i class="iconfont icon-github" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "appheader",
  data() {
    return {
      navIndex: "Home",
      nav: [
        { title: "博客首页", en: "Home", path: "/Home" },
        { title: "个人简介", en: "Introduce", path: "/Introduce" },
        { title: "个人博客", en: "Blog", path: "/Blog" }
      ]
    };
  },
  methods: {
    routerLink(index, path) {
      this.navIndex = this.nav[index].title;
      this.$router.push(path);
    }
  },
  mounted() {
    this.navIndex = this.$route.name;
  },
  updated() {
    this.navIndex = this.$route.name;
  }
};
</script>

<style scoped>
.appheader {
  background-color: #f3f3f3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.me {
  height: 13rem;
  width: 13rem;
  cursor: pointer;
  border-radius: 50%;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin-top: 1rem;
}
.item-title {
  color: #1c2438;
  font-size: 1.5rem;
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
}
.item-title-active {
  color: #2d8cf0;
  font-size: 1.5rem;
  border: 0;
  cursor: pointer;
  background: none;
  outline: none;
}
.ul-item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #333;
}
.iconfont {
  font-size: 2rem;
}
.list-ui {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
}
.qq-list{
  margin-left: 2rem;
}
.github-list{
  margin-left:2rem;
}
.weixin {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 1rem;
  opacity: 0;
  transition: all 1s ease-in-out 0s;
  -moz-transition: all 1s ease-in-out 0s;
  -webkit-transition: all 1s ease-in-out 0s;
}
.weixin-list:hover .weixin {
  opacity: 1;
  transform: rotateX(360deg);
  -moz-transform: rotateX(360deg);
  -ms-transform: rotateX(360deg);
  -o-transform: rotateX(360deg);
  -webkit-transform: rotateX(360deg);
}
.weixin img {
  width: 100%;
  height: auto;
  display: block;
}
.weixin:after {
  content: "";
  position: absolute;
  display: block;
  right: 68px;
  top: -11px;
}
.qq {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 2.5rem;
  opacity: 0;
  transition: all 1s ease-in-out 0s;
  -moz-transition: all 1s ease-in-out 0s;
  -webkit-transition: all 1s ease-in-out 0s;
}
.qq-list:hover .qq {
  opacity: 1;
  transform: rotateX(360deg);
  -moz-transform: rotateX(360deg);
  -ms-transform: rotateX(360deg);
  -o-transform: rotateX(360deg);
  -webkit-transform: rotateX(360deg);
}
.qq img {
  width: 100%;
  height: auto;
  display: block;
}
.qq:after {
  content: "";
  position: absolute;
  display: block;
  right: 68px;
  top: -11px;
}
</style>
