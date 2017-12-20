<template>
  <div class="bodys">
    <div class="mu-head" v-for="item in muInfo">
      <div class="mu-head-wrap">
        <img class="mu-pic-pic" :src="item.imgUrl"/>
      </div>
      <div class="mu-pic-info">
        <div class="mu-pic-title">{{item.title}}</div>
        <div class="mu-icon">
          <span class="mu-icon-pic iconfont">&#xe614;</span>
          <em class="mu-icon-num">10</em>
        </div>
      </div>
    </div>
    <div class="mu-info">
      <div class="mu-info-address">
        <p class="mu-info-addText">
          <span class="mp-info-icon iconfont">&#xe611;</span>
          北京市东城区景山前街4号
          <span class="mp-info-icons iconfont">&#xe616;</span>
        </p>
      </div>
      <router-link to="index.vue" class="mu-info-intro" style="border-top:1px solid #f0f0ef">
        <p class="mu-info-addText">
          <span class="mp-info-icon iconfont">&#xe617;</span>
          查看景点简介及开放时间
          <span class="mp-info-icons iconfont">&#xe616;</span>
        </p>
      </router-link>
    </div>
    <div class="mu-five">
      <span class="mu-commentist-icon"></span>
      <span class="mu-commentist-icons">
        <i class="mu-starlevel-orange iconfont mp-iconfont">&#xe60c;</i>
        <i class="mu-starlevel-gray iconfont mp-iconfont">&#xe602;</i>
      </span>
      <span class="mu-comment-cons"></span>
      <router-link class="mu-commen-link" to="index.vue">
        <span class="mu-commen-total">170446评论
          <span class="mu-commen-right iconfont mp-iconfont">&#xe616;</span>
        </span>
      </router-link>
    </div>
    <div class="mu-announce-con">
      <div class="mu-announce-inner">
        <span class="mu-announce-icon mp-iconfont iconfont">&#xe62a;</span>
        除法定节假日，故宫博物院实行周一闭馆。
        <span class="mu-announce-close mp-iconfont iconfont">&#xe616;</span>
      </div>
    </div>

    <div class="list-container">
      <div class="mu-ticket">
        <div class="mu-prompt">
          <h3 class="mu-prompt-con mp-iconfont iconfont border-bottom">&#xe604;去哪儿推荐</h3>
          <div class="recommend-list" v-for="item in whereInfo" :key="item.id">
            <div class="recommend-list-left">
              <p>{{item.title}}</p>
              <div class="recommend-little">
              <span><em class="iconfont mp-iconfont">&#xe60b;</em>{{item.time}}</span>
              <span><em class="iconfont mp-iconfont">&#xe60b;</em>无购物</span>
              <span><em class="iconfont mp-iconfont">&#xe60b;</em>无自费</span>
            </div>
            </div>
            <div class="recommend-list-right">
              <div class="price">
                <span class="money">&yen;</span>
                <span class="num">{{item.price}}</span>
                <span class="qi">起</span>
              </div>
              <router-link to="/reserve.vue" class="examine">查看</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
<div class="adult-ticket-group">
      <h1 class="adult-ticket iconfont">&#xe60a;故宫成人票</h1>
      <div>
        <div class="adult-ticket-am"">
          <p class="adult-ticket-am-left">上午场<em>凭身份证入园</em></p>
          <p class="adult-ticket-am-right"><span>&yen;</span><span>40</span><span class="iconfont">&#xe607;</span></p>
        </div>
          <div class="adult-ticket-list">
      <div class="adult-ticket-list-left">
        <h2>旅游啦</h2>
        <p>【上午场】故宫成人票凭身份证入园</p>
        <p>
          <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
          <span><em class="iconfont">&#xe607;</em>条件退</span>
        </p>
      </div>
      <div class="adult-ticket-list-right">
        <p>&yen;<span class="adult-ticket-price">40</span></p>
        <p class="adult-ticket-list-right-reserve">预定</p>
      </div>
      </div>
      <div class="adult-ticket-list">
        <div class="adult-ticket-list-left">
          <h2>旅游啦</h2>
          <p>【上午场】故宫成人票凭身份证入园</p>
          <p>
            <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
            <span><em class="iconfont">&#xe607;</em>条件退</span>
          </p>
        </div>
        <div class="adult-ticket-list-right">
          <p>&yen;<span class="adult-ticket-price">40</span></p>
          <p class="adult-ticket-list-right-reserve">预定</p>
        </div>
      </div>
      <div class="adult-ticket-list">
        <div class="adult-ticket-list-left">
            <h2>旅游啦</h2>
            <p>【上午场】故宫成人票凭身份证入园</p>
            <p>
              <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
              <span><em class="iconfont">&#xe607;</em>条件退</span>
            </p>
          </div>
          <div class="adult-ticket-list-right">
            <p>&yen;<span class="adult-ticket-price">40</span></p>
            <p class="adult-ticket-list-right-reserve">预定</p>
          </div>
        </div>
      </div>

      <div>
        <div class="adult-ticket-am">
          <p class="adult-ticket-am-left">下午场<em>凭身份证入园</em></p>
          <p class="adult-ticket-am-right"><span>&yen;</span><span>40</span><span class="iconfont">&#xe607;</span></p>
        </div>
          <div class="adult-ticket-list">
      <div class="adult-ticket-list-left">
        <h2>旅游啦</h2>
        <p>【上午场】故宫成人票凭身份证入园</p>
        <p>
          <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
          <span><em class="iconfont">&#xe607;</em>条件退</span>
        </p>
      </div>
      <div class="adult-ticket-list-right">
        <p>&yen;<span class="adult-ticket-price">40</span></p>
        <p class="adult-ticket-list-right-reserve">预定</p>
      </div>
      </div>
      <div class="adult-ticket-list">
        <div class="adult-ticket-list-left">
          <h2>旅游啦</h2>
          <p>【上午场】故宫成人票凭身份证入园</p>
          <p>
            <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
            <span><em class="iconfont">&#xe607;</em>条件退</span>
          </p>
        </div>
        <div class="adult-ticket-list-right">
          <p>&yen;<span class="adult-ticket-price">40</span></p>
          <p class="adult-ticket-list-right-reserve">预定</p>
        </div>
      </div>
      <div class="adult-ticket-list">
        <div class="adult-ticket-list-left">
            <h2>旅游啦</h2>
            <p>【上午场】故宫成人票凭身份证入园</p>
            <p>
              <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
              <span><em class="iconfont">&#xe607;</em>条件退</span>
            </p>
          </div>
          <div class="adult-ticket-list-right">
            <p>&yen;<span class="adult-ticket-price">40</span></p>
            <p class="adult-ticket-list-right-reserve">预定</p>
          </div>
        </div>
      </div>
      <div>
        <div class="surplus iconfont">查看剩余产品&#xe607;</div>
        <div class="adult-ticket-list">
          <div class="adult-ticket-list-left">
              <h2>旅游啦</h2>
              <p>【上午场】故宫成人票凭身份证入园</p>
              <p>
                <span><em class="iconfont">&#xe60a;</em>15:30前可定今日</span>
                <span><em class="iconfont">&#xe607;</em>条件退</span>
              </p>
            </div>
            <div class="adult-ticket-list-right">
              <p>&yen;<span class="adult-ticket-price">40</span></p>
              <p class="adult-ticket-list-right-reserve">预定</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  export default {
    name: 'Museum',
    data () {
      return {
        muInfo: [],
        whereInfo: []
      }
    },

    methods: {
      getIndexData () {
        this.$http.get('/static/museum.json')
        .then(this.handelGetDataSucc.bind(this))
      },

      handelGetDataSucc (res) {
        const body = res.body
        console.log()
        if (body && body.data && body.data.museums) {
          this.muInfo = body.data.museums
          this.whereInfo = body.data.where
        }
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>


<style scoped>
.bodys{
  background: #f5f5f5;
}
.mu-head {
  position: relative;
}
.mu-head-wrap {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 55%;
}
.mu-pic-pic {
  width: 100%;
  vertical-align: top;
}
.mu-pic-info {
  position: absolute;
  right: .2rem;
  bottom: .26rem;
  left: .2rem;
}
.mu-pic-title {
  font-size: .32rem;
  position: relative;
  z-index: 1;
  margin-right: 1.4rem;
  line-height: .32rem;
  color: #fff;
}
.mu-icon {
  position: absolute;
  right: 0;
  top:0;
  width: 1.2rem;
  height: .4rem;
  border-radius: .2rem;
  font-size: .24rem;
  line-height: .4rem;
  text-align: center;
  color: #fff;
  background: rgba(0,0,0,.5);
}
.mu-icon-pic {
  position: relative;
  top: .02rem;
}
.mu-icon-num {

}
.mu-head::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: .6rem;
  background-color: transparent;
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
}
.mu-info {
  position: relative;
  top: -.1rem;
  padding: .1rem .2rem 0 .2rem;
  margin-bottom: .1rem;
  background: #fff;
  border-radius: .1rem .1rem 0 0;
}
.mu-info-address, .mu-info-intro {
  display: block;
  position: relative;
  height: .88rem;
  color: #212121;
  line-height: .88rem;
}

.mu-info-addText {
  overflow: hidden;
  padding-right: .56rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mp-info-icon {
  margin-right: .2rem;
  color: #9e9e9e;
}
.mp-info-icons {
  position: absolute;
  right: 0;
  top: .28rem;
  color: #b9b9b9;
}
.mu-five{
  margin-bottom: .2rem;
  background-color:#fff;
  height: .8rem;
  line-height: .8rem;
}
.mu-commentist-icon {
  position: relative;
  top: .08rem;
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png)0 -1.35rem no-repeat;
  margin-left: .2rem;
  margin-right: .1rem;
  background-size: .4rem 3rem;
}
.mu-commentist-icons {
  top: .04rem;
  display: inline-block;
  position: relative;
  width: 1.4rem;
  height: .28rem;
}
.mu-starlevel-orange {
  z-index: 2;
  color: #ffb436;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.mp-iconfont {
  font-family: 'mpiconfont';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}
.mu-starlevel-gray {
  z-index: 1;
  color: #e0e0e0;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;  
}
.mu-comment-cons {
  display: inline-block;
  margin-left: .1rem;
  color: #ff8300;
}
.mu-commen-link {
  float: right;
  display: block;
  margin-bottom: .2rem;
}
.mu-commen-total {
  display: inline-block;
  line-height: .28rem;
  font-size: .28rem;
  margin-left: .16rem;
  margin-right: .2rem;
  color: #9e9e9e;
}
.mu-commen-right {
  position: relative;
  top: .02rem;
}
.mu-announce-con {
  background-color: #fdeede;
  color: #f1441a;
  margin-bottom: .2rem;
  height: .88rem;
  line-height: .88rem;
  padding-left: .23rem;
}
.mu-announce-inner {
  padding-right: .6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}
.mu-announce-icon {
  color: #f67353;
  margin-right: .1rem;
}
.mu-announce-close {
  right: .2rem;
  position: absolute;
  top:.3rem;
  color: #c7bcaf;
}
.list-container {

}
.mu-ticket {
  position: relative;
}
.mu-prompt {
  position: relative;
  background: #fff;
  margin-bottom: .2rem;
}
.mu-prompt-con {
  background-size: .5rem .5rem;
  background-position: .2rem center;
  overflow: hidden;
  position: relative;
  z-index: 4;
  margin-bottom: -.02rem;
  padding: 0 .2rem;
  height: .88rem;
  color: #333;
  font-size: .32rem;
  line-height: .88rem;
}
  .recommend-list {
    box-sizing: border-box;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }
  .recommend-list-left {
    width: 5.16rem;
    line-height: .52rem;
  }
  .recommend-list-right {
    width: 1.8rem;
    height: 1.56rem;
    border-left: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .price {
    display: flex;
    justify-content: center;
    align-items: bottom;
  }
  .money {
    color: #ff9800;
    vertical-align: bottom;
  }
  .num {
    color: #ff9800;
    font-size: .36rem;
    vertical-align: bottom;
  }
  .qi {
    vertical-align: bottom;
  }
  .examine {
    width: 1.6rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    background: #ff9800;
    color: #fff;
    right: 0;
    bottom: 0;
  }
 .text-spill {
    height: 1.04rem;
    text-align: center; 
    text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; 
  }
  .adult-ticket-group {
    box-sizing: border-box;
    padding: 0 .2rem;
    background: #fff;
  }
  .adult-ticket {
    font-size: .32rem;
    height: .88rem;
    line-height: .88rem;
    background-size: .5rem;
    box-sizing: border-box;
    padding-left: .55rem;
    margin-bottom: 1px;
  }
  .adult-ticket-am {
    box-sizing: border-box;
    padding: 0 .2rem;
    display: flex;
    height: .96rem;
    align-items: center;
    justify-content: space-between;
  }
  .adult-ticket-am-left{
    height: .96rem;
    line-height: .96rem;
    font-size: .3rem;
  }
  .adult-ticket-am-left em {
    font-size: .24rem;
    color: #888;
    line-height: .32rem;
    margin: .1rem 0 .14rem .1rem;
    margin-right: 1.84rem;
  }
  .adult-ticket-list {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: .2rem;
    height: 1.64rem;
  }
  .adult-ticket-list-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 3;
  }
  .adult-ticket-list-left h2 {
    font-size: .29rem;
  }
  .adult-ticket-list-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: .2rem;
    box-sizing: border-box;
  }
  .adult-ticket-list-right-reserve {
    width: 100%;
    height: .6rem;
    background: #ff9800;
    text-align: center;
    line-height: .6rem;
    color: #fff;
  }
  .adult-ticket-price {
    font-size: .32rem;
    color: #ff9800;
  }
  .surplus {
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    font-size: .35rem;
    background: #fff;
  }   
</style>