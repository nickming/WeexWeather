<template>
    <div class="wrapper">
        <scroller class="daily-list" scroll-direction="vertical">
            <cell class="daily-cell" v-for="(item,index) in dailys">
                <div class="daily-wrapper">
                    <div class="text-container">
                        <text class="text">{{getMonthAndDayByDate(item.date)}}</text>
                        <text class="text">{{getWeekdayByDate(item.date)}}</text>
                    </div>
                    <div class="text-container">
                        <text class="common-text">{{item.cond.txt_d}}</text>
                        <image class="icon" src='https://cdn.heweather.com/cond_icon/306.png'></image>
                    </div>
                    <div class="text-container">
                        <text class="common-text">{{item.tmp.max}}~{{item.tmp.min}}°C</text>
                    </div>
                </div>
            </cell>
        </scroller>
    </div>
</template>

<script>
export default {
    props: {
        dailys: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            baseUrl: 'https://cdn.heweather.com/cond_icon/'
        }
    },
    methods: {
        convertCodeToUrl: function (code) {
            return this.baseUrl + code + '.png';
        },
        getWeekdayByDate: function (date) {
            let a = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
            let day = new Date(date).getDay();
            var today = this.getNowFormatDate();
            var tomorrow = this.getTomorrowFormatDate();
            if (today === date)
                return '今天';
            else if (date === tomorrow)
                return '明天'
            else
                return a[day];
        },
        getNowFormatDate: function () {
            var date = new Date();
            var seperator1 = "-";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            return currentdate;
        },
        getTomorrowFormatDate: function () {
            var date = new Date();
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
            var seperator1 = "-";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            return currentdate;
        },
        getMonthAndDayByDate: function (date) {
            return date.substring(8, date.length) + '日';
        },
        getHoursAndMinsByDate: function (date) {
            return date.substring(11, date.length);
        }
    }
}
</script>

<style>
.wrapper {
    height: 100px;
    padding: 10px;
    flex: 1;
}

.daily-list {
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
}

.daily-cell {
    padding: 10px;
    flex: 1;
}

.daily-wrapper {
    flex-direction: row;
    flex: 1;
}

.text-container {
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.text {
    font-size: 24px;
    color: #fff;
    margin-left: 10px;
}

.icon {
    width: 36px;
    height: 36px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>