<template>
  <div class="blog">
    <div class="left-content">
      <div class="search">
        <input type="text" v-model="search" class="search-input" placeholder="Search" />
        <button class="search-icon" @click="searchme">
          <i class="iconfont icon-search" />
        </button>
      </div>
      <div class="preview">
        <div class="each-preview" v-for="(blog,index) in totalPage[currentPage]" :key="index">
          <h2>
            <router-link class="blog-title" v-bind:to="'/read/'+blog.title">{{blog.title}}</router-link>
          </h2>
          <div class="inf">
            <span class="inf-tag">
              <i class="iconfont icon-tag" />
              {{blog.tag}}
            </span>
            <span class="inf-time">
              <i class="iconfont icon-time" />
              {{blog.time}}
            </span>
          </div>
          <article class="pre-article">&nbsp&nbsp{{blog.body | snippet}}</article>
          <div class="other-user">
            <span class="inf-comment">
              <i class="iconfont icon-custom-comment" />
              {{blog.commentNum}}
            </span>
            <span class="inf-like">
              <i class="iconfont icon-xin" style="color:red" />
              {{blog.like}}
            </span>
          </div>
        </div>
      </div>
      <div class="switch-page">
        <ul class="page-bar">
          <li class="switch-bar">
            <button class="switch-page-btn" @click="currentPage===0?currentPage:(currentPage-=1)">←</button>
          </li>
          <li class="switch-bar" v-for="index in pageNum">
            <button
              @click="currentPage=(index-1)"
              :class="(currentPage+1)===index?'switch-page-btn-active':'switch-page-btn'"
            >{{index}}</button>
          </li>
          <li class="switch-bar">
            <button
              class="switch-page-btn"
              @click="currentPage===(pageNum-1)?currentPage:(currentPage+=1)"
            >→</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-content">
      <h1 class="class-title" align="center">推荐</h1>
      <div class="most-view">
        <ul>
          <li class="view-title" v-for="(item,index) in hotBlog" :key="index">
            <router-link class="view-link" v-bind:to="'/read/'+item.title">
              <span>{{index+1}}. {{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <h1 class="class" align="center">标签</h1>
      <div class="class-view">
        <ul>
          <li
            class="class-tag"
            :style="{backgroundColor:colors[index]}"
            v-for="(item,index) in tags"
            :key="index"
          >
            <span>{{item.tag}}</span>
          </li>
        </ul>
      </div>
      <h1 class="class" align="center">关于本站</h1>
      <div class="about">
        <span class="about-text">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp本站是一个用于知识积累与分享的个人开源博客。主要技术栈为HTML+CSS+JS、vue全家桶。</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      blogs: [
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "HHHHH",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "HHHHH",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        }
      ],
      totalPage: [],
      search: "",
      pageSize: 4,
      pageNum: Number,
      currentPage: 0,
      temp: [],
      hotBlog: [
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        },
        {
          title: "WDNMD",
          body: "WGNMD",
          time: new Date(),
          tag: "js",
          commentNum: 10,
          like: 20
        }
      ],
      tags: [
        {
          tag: "html"
        },
        {
          tag: "js"
        },
        {
          tag: "css"
        },
        {
          tag: "vue"
        },
        {
          tag: "node.js"
        },
        {
          tag: "es6"
        },
        {
          tag: "bootstrap"
        }
      ],
      colors: [
        "#FF9933",
        "#663300",
        "#CC6600",
        "#99CC33",
        "#CC6699",
        "#009966",
        "#999999",
        "#336666",
        "#9BBFEA",
        "#CCCC00"
      ]
    };
  },
  methods: {
    searchme: function() {
      this.temp.length = 0;
      this.totalPage.length = 0;
      this.temp = this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
      this.pageNum = Math.ceil(this.temp.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage.push(
          this.temp.slice(this.pageSize * i, this.pageSize * (i + 1))
        );
      }
    }
  },
  mounted() {
    this.pageNum = Math.ceil(this.blogs.length / this.pageSize) || 1;
    for (let i = 0; i < this.pageNum; i++) {
      this.totalPage.push(
        this.blogs.slice(this.pageSize * i, this.pageSize * (i + 1))
      );
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.blog {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.left-content {
  height: 100%;
  width: 65%;
  margin-left: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.search {
  margin-top: 1rem;
  width: 20rem;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.search-input {
  font-size: 1rem;
  color: #999;
  display: block;
  float: left;
  width: 17rem;
  padding: 4px 0 4px 7px;
  border: 0;
  height: 1.5rem;
  border-radius: 10px;
  background: white;
  outline: none;
}
.search-icon {
  height: 2rem;
  width: 2.5rem;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: white;
}
.preview {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.each-preview {
  background-color: white;
  margin-top: 1rem;
  width: 98%;
  height: 8rem;
  border: 1px white solid;
  border-radius: 2%;
}
.each-preview h2 {
  text-align: center;
  margin-top: 0.5rem;
  width: auto;
}
.pre-article {
  margin-top: 0.5rem;
}
.inf {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.inf-tag {
  margin-left: 2rem;
  opacity: 0.3;
  font-size: 0.8rem;
}
.inf-time {
  margin-left: 2rem;
  opacity: 0.3;
  font-size: 0.8rem;
}
.blog-title {
  text-decoration: none;
  color: aquamarine;
}
.other-user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}
.inf-like {
  font-size: 0.8;
  margin-right: 1rem;
}
.inf-comment {
  margin-right: 1rem;
  font-size: 0.8;
}
.router-link-active {
  text-decoration: none;
}
.page-bar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 1rem;
  padding: 0;
  margin-top: 1rem;
}
.switch-bar {
  list-style: none;
}

.switch-page-btn {
  border: 1px white solid;
  border-radius: 20%;
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
  outline: none;
  cursor: pointer;
  background-color: white;
}
.switch-page-btn-active {
  border: 1px white solid;
  border-radius: 20%;
  margin-left: 0.5rem;
  height: 2rem;
  width: 2rem;
  outline: none;
  cursor: pointer;
  background-color: #2d8cf0;
}
.right-content {
  height: 100%;
  width: 30%;
  margin-left: 1rem;
}
.class-title {
  margin-top: 2rem;
  color: cornflowerblue;
  background-color: #2e3033;
  line-height: 3rem;
}
.most-view {
  background-color: rgb(255, 255, 255, 0.7);
  height: 18rem;
  width: 100%;
}
.view-title {
  list-style: none;
  margin-left: 1rem;
  padding: 1rem;
  white-space: nowrap;
  border-bottom: 1px solid #ddd;
}
.view-link {
  text-decoration: none;
  color: cornflowerblue;
}
.class {
  color: cornflowerblue;
  background-color: #2e3033;
  line-height: 3rem;
}
.class-view {
  background-color: rgb(255, 255, 255, 0.7);
  height: 8rem;
  width: 100%;
}
.class-tag {
  margin-top: 0.5rem;
  margin-left: 1rem;
  list-style: none;
  text-align: center;
  line-height: 2rem;
  width: 6rem;
  border: -2px solid;
  border-radius: 5%;
  display: inline-block;
  opacity: 0.7;
  color: aquamarine;
}
.about {
  background-color: rgb(255, 255, 255, 0.7);
  height: 5rem;
  width: 100%;
  line-height: 1.5rem;
}
</style>
