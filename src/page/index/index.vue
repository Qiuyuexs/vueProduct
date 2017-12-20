<template>
  <div class="body-con">
    <header class="header">
    	<div class="back iconfont">&#xe624;</div>
    	<div class="search"><span class="search-ico iconfont">&#xe7e0;</span><span class="single-line">输入城市/景点/游玩主题</span></div>
    	<div class="city">城市<i class=" iconfont">&#xe601;</i></div>
    </header>
    <swiper :options="swiperOption">
    	<swiper-slide v-for="item in swiperInfo" :key="item.id">
    	  <div class="swiper-img-con">
    	    <img class="swiper-img" :src="item.imgUrl">
    	  </div>
    	</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper :options="iconsOption" style="height: 3.8rem ; background: #fff">
      <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <router-link :to="'/onedaytour/'+item.id">
                <div class="icon-content">
                  <img class="icon-img" :src="item.imgUrl">
                  <div class="icon-title">{{item.title}}</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" style="bottom: 0"></div>
    </swiper>

    <ul class="listitem-con">
      <li class="listentrance-item">
        <span class="iconfont">&#xe611;</span>
        定位失败
      </li>
      <li class="listentrance-item">
        <span class="iconfont">&#xe74d;</span>
        五折泡温泉
      </li>
    </ul>

    <ul class="activity-con">
      <li class="activity-item1">
        <a href="#"></a>
      </li>
      <li class="activity-item2">
        <a href="#"></a>
      </li>
    </ul>

    <div class="hot-sight">
      <h2 class="hot-title">热销推荐</h2>
      <div class="hot-con">
        <ul>
          <li class="hot-list" v-for="hotlist in hotlistInfo" :key="hotlist.id">
            <a href="javascript:;">
              <div class="hotlist-img">
                <img :src="hotlist.img">
              </div>
              <div class="hotlist-info">
                <div class="hotlist-title">{{hotlist.title}}</div>
                <div class="hotlist-desc">{{hotlist.desc}}</div>
              </div>
              <div class="hotlist-price">
                ￥
                <em>{{hotlist.price}}</em>
                <span>起</span>
              </div>
            </a>
            
          </li>
        </ul>
      </div>
      <div class="hot-more">
        <a href="javascript:;">查看所有产品</a>
      </div>
    </div>

    <div class="weekend-trip">
      <h2 class="weeked-title">周末去哪儿</h2>
      <div class="weekend-con">
        <ul>
          <li class="weekendlist" v-for="weekendlist in weekendInfo" :key="weekendlist.id">
            <a href="javascript:;">
              <div class="weekendlist-img">
                <img :src="weekendlist.img">
              </div>
              <div class="weekendlist-info">
                <p class="weekendlist-name">{{weekendlist.name}}</p>
                <p class="weekendlist-desc">{{weekendlist.desc}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="price-desc">
      <span class="iconfont"></span>
      <div class="price-desc-info">
        <span class="price-desc-imp">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>

    <div class="footer">
      <div class="footer-nav">
        <ul class="footer-main-nav">
          <li class="flight">
            <a href="#">
              <div class="icon"></div>
              <span class="title">机票</span>
            </a>
          </li>
          <li class="hotel">
            <a href="#">
              <div class="icon"></div>
              <span class="title">酒店</span>
            </a>
          </li>
          <li class="gongyu">
            <a href="#">
              <div class="icon"></div>
              <span class="title">公寓</span>
            </a>
          </li>
          <li class="more">
            <div class="iconfont jiantou">&#xe607;</div>
            <span>更多</span>
          </li>
        </ul>
      </div>

      <ul class="footer_nav clearfix">
        <li><a href="#">登录</a></li>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">最近浏览</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
      
      <ul class="moblie_pc">
        <li><a href="#">触屏版</a></li>
        <li><a href="#">电脑版</a></li>
      </ul>

      <div class="copyright">
        <span>Qunar 京ICP备05021087</span>
        <a href="#" class="idea">意见反馈</a>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [],
      iconInfo: [],
      hotlistInfo: [],
      weekendInfo: [],
      swiperOption: {
        autoplay: 5000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      },
      iconsOption: {
        direction: 'horizontal',
        pagination: '.swiper-pagination'
      }
    }
  },

  computed: {
    pages () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },

  methods: {
    getIndexData () {
      this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper) {
        this.swiperInfo = body.data.swiper
        this.iconInfo = body.data.icons
        this.hotlistInfo = body.data.hotlist
        this.weekendInfo = body.data.weekendtrip
      }
    }
  },
  created () {
    this.getIndexData()
  }

}
</script>

<style scoped>
  .body-con{
    background: #f5f5f5;
  }
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .swiper-img-con {
    overflow: hidden;
  	width: 100%;
    height: 0;
    padding-bottom: 31.25%;
  }
  .swiper-img {
  	width: 100%;
  }
  .icon-item {
    box-sizing: border-box;
    margin-top: .4rem;
    float: left;
    width: 25%;
    height: 1.4rem;
    background: #fff;
  }
  .icon-img-con {
    width: 100%;
  }
  .icon-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-img {
    width: .66rem;
    height: .66rem;
    padding-bottom: .2rem;
  }
  .listitem-con,.activity-con {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: .97rem;
    border-top: 1px solid #e0e0e0;
    text-align: center;
    line-height: .97rem;
    background: #fff;
  }
  .listentrance-item,.activity-item {
    float: left;
    width: 50%;
    height: 100%;
    border-right: 1px solid #e0e0e0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .listentrance-item:last-child, .activity-item:last-child {
    border-right:0;
  }
  .activity-con {
    margin-top: .2rem;
    height: 1.38rem;
  }
  .activity-item1 {
    width: 50%;
    background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
    background-size: auto 100%;
    border-right: 1px solid #e0e0e0;
  } 
  .activity-item2 {
    width: 50%;
    background: url(http://img1.qunarzz.com/piao/fusion/1711/8a/4c62d1a89fc2d602.png) center center no-repeat;
    background-size: auto 100%;
  }
  .hot-title {
    line-height: .8rem;
    padding-left: .27rem;
    font-size: .26rem;
  }
  .hot-list {
    height: 1.4rem;
    padding: .24rem;
    background: #fff;
    position: relative;
  }
  .hotlist-img {
    position: absolute;
  }
  .hotlist-img img {
    width: 1.4rem;
    height: 1.4rem;
  }
  .hotlist-info,.hotlist-price {
    width: 5.42rem;
    margin-left: 1.6rem;
    overflow: hidden;
  }
  .hotlist-title {
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #212121;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotlist-desc {
    overflow: hidden;
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotlist-price {
    color: #ff8300;
  }
  .hotlist-price em {
    font-size: .36rem;
    padding: 0 .04rem;
  }
  .hotlist-price span {
    color: #9e9e9e;
    font-size: .24rem;
  }
  .hot-more {
    height: .88rem;
    color: #00afc7;
    line-height: .88rem;
    text-align: center;
    background: #fff;
  }
  .weeked-title {
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  }
  .weekendlist {
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
  }
  .weekendlist-img {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.43%;
  }
  .weekendlist-img img {
    width: 100%;
  }
  .weekendlist-info {
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
  }
  .weekendlist-name {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .weekendlist-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price-desc {
    margin-top: .1rem;
    padding: .14rem .1rem;
    font-size: .24rem;
    line-height: .32rem;
    background: #fff;
    color: #616161;
  }
  .price-desc-info {
    margin-left: .3rem;
  }
  .price-desc-imp {
    font-weight: bold;
  }
  .footer {
    background: #f3f3f3;
  }
  .footer-main-nav {
    height: 25px;
    margin: 0 auto;
    padding: 10px 10px 0 10px;
    overflow: hidden;
  }
  .footer-main-nav li {
    margin: 0px;
    padding-left: 10px;
    height: 31px;
    width: 65px;
    float: left;
    position: relative;
    background: none;
  }
  .footer-main-nav li .icon {
    float: left;
    width: 22px;
    height: 22px;
    background: url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat;
    background-size: 175px 50px;
  }
  .footer-main-nav li .title {
    float: left;
    display: inline-block;
    color: #9e9e9e;
    margin: 3px 0 0 5px;
    border-bottom: 1px solid #acacac;
    font-size: 12px;
  }
  .footer-main-nav .hotel .icon {
    background-position: -25px 0px;
  }
  .footer-main-nav .gongyu .icon {
    background-position: -150px 0px;
  }
  .footer-main-nav .more {
    position: relative;
    top: -4px;
    right: 6px;
    background: #f3f3f3;
    font-size: 14px;
    color: #9e9e9e;
    width: 70px;
  }
  .footer-main-nav .more span {
    display: inline-block;
    border-left: 1px solid #acacac;
    padding-left: 30px;
    margin-top: 5px;
    font-size: 14px;
    color: #9e9e9e;
  }
  .footer-main-nav .more .jiantou {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
  .footer_nav {
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #cacaca;
  }
  .footer_nav li {
    float: left;
    padding-left: 20px;
  }
  .footer_nav li a {
    position: relative;
    color: #25a4bb;
    font-size: 14px;
    line-height: 39px;
  }
  .moblie_pc {
    padding: 10px 0 0 0;
    text-align: center;
  }
  .moblie_pc li {
    display: inline-block;
    margin: 0 15px;
  }
  .copyright {
    color: #9e9e9e;
    text-align: center;
    font-size: 14px;
    padding: 10px;
  }
  .copyright .idea {
    color: #9e9e9e;
    height: 33px;
  }
</style>
