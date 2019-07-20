<template>
  <div id="introduce">
    <div class="container">
      <div class="aboutme">
        <h3>About Me</h3>
        <ul>
          <li><i class="iconfont icon-caidan07"/>&nbsp<b>邝伟航</b></li>
          <li><i class="iconfont icon-school"/>&nbsp<b>华南师范大学(数据库方向)</b></li>
          <li><i class="iconfont icon-phone"/>&nbsp<b>15521420412</b></li>
          <li><i class="iconfont icon-emailFilled"/>&nbsp<b>942847357@qq.com</b></li>
        </ul>
      </div>
      <div class="myskill">
        <h3>My Skills</h3>
        <div style="height: 400px;" id="myChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"introduce",
  data() {
    return {
      skillData: [
        { name: "html/css", value: 80 },
        { name: "html5/css3", value: 75 },
        { name: "javascript", value: 70 },
        { name: "vue", value: 70 },
        { name: "mysql", value: 80 },
        { name: "webpack", value: 50 },
        { name: "node", value: 60 },
        { name: "C++", value: 70 },
        { name: "java", value: 60 },
        { name: "python", value: 75 },
        { name: "bootStrap", value: 60 }
      ],
      skillSymboData: [
        { name: "html/css", value: 80, symbolSize: 30 },
        { name: "html5/css3", value: 75, symbolSize: 25 },
        { name: "javascript", symbolSize: 20, value: 70 },
        { name: "vue", symbolSize: 20, value: 70 },
        { name: "mysql", symbolSize: 20, value: 80 },
        { name: "webpack", symbolSize: 10, value: 50 },
        { name: "node", symbolSize: 10, value: 60 },
        { name: "C++", symbolSize: 10, value: 70 },
        { name: "java", symbolSize: 10, value: 60 },
        { name: "python", symbolSize: 10, value: 75 },
        { name: "bootStrap", symbolSize: 20, value: 60 }
      ]
    };
  },
  computed: {},
  mounted() {
    this.drawMySkill();
  },
  methods: {
    roundDatas(num) {
      let datas = [];
      for (let i = 0; i < num; i++) {
        datas.push({
          name: "circle" + i
        });
      }
      return datas;
    },
    drawMySkill() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "个人技能",
          top: "center",
          left: "center",
          textStyle: {
            fontSize: 20,
            color: "#9474B4",
            fontWeight: "bolder"
          }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        roam: false,
        focusNodeAdjacency: true,
        dataRange: {
          min: 0,
          max: 60,
          y: "100%",
          calculable: true,
          show: false,
          color: ["#59446B", "#D69BFF"]
        },
        series: [
          {
            name: "",
            type: "pie",
            startAngle: 0,
            hoverAnimation: false,
            radius: ["60%", "60%"],
            center: ["50%", "50%"],
            data: this.skillData,
            itemStyle: {
              normal: {
                color: "#000",
                borderWidth: 5,
                borderColor: "rgba(0,0,0,0)",
                label: {
                  show: true,
                  formatter: "{b}\n熟练程度：{c}%"
                },
                labelLine: {
                  show: true,
                  length: 40,
                  lineStyle: {
                    color: "#7C9ECD"
                  }
                }
              }
            }
          },
          {
            type: "graph",
            tooltip: {},
            ribbonType: true,
            layout: "circular",
            hoverAnimation: false,
            width: "60%",
            height: "60%",
            circular: {
              rotateLabel: true
            },
            symbolSize: 1,
            data: this.roundDatas(300),
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                color: "#58446C"
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            }
          },
          {
            type: "graph",
            tooltip: {},
            ribbonType: true,
            layout: "circular",
            width: "60%",
            height: "60%",

            circular: {
              rotateLabel: true
            },
            symbolSize: 30,
            label: {
              normal: {
                position: "center",
                formatter: "{b}\n熟练程度：{d}%",
                normal: {
                  textStyle: {
                    fontFamily: "宋体"
                  }
                }
              }
            },
            edgeSymbol: ["circle"],
            edgeSymbolSize: [8, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 13,
                  fontWeight: "bold",
                  fontFamily: "宋体"
                }
              }
            },
            itemStyle: {
              normal: {
                label: {
                  rotate: true,
                  show: false,
                  textStyle: {
                    color: "#9474B4"
                  }
                },
                borderColor: "#7C9ECD",
                borderWidth: 3
              },
              emphasis: {
                label: {
                  show: false
                }
              }
            },

            data: this.skillSymboData
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
#introduce{
  height:100%;
}
h3{
  font-size: 20;
  color: #9474B4;
  font-weight: bolder;
}
.container{
  width: 50rem;
}
.aboutme{
  height: 40%;
}
ul li{
  list-style: none;
  margin-left: 50%;
  margin-top:1rem;
}
ul{
  text-align: left;
  margin: 0;
  padding: 0;
}
.myskill{
  height: 60%;
}
</style>
