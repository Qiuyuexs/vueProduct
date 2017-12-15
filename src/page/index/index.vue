<template>
  <div>
    <header class="header">
    	<div class="back iconfont">&#xe624;</div>
    	<div class="search"></div>
    	<div class="city">城市</div>
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
    font-size: .12rem;
  }
  .back {
	width: .64rem;
	line-height: .86rem;
	text-align: center;
  }
  .search {
  	flex: 1;
  	margin: .14rem .18rem;
  	background: #fff;
  	border-radius: .1rem;
  }
  .city {
  	width: 1.14rem;
  	line-height: .86rem;
  	text-align: center;
  }
  .swiper-img-con {
  	width: 100%;
  }
  .swiper-img {
  	width: 100%;
  }
</style>
