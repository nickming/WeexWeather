<template>
  <div class="wrapper" @click="update">
    <div class="head-nav">
      <text class="icon"></text>
      <text class="head-text">东莞</text>
      <text class="icon"></text>
    </div>
  
    <div class="head-detail">
      <text class="tmp">32°C</text>
      <text class="cond">阵雨</text>
    </div>
  
    <div class="head-bottom">
      <text class="common-text">空气质量:优</text>
      <text class="common-text">西风3~4级</text>
    </div>
  </div>
</template>


<script>
export default {
  data: {
    logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
    target: 'World'
  },
  created: function () {
  },
  methods: {
    update: function (e) {
      this.target = 'ReactNative'
      console.log('target:', this.target)
    }
  }
}
</script>

<style>
.head-nav {
  margin-top: 20px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
}

.icon {
  font-family: "iconfont";
  font-size: 24px;
  color: black;
}

.head-text {
  font-size: 24px;
  color: #888;
}

.head-detail {
  height: 200px;
  align-items: center;
}

.tmp {
  margin-top: 20px;
  font-size: 48px;
  color: #888;
}

.cond {
  margin-top: 30px;
  font-size: 24px;
  color: #888;
}

.head-bottom {
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
}

.common-text {
  font-size: 24px;
}
</style>