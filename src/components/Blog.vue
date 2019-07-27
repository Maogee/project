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
          <article>&nbsp&nbsp{{blog.body | snippet}}</article>
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
      <h1 align="center">热门文章</h1>
      <div></div>
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
          body: "WGNMD"
        },
        {
          title: "WDNMD",
          body: "WGNMD"
        },
        {
          title: "WDNMD",
          body: "WGNMD"
        },
        {
          title: "WDNMD",
          body: "WGNMD"
        },
        {
          title: "WDNMD",
          body: "WGNMD"
        },
        {
          title: "WDNMD",
          body: "WGNMD"
        },
        {
          title: "HHHHH",
          body: "WGNMD"
        },
        {
          title: "HHHHH",
          body: "WGNMD"
        }
      ],
      totalPage: [],
      search: "",
      pageSize: 4,
      pageNum: Number,
      currentPage: 0,
      temp: []
    };
  },
  methods: {
    searchme: function() {
      this.temp.length = 0;
      this.totalPage.length = 0;
      this.temp = this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
      console.log(this.temp);
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

<style>
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
  background-color: #f3f3f3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
}
.search {
  margin-top: 2rem;
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
  width:100%;
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
.blog-title {
  text-decoration: none;
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
  background-color: #f3f3f3;
}
.right-content h1{
  margin-top: 2rem;
  margin: 0;
  padding: 0;
}
</style>
