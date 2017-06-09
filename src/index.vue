<template>
  <div class="wrapper" @click="update">
    <scroller show-scrollbar=false>
      <image class="bg-image" resize="cover" :src='bgUrl'></image>
  
      <div class="head-nav">
        <image class="icon" :src='menuUrl'></image>
        <text class="head-text">{{currentWeatherData.basic.city}}</text>
        <image class="icon" :src='shareUrl'></image>
      </div>
  
      <div class="head-detail">
        <text class="tmp">{{currentWeatherData.now.tmp}}°C</text>
        <text class="cond">{{currentWeatherData.now.cond.txt}}</text>
      </div>
  
      <div class="head-bottom">
        <text class="common-text">空气质量:{{currentWeatherData.aqi.city.qlty}}</text>
        <text class="common-text">{{currentWeatherData.now.wind.dir}} {{currentWeatherData.now.wind.spd}}级</text>
      </div>
  
      <div class="hourly-wrapper">
        <hourly :hours='hours'></hourly>
      </div>
  
      <div class="daily-wrapper">
        <daily :dailys='dailys'></daily>
      </div>
  
    </scroller>
  </div>
</template>


<script>
var stream = weex.requireModule('stream');
import hourly from './components/hourly.vue';
import daily from './components/daily.vue';
export default {
  components: {
    hourly,
    daily
  },
  data: {
    menuUrl: 'https://github.com/nickming/WeexWeather/blob/master/icons/menu.png?raw=true',
    shareUrl: 'https://github.com/nickming/WeexWeather/blob/master/icons/SHARE.png?raw=true',
    bgUrl: 'https://bing.ioliu.cn/v1?w=720&h=1280',
    currentWeatherData: 'unknown',
    hours: [],
    dailys: [],
    loading: false
  },

  created: function () {
    this.getCurrentWeather('dongguan', (response) => {
      this.currentWeatherData = response.ok ? response.data.HeWeather5[0] : "network error!";
      this.hours = this.currentWeatherData.hourly_forecast;
      this.dailys = this.currentWeatherData.daily_forecast;
      this.loading = true;
    });
  },

  methods: {
    getCurrentWeather: function (city, callback) {
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922&city=dongguan'
      }, callback);
    }
  }
}
</script>

<style>
.wrapper {
  
}

.bg-image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 750px;
  height: 1250px;
  filter: blur(10px);
  flex: 1;
}

.head-nav {
  margin-top: 20px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
}

.icon {
  height: 36px;
  width: 36px;
}

.head-text {
  font-size: 36px;
  color: #fff;
}

.head-detail {
  height: 200px;
  align-items: center;
  justify-content: center;
}

.tmp {
  margin-top: 20px;
  font-size: 64px;
  color: #fff;
}

.cond {
  margin-top: 50px;
  font-size: 24px;
  color: #fff;
}

.head-bottom {
  padding: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
}

.common-text {
  font-size: 24px;
  color: #fff;
}

.daily-wrapper {
  margin-top: 20px;
}
</style>