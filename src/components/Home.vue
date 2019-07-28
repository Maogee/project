<template>
  <div id="home">
    <div class="img-play">
      <ul class="img-list" :style="[containStyle,finished?transitionStyle:notransitionStyle]">
        <li>
          <router-link class="img-hover" :to="imgs[imgs.length-1].page">
            <h1 class="img-title">{{imgs[imgs.length-1].name}}</h1>
            <img :src="imgs[imgs.length-1].path" />
          </router-link>
        </li>
        <li v-for="(item,index) in imgs" :key="index">
          <router-link class="img-hover" :to="item.page">
            <h1 class="img-title">{{item.name}}</h1>
            <img :src="item.path" />
          </router-link>
        </li>
        <li>
          <router-link class="img-hover" :to="imgs[0].page">
            <h1 class="img-title">{{imgs[0].name}}</h1>
            <img :src="imgs[0].path" />
          </router-link>
        </li>
      </ul>
      <ul>
        <li class="left" @click="move(70, 1)">
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
            />
          </svg>
        </li>
        <li class="right" @click="move(70,-1)">
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
            />
          </svg>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in imgs" :key="i" :class="{dotted: i === (currentIndex-1)}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      imgs: [
        {
          name: "首页",
          path: require("../assets/3.jpg"),
          page: "/Home"
        },
        {
          name: "个人介绍",
          path: require("../assets/4.jpg"),
          page: "/Introduce"
        },
        {
          name: "个人博客",
          path: require("../assets/5.jpg"),
          page: "/Blog"
        }
      ],
      currentIndex: 1,
      transformEnd: true,
      finished: true,
      distance: -70,
      notransitionStyle: {},
      time: 1
    };
  },
  computed: {
    containStyle() {
      return {
        transform: `translate3d(${this.distance}rem, 0, 0)`
      };
    },
    transitionStyle() {
      return {
        transition: `all ${this.time}s`
      };
    }
  },
  mounted() {
    this.play();
  },
  methods: {
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(70, -1);
      }, 4000);
    },
    move(offset, direction) {
      if (!this.transformEnd) return;
      this.finished = true;
      this.transformEnd = false;
      this.distance = this.distance + offset * direction;
      direction === -1
        ? (this.currentIndex += offset / 70)
        : (this.currentIndex -= offset / 70);
      if (this.currentIndex < 1) this.currentIndex = 3;
      if (this.currentIndex > 3) this.currentIndex = 1;
      if (this.distance < -210) {
        window.setTimeout(() => {
          this.distance = -70;
          this.transformEnd = true;
          this.finished = false;
        }, 1000);
      } else if (this.distance > -70) {
        window.setTimeout(() => {
          this.distance = -210;
          this.transformEnd = true;
          this.finished = false;
        }, 1000);
      } else {
        window.setTimeout(() => {
          this.transformEnd = true;
        }, 1000);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
router-link {
  list-style: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
img {
  width: 70rem;
  user-select: none;
}
.img-play {
  position: relative;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.img-list {
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
}
.img-title {
  font-size: 6rem;
  opacity: 0.6;
  color: white;
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 99999;
  user-select: none;
}
.img-hover:hover .img-title{
  font-size: 6rem;
  opacity: 1;
  color: white;
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 99999;
  user-select: none;
}
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
}
.left {
  left: 3%;
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 3%;
  padding-left: 6px;
  padding-top: 10px;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
}
.dots .dotted {
  background-color: orange;
}
</style>
