<template>
  <div>
    <h3 class="reserve-router-headertext">行程安排</h3>
    <div class="reserve-router">
      <div class="reserve-router-content">
        <div class="reserve-router-item">
          <span class="reserve-router-data">07:30</span>
          <div class="reserve-router-details">
            <span class="reserve-router-location iconfont">&#xe60e;</span>
            <a class="reserve-router-link" href="#">
              <span class="reserve-router-headerline">集合地点</span>
            </a>
            <p class="reserve-router-right">北京市东城区天安门广场(人民英雄纪念碑北侧)</p>
            <span class="reserve-router-left"></span>
          </div>
        </div>
        <div class="reserve-router-item">
          <span class="reserve-router-data">07:31</span>
          <div class="reserve-router-details">
            <span class="reserve-router-location iconfont">&#xe61c;</span>
            <h5 class="reserve-router-headertitle">基础版【天门门广场+故宫讲解】</h5>
            <p class="reserve-router-right">【游览路线】
天安门广场---故宫（午门--太和门--太和殿--中和殿--保和殿--珍宝馆--景仁宫--交泰殿--坤宁宫--御花园）---解散 ***游览时间约180分钟
（或继续参加升级版行程A/B/C）
</p>
            <span class="reserve-router-left"></span>
          </div>
        </div>
        <div class="reserve-router-item">
          <span class="reserve-router-data">11:30</span>
          <div class="reserve-router-details">
            <span class="reserve-router-location iconfont">&#xe68a;</span>
            <h5 class="reserve-router-headertitle">午餐自理</h5>
            <span class="reserve-router-left"></span>
          </div>
        </div>
        <div class="reserve-router-item">
          <span class="reserve-router-data">12:30</span>
          <div class="reserve-router-details">
            <span class="reserve-router-location iconfont">&#xe61c;</span>
            <h5 class="reserve-router-headertitle">升级A【故宫+八达岭】</h5>
            <p class="reserve-router-right">【游览路线】
天安门广场---故宫（赠珍宝馆）---八达岭---鸟巢水立方---解散***游览时间总约为300分钟
（或自由活动/可自行散团；八达岭长城往返缆车如需体验自理140元/人，八达岭长城往返滑如需体验自理100元/人）
</p>
            <span class="reserve-router-left"></span>
          </div>
        </div>
        <div class="reserve-router-item">
          <span class="reserve-router-data">12:30</span>
          <div class="reserve-router-details">
            <span class="reserve-router-location iconfont">&#xe61c;</span>
            <h5 class="reserve-router-headertitle">升级B【故宫+颐和园】</h5>
            <p class="reserve-router-right">【游览路线】
天安门广场---故宫---颐和园---鸟巢水立方---解散***游览时间总约为300分钟（或自由活动/可自行散；颐和园内慈禧水道如需体验自理120元/人）
</p>
            <span class="reserve-router-left"></span>
          </div>
        </div>
        <div class="reserve-router-item">
          <span class="reserve-router-data">12:30</span>
          <div class="reserve-router-details">
            <span class="reserve-router-location iconfont">&#xe61c;</span>
            <h5 class="reserve-router-headertitle">升级C【故宫+恭王府】</h5>
            <p class="reserve-router-right">【游览路线】
天安门广场---故宫---途径北海---恭王府---解散***游览时间总约为300分钟（或自由活动/可自行散团；黄包车为北京骑行文化，如需体验费用自理）
</p>
            <span class="reserve-router-left"></span>
          </div>
        </div>
      </div>
    </div>
    
    <a href="#">
      <div class="reserve-particulars">
        <div class="reserve-particulars-content">
          <span class="reserve-particulars-border"></span>
          查看详细产品介绍
          <span class="reserve-particulars-right iconfont">&#xe625;</span>
        </div>
      </div>
    </a>
    
    <div class="reserve-map">
      <div class="reserve-map-content">
        <img src="http://img1.qunarzz.com/p/tts7/1711/34/fb0d96a7e8b8ca02.jpg_640x360_c68e63ad.jpg">
      </div>
      <div class="reserve-map-mask"></div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style type="text/css">
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
</style>