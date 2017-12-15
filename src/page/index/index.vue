<template>
  <div>
    <header class="header">
    	<div class="back iconfont">&#xe624;</div>
    	<div class="search"><span class="search-ico iconfont">&#xe7e0;</span><span class="single-line">输入城市/景点/游玩主题</span></div>
    	<div class="city">城市<i class="downarrow iconfont">&#xe601;</i></div>
    </header>
    <swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    	  <div class="swiper-img-con">
    	    <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/d1/73dc10b5cd320202.jpg_640x200_02a40951.jpg">
    	  </div>
        
    	</swiper-slide>
    	<swiper-slide>
    	  <div class="swiper-img-con">
    	    <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/cd/5ff8869f365e7e02.jpg_640x200_097b1798.jpg">
    	  </div>
	  
    	</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        direction: 'horizontal'
      }
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    background: #05bad5;
    color: #fff;
  }
  .back {
	width: .64rem;
	line-height: .86rem;
	text-align: center;
     font-weight: 900;
  }
  .search {
  	flex: 1;
  	margin: .14rem .18rem;
  	background: #fff;
  	border-radius: .06rem;
  }
  .search-ico {
    color: #e3e7ea;
    margin-left: .2rem;
  }
  .single-line {
    color: #e3e7ea;
    line-height: .60rem;
    margin-left: .17rem;
  }
  .city {
  	width: 1.14rem;
  	line-height: .86rem;
  	text-align: center;
  }
  .downarrow {
    font-size: .36rem;
    line-height: .86rem;
  }
  .swiper-img-con {
  	width: 100%;
  }
  .swiper-img {
  	width: 100%;
  }
</style>
