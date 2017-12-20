<template>
  <div class="body-con">
    <header class="header">
    	<div class="back iconfont">&#xe624;</div>
    	<div class="search">
            <span class="single-line">一日游</span>
        </div>
        <div class="search-btn">搜索</div>
    </header>
    <!-- 横向列表 -->
    <div class="odt-cros-list">
        <ul class="odt-cros-list-con">
            <li v-for="item in crosList" :key="item.id">{{item.scenic}}</li>
        </ul>
        <p class="odt-select-detail iconfont" @click="getScenicData">&#xe615;</p>
        <!-- 下拉选项 -->
        <div class="odt-select-detail-con">
          <div class="scenic-detail-top">
            <p>游玩景点<span>(可多选)</span></p>
            <p class="iconfont">&#xe61a;</p>
          </div>
          <div class="scenic-detail-item">
            <ul class="scenic-detail-item-con">
              <li v-for="item in crosList" :key="item.id">{{item.scenic}}</li>
            </ul>
          </div>
        </div>
    </div>
    <!-- 内容区 -->
    <div class="odt-content">
        <ul class="odt-content-list">
            <li v-for="conItem in contentList" :key="conItem.id">
                <dl class="odt-content-list-item">
                    <dt><img class="item-img" src="" alt=""></dt>
                    <dd class="border-bottom">
                        <h2 class="item-title">{{conItem.title}}</h2>
                        <p class="item-activity">
                            <span class="item-starting">北京出发</span>
                            <span> | 无自费 | 无购物</span>
                        </p>
                        <p class="item-price">
                            <i >&yen;</i><i class="item-price-number">{{conItem.price}}</i><i>起</i>
                        </p>
                        <p class="item-slod">已售{{conItem.slod}}</p>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
    <!-- 分页 -->
    <one-page></one-page>
    <one-footer></one-footer>
  </div>
</template>

<script>

import OnePage from './page'
import OneFooter from './footer'

export default {
  name: 'Onedaytour',
  data () {
    return {
      crosList: [],
      contentList: []
    }
  },
  components: {
    OnePage,
    OneFooter
  },
  methods: {
    getCrosListData () {
      this.$http.get('/static/onedaytour.json').then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.croslist) {
        this.crosList = body.data.croslist
        this.contentList = body.data.contentlist
      }
    },

    getScenicData () {
      console.log('hhhhhhhh')
    }
  },

  created () {
    this.getCrosListData()
  }
}
</script>

<style scoped>
  .body-con{
    background: #f5f5f5;
  }
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #05bad5;
    color: #fff;
  }
  .back {
    box-sizing: border-box;
    width: .6rem;
    height: .88rem;
    font-size: .16rem;
    text-align: center;
    padding: .3rem .2rem;
  }
  .search{
    flex: 1;
  }
  .single-line{
    display: block;
    height: .6rem;
    line-height: .6rem;
    color: black;
    padding-left: .2rem;
    background: #fff;
    border-radius: .06rem;
  }
  .search-btn {
    box-sizing: border-box;
    width: 1.2rem;
    line-height: .86rem;
    text-align: left;
    padding: 0 .2rem;
  }
  .odt-cros-list{
    overflow: hidden;
    height: .84rem;
    position: relative;
  }
  .odt-cros-list-con{
    box-sizing: border-box;
    height: 1.14rem;
    overflow-x:auto;
    overflow-y:hidden;
    white-space:nowrap;
    background: #e5e6e8;
    padding:.1rem 0 .12rem 0;
  }
  .odt-cros-list-con li{
    display:inline-block;
    height: .56rem;
    line-height: .56rem;
    padding: 0 .2rem;
    background: #fff;
    border-radius: .06rem;
    margin: 0 .08rem;
  }
  .odt-content{
    background: #fff;
  }
  .odt-content-list-item{
    display: flex;
    flex-direction: row;
    padding: .08rem .08rem 0;
  }
  .odt-content-list-item dt,dd{
    padding: .08rem .08rem .16rem;
    position: relative;
  }
  .odt-content-list-item dt{
    display: block;
    height: 1.6rem;
    width: 1.6rem;
    background: url(51538.jpg) no-repeat center;
    background-size: 100%;
  }
  .odt-content-list-item dd{
    border-bottom:1px solid  #ccc;
  }
  .odt-content-list-item .item-img{
    height: 1.6rem;
    width: 1.6rem;
  }
  .odt-content-list-item .item-title{
    height: .68rem;
    font-size: .3rem;
    line-height: .34rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .odt-content-list-item .item-activity{
    height: .44rem;
    line-height: .44rem;
    font-size: .22rem;
    color: #636363;
  }
  .item-activity .item-starting{
    color: #05bad5;
  }
  .odt-content-list-item .item-price{
    color: #ff7c02;
    text-align: right;
    position: absolute;
    right: .2rem;
    bottom: .48rem;
  }
  .item-price i:first-child{
    font-size: .18rem;
  }
  .item-price .item-price-number{
    font-size: .3rem;
    font-weight: 600;
  }
  .item-price i:nth-child(3){
    font-size: .24rem;
    color: #898989;
  }
  .item-slod{
    color: #909090;
    font-size: .22rem;
    margin-top: .2rem
  }
  .odt-select-detail{
    width: .8rem;    
    height: .84rem;
    line-height: .84rem;
    background: #e5e6e8;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
  }
  .odt-select-detail-con{
    background: #e5e6e8;
    display: none;
  }
  .scenic-detail-top{
    height: .8rem;
    line-height: .8rem;
    background: #e5e6e8;
    font-size: .24rem;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    position: relative;
    padding: 0 .2rem;
  }
  .scenic-detail-top p:first-child span{
    font-size: .2rem;
  }
  .scenic-detail-top p{
    float: left;
  }
  .scenic-detail-top .iconfont{
    width: .8rem;    
    height: .8rem;
    line-height: .84rem;
    background: #e5e6e8;
    border-left: 1px solid #ccc;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
  }
  .scenic-detail-item-con{
    height: 3rem;
    overflow: auto;
    padding:.2rem;
  }
  .scenic-detail-item-con li{
    float: left;
    height: .56rem;
    line-height: .56rem;
    padding: 0 .2rem;
    background: #fff;
    border-radius: .06rem;
    margin: .08rem;
  }
</style>

