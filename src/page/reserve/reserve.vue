<template>
  <div class="reserve-con">
    <!--头部图片-->
    <reserve-header></reserve-header>
    <!--行程-->
    <div class="reserve-prodatail">
      <div class="reserve-prodatail-tab">
        <div class="reserve-prodatail-item reserve-prodatail-active">行程介绍</div>
        <div class="reserve-prodatail-item">费用说明</div>
        <div class="reserve-prodatail-item">使用说明</div>
      </div>
    </div>

    <!--行程介绍-->
    <div class="reserve-prodatail-explain">
      <!--交通餐食-->
      <div class="reserve-journey-top">
        <div class="reserve-journey-detail">
          <div class="reserve-journey-inner">
            <div class="reserve-journey-item">
              <div class="reserve-journey-title">
                <span class="reserve-journey-icon iconfont">&#xe74e;</span>
                <span>交通</span>
              </div>
              <div class="reserve-journey-content">汽车往返</div>
            </div>
            <div class="reserve-journey-item" style="margin-bottom: 0;">
              <div class="reserve-journey-title">
                <span class="reserve-journey-icon iconfont">&#xe68a;</span>
                <span>用餐</span>
              </div>
              <div class="reserve-journey-content">餐食自理</div>
            </div>
          </div>
        </div>
        <!--亮点-->
        <div class="reserve-journey-lightspot">
          <h3 class="reserve-lightspot-header">行程亮点</h3>
        </div>
        <div class="reserve-lightspot-content">
          <p class="reserve-lightspot-desc">
            ★故宫深度游，不一样的体验
            <br>
            ★逛帝王之家，走皇家园林
            <br>
            ★无线耳麦*无需扎堆*聆听历史
          </p>
        </div>
      </div>

      <reserve-router></reserve-router>
    </div>
    <!--费用说明-->
    <div class="reserve-state">
      <h3 class="reserve-state-title">
        <span class="reserve-state-title-bortop"></span>
        费用及退款说明
        <span class="reserve-state-title-borbottom"></span>
      </h3>

      <div class="reserve-state-content">
        <h4 class="reserve-content-cost">费用包含</h4>
        <div class="reserve-content-list">
          <div class="reserve-content-listitem">
            <h4 class="reserve-listitem-title">
              门票
            </h4>
            <p class="reserve-listitem-desc">
              【基础版】天安门广场+故宫
              <br>
              1、故宫门票
              <br>
              【升级A】故宫+八达岭
              <br>
              1、故宫门票（赠珍宝馆）
              <br>
              2、八达岭门票
              <br>
              【升级B】故宫+颐和园
              <br>
              1、故宫门票
              <br>
              2、颐和园门票
              <br>
              【升级C】故宫+恭王府
              <br>
              1、故宫门票
              <br>
              2、恭王府联票（含大戏楼）
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ReserveHeader from './reserveHeader'
  import ReserveRouter from './reserveRouter'
  export default {
    components: {
      ReserveHeader,
      ReserveRouter
    }
  }
</script>

<style type="text/css">
  .reserve-con{
    background: #f5f5f5;
  }
  .reserve-prodatail {
    height: .6rem;
    margin-top: .2rem;
    padding: .01rem 0;
    background-color: #fff;
  }
  .reserve-prodatail-tab {
    display: flex;
    width: 100%;
    overflow: hidden;
    margin-bottom: -.2rem;
    background-color: #fff;
  }
  .reserve-prodatail-active {
    position: relative;
    border-bottom: .04rem solid #00afc7;
    color: #00afc7;
  }
  .reserve-prodatail-item {
    display: block;
    height: .4rem;
    padding: .2rem 0;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
    flex: 1;
  }
  .reserve-prodatail-explain {
    margin-top: 0;
    padding: .01rem 0;
    background-color: #fff;
  }
  .reserve-journey-top {
    margin-top: .2rem;
    background-color: #fff;
    padding: 0 .2rem;
  }
  .reserve-journey-detail {
    padding: .24rem 0;
  }
  .reserve-journey-inner {
    background-color: #f5f5f5;
    border-radius: .1rem;
    padding: .2rem;
  }
  .reserve-journey-item {
    position: relative;
    overflow: hidden;
    margin-bottom: .2rem;
  }
  .reserve-journey-title {
    position: absolute;
    width: 1.2rem;
    color: #212121;
  }
  .reserve-journey-icon {
    color: #919191;
    margin-right: .1rem;
  }
  .reserve-journey-content {
    padding-left: 1.2rem;
    line-height: .36rem;
    color: #616161;
  }
  .reserve-journey-lightspot {
    margin-top: .1rem;
  }
  .reserve-lightspot-header {
    color: #616161;
    font-size: .4rem;
  }
  .reserve-lightspot-content {
    padding: .24rem 0 .3rem 0;
    border-bottom: 1px dashed #dadada;
  }
  .reserve-lightspot-desc {
    color: #616161;
    font-size: .28rem;
    line-height: .44rem;
    max-height: 1.32rem;
    overflow: hidden;
  }
  .reserve-router-headertext {
    color: #616161;
    font-size: .4rem;
    margin: .3rem 0 0 .2rem;
  }
  .reserve-router-content {
    overflow: hidden;
    padding: .2rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
  }
  .reserve-router-item {
    overflow: hidden;
    min-height: 1%;
    padding-bottom: .14rem;
  }
  .reserve-router-data {
    overflow: hidden;
    float: left;
    width: .72rem;
    height: .44rem;
    color: #212121;
    white-space: nowrap;
  }
  .reserve-router-details {
    position: relative;
    margin-left: .76rem;
    padding-left: .7rem;
    font-size: .28rem;
    padding-bottom: .1rem;
  }
  .reserve-router-location {
    position: absolute;
    z-index: 2;
    top: 2px;
    left: .2rem;
    color: #00afc7;
    font-size: .28rem;
  }
  .eserve-router-link {
    color: #00afc7;
  }
  .reserve-router-headerline {
    color: #00afc7;
  }
  .reserve-router-headertitle {
    color: #212121;
  }
  .reserve-router-right {
    color: #616161;
    font-size: .28rem;
  }
  .reserve-router-left {
    position: absolute;
    bottom: -.4rem;
    left: .04rem;
    width: 1px;
    height: 100%;
    margin-left: .3rem;
    border-radius: 3px;
    background-color: rgba(217,217,217,0.7);
  }
  .reserve-particulars {
    padding: 0 .2rem;
  }
  .reserve-particulars-content {
    height: .8rem;
    color: #616161;
    font-size: .28rem;
    line-height: .8rem;
    text-align: center;
    margin-top: .1rem;
    border-top: 1px dashed #dadada;
  }
  .reserve-particulars-border {
    border-bottom: 1px solid #e0e0e0;
  }
  .reserve-particulars-right {
    margin-left: .1rem;
    color: #9e9e9e;
    font-size: .24rem;
  }
  .reserve-map {
    height: 3.5rem;
    padding: .2rem .2rem .1rem .2rem;
    overflow: hidden;
    margin-bottom: .2rem;
    position: relative;
  }
  .reserve-map-content {
    overflow: hidden;
    position: relative;
    z-index: 0;
    background-color: rgb(243, 241, 236);
    color: rgb(0, 0, 0);
    text-align: left;
  }
  .reserve-map-mask {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 80;
  }
  .reserve-state {
    margin-top: .2rem;
    padding: .01rem 0;
    background-color: #fff;
  }
  .reserve-state-title {
    overflow: hidden;
    position: relative;
    height: .84rem;
    padding: 0 .2rem;
    color: #212121;
    font-size: .32rem;
    line-height: .84rem;
    text-indent: .16rem;
  }
  .reserve-state-title-bortop {
    border-bottom: 1px solid #e0e0e0;
  }
  .reserve-state-title-borbottom {
    position: absolute;
    top: .28rem;
    left: .2rem;
    width: .06rem;
    height: .28rem;
    background: #00bcd4;
    border-radius: .06rem;
  }
  .reserve-state-content {
    overflow: hidden;
    padding: 0 .24rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
  }
  .reserve-content-cost {
    padding: .24rem 0 .1rem;
    color: #ff8300;
    font-size: .3rem;
    line-height: .42rem;
  }
  .reserve-content-list {
    position: relative;
    overflow: hidden;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    box-sizing: border-box;
    top: 0;
    left: 0;
    border: 1px solid #e0e0e0;
  }
  .reserve-content-listitem {
    overflow: hidden;
    position: relative;
    color: #212121;
    background: #f5f5f5;
    font-size: .28rem;
    line-height: .4rem;
  }
  .reserve-listitem-title {
    position: absolute;
    top: 50%;
    padding: .2rem 0;
    width: 1.8rem;
    text-align: center;
    border-right: 1px solid #e0e0e0;
  }
  .reserve-listitem-desc {
    margin-left: 1.8rem;
    padding: .2rem;
    background: #fff;
    color: #616161;
  }
</style>