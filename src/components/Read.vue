<template>
  <div class="read">
    <div class="blog-left">
      <div class="blog-head">
        <b>{{blog.title}}</b>
        <ul class="status">
          <li>
            <i class="iconfont icon-59" />
            <label class="status-item">{{blog.time}}</label>
          </li>
          <li>
            <button @click.once="liking" :class="liked?'like-active':'like'">
              <i class="iconfont icon-xin" />
            </button>
            <label class="status-item">{{blog.liked}}</label>
          </li>
        </ul>
      </div>
      <div class="blog-body">
        <article>{{blog.body}}</article>
      </div>
    </div>
    <div class="blog-right">
      <div class="view">
        <h2>评论</h2>
        <ul>
          <li v-for="(comment,index) in comments" :key="index">{{comment.time}}--{{comment.body}}</li>
        </ul>
      </div>
      <div class="write">
        <h2>写评论</h2>
        <input v-bind="newcomments" class="newcomment" />
        <button class="commit-comment">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Read",
  data() {
    return {
      title: this.$route.params.title,
      blog: {
        title: "WDNMD",
        body:
          "WGNMDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDWGNMDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDWGNMDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
        liked: 100,
        time:
          new Date().getFullYear() +
          "年" +
          new Date().getMonth() +
          "月" +
          new Date().getDay() +
          "日"
      },
      comments: [
        {
          time: new Date(),
          body: "WDNMD"
        },
        {
          time: new Date().toTimeString(),
          body: "WGNMD"
        }
      ],
      liked: false,
      newcomments: {
        time: new Date(),
        body: ""
      }
    };
  },
  methods: {
    liking: function() {
      this.liked = !this.liked;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.read {
  height: 100%;
  width: 80%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
}
.blog-left {
  width: 75%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
}
.blog-head {
  width: 100%;
  height: 24%;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
}
.blog-head b {
  font-size: 3rem;
  margin-top: 2rem;
  text-align: center;
}
.status {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
}
.status-item {
  font-size: 0.5rem;
  opacity: 0.5;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.status li {
  list-style: none;
}
.iconfont {
  font-size: 2rem;
}
.like {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.like-active {
  outline: none;
  border: 0;
  background: none;
  color: red;
}
.blog-body {
  width: 100%;
  height: 75%;
}
.blog-body article {
  height: 100%;
  width: 100%;
  word-wrap: break-word;
  table-layout: fixed;
  word-break: break-all;
}
.blog-right {
  height: 100%;
  width: 25%;
  background-color: #f3f3f3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.view {
  width: 100%;
  height: 60%;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
}
h2 {
  margin: 0;
  padding: 0;
  text-align: center;
}
.view ul {
  margin: 0;
  padding: 0;
}
.view li {
  list-style: none;
  margin-left: 1rem;
  margin-top: 1rem;
}
.write {
  width: 100%;
  height: 40%;
  display: flex;
  flex-flow: column nowrap;
}
.newcomment {
  height: 70%;
  width: 90%;
  margin-left: 1rem;
}
.commit-comment {
  border: 0;
  outline: none;
  cursor: pointer;
  height: 2rem;
  width: 90%;
  margin-top: 0.5rem;
  margin-left: 1.1rem;
}
</style>
