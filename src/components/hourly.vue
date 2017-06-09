<template>
    <div class="wrapper">
        <scroller class="hour-list" scroll-direction="horizontal">
            <cell class="hour-cell" v-for="(item,index) in hours">
                <div class="hour-wrapper">
                    <text class="common-text">{{item.cond.txt}}</text>
                    <image class="icon" :src='convertCodeToUrl(item.cond.code)'></image>
                    <text class="common-text">{{item.tmp}}°C</text>
                </div>
            </cell>
        </scroller>
    </div>
</template>

<script>
export default {
    props: {
        hours: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            baseUrl: ''
        }
    },
    methods: {
        convertCodeToUrl: function (code) {
            return 'https://cdn.heweather.com/cond_icon/' + code + '.png';
        }
    }
}
</script>

<style>
.wrapper {
    height: 150px;
    padding: 10px;
}

.hour-list {
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: row;
    align-items: center;
}

.hour-cell {
    width: 150px;
    padding: 10px;
}

.hour-wrapper {
    align-items: center;
    justify-content: center;
}

.text {
    font-size: 24px;
    color: #fff;
}

.icon {
    width: 24px;
    height: 24px;
}
</style>


