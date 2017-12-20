<template>
	<div class="order-page">
		<header class="order-header">
			<a href="#" class="order-back iconfont">&#xe624;</a>
			<h2 class="order-title">订单填写</h2>
			<a href="#" class="order-login">登录</a>
		</header>

		<div class="order-main">
			<div class="order-info">
				<div class="info-left">
					<h2 class="info-title">
						天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解
					</h2>
					<ul class="info-taglist">
						<li class="info-tagitem">
							<img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">
							2017-12-19
						</li>
						<li class="info-tagitem">
							<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
							条件退
						</li>
					</ul>
					<ul class="info-taglist">
						<li class="info-tagitem">
							<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
							成人
						</li>
						<li class="info-tagitem">
							<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
							不含餐
						</li>
						<li class="info-tagitem">
							<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
							中文
						</li>
						<li class="info-tagitem">
							<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">
							【升级A】故宫 八达岭
						</li>
					</ul>
					<ul class="info-taglist">
						<li class="info-tagitem">
							<img src="//img1.qunarzz.com/piao/fusion/1703/dc/b515f102c483d002.png">
							已过最晚退款时间
						</li>
					</ul>
				</div>
				<div class="info-right">
					<div class="info-price">
						<span class="price">
							&yen;<em>148</em>
						</span>
						
						<span>起</span>/张
					</div>
					<div class="info-note">预订须知</div>
				</div>
			</div>
		</div>
		<div class="group">
			<div class="date-of-play border-bottom">
				<label class="filed">游玩日期</label>
				<div class="select-date-area">
					<span class="datecard">
						<em class="date-name">今天</em>
						<i class="date-detail">12月18日</i>
					</span>
					<span class="datecard">
						<em class="date-name">明天</em>
						<i class="date-detail">12月19日</i>
					</span>
					<span class="datecard focused">
						<em class="date-name selected">其他日期</em>
						<i class="date-detail"></i>
					</span>
				</div>
			</div>

			<div class="buy-num">
				<label class="filed">购买数量</label>
				<span class="care-info">
					每个手机号限购30张<br>
					每个身份证限购1张
				</span>
				<div>
					<div class="input-num">
						<span class="num-reduce">
							<span class="reduce-row"></span>
						</span>
						<input type="text" name="" class="num-input" value="1">
						<span class="num-add">
							<span class="add-row">
								<span class="add-col"></span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="traveller-info">
			<div>
				<div class="group">
					<div class="row-data border-bottom">
						<label class="row-name">游客1</label>
						<div class="row-value">
							<label class="textinput-note note-error note-default">游客姓名</label>
							<input type="text" name="name" placeholder="游客姓名" class="textinput">
						</div>
					</div>
					<div class="row-data border-bottom">
						<label class="row-name">拼音</label>
						<div class="row-value">
							<label class="textinput-note note-default">拼音（姓名拼音）</label>
							<input type="text" name="name" placeholder="拼音（姓名拼音）" class="textinput">
						</div>
					</div>
					<div class="row-data border-bottom">
						<label class="row-name">手机号</label>
						<div class="row-value">
							<div>
								<span class="field-menu">86</span>
							</div>
							<label class="textinput-note note-default">请填写手机号</label>
							<input type="text" name="name" placeholder="请填写手机号" class="textinput">
						</div>
					</div>
					<div class="row-data border-bottom">
						<label class="row-name">
							<span class="name-field">身份证</span>
						</label>
						<div class="row-value">
							<label class="textinput-note note-default">请填写正确的身份证号码</label>
							<input type="text" name="name" placeholder="请填写正确的身份证号码" class="textinput">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="note-outer">
			<p class="note-inner">
				<a href="#" class="note-side">咨询电话</a>
			</p>
		</div>
		<div class="control-outer border-topbottom">
			<div class="product-price">
				<em>产品价格</em>
				<strong>&yen;<em class="price-num">148</em></strong>
			</div>
			<a href="javascript:;" class="submit-order">提交订单</a>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.order-page {
		width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    padding-bottom: 1.4rem;
	}
	.order-header {
		display: flex;
		width: 100%;
    height: .88rem;
    color: #fff;
    background: #00bcd4;
	}
	.order-back {
		text-align: center;
    line-height: .88rem;
		width: .8rem;
    height: .88rem;
    font-size: .36rem;
    color: #fff;
    font-weight: bold;
	}
	.order-title {
		flex: 1;
		text-align: center;
		line-height: .88rem;
		font-size: .32rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.order-login {
		text-align: center;
		line-height: .88rem;
		text-align: center;
		width: 1rem;
    font-size: .28rem;
    color: #fff;
	}
	.order-main {
		overflow: hidden;
		width: 100%;
	}
	.order-info {
		position: relative;
    overflow: hidden;
    min-height: 1.1rem;
    padding: .2rem .2rem .1rem .2rem;
    background: #fff;
	}
	.info-left {
		margin-right: 1.9rem;
    float: left;
	}
	.info-title {
		color: #212121;
    font-size: .32rem;
    line-height: .44rem;
    margin-bottom: .04rem;
	}
	.info-taglist {
		margin-left: -.2rem;
    overflow: hidden;
	}
	.info-tagitem {
		float: left;
    line-height: .44rem;
    margin-left: .2rem;
    color: #616161;
    font-size: .24rem;
	}
	.info-tagitem img {
		position: relative;
    top: .08rem;
    width: .24rem;
    height: .24rem;
    margin-right: .01rem;
    vertical-align: top;
	}
	.info-right {
		position: absolute;
    right: .2rem;
    top: .2rem;
    width: 1.8rem;
    text-align: right;
	}
	.info-price {
		height: .44rem;
    line-height: .44rem;
    color: #9e9e9e;
    font-size: .24rem;
	}
	.price {
		color: #ff8300;
		font: .28rem;
	}
	.price em {
		margin-left: .04rem;
    font-size: .4rem;
	}
	.info-note {
	  margin-top: .12rem;
    line-height: .32rem;
    color: #00bcd4;
    font-size: .28rem;
	}
	.group {
		margin: .2rem 0;
		position: relative;
	}
	.date-of-play {
		overflow: hidden;
    min-height: .5rem;
    padding: .24rem;
    position: relative;
    background: #fff;
	}
	.filed {
		position: relative;
		top: .12rem;
		float: left;
    width: 1.6rem;
    color: #616161;
    font-size: .3rem;
    line-height: .5rem;
	}
	.select-date-area {
    overflow: hidden;
    height: .86rem;
    margin-left: 1.7rem;
    line-height: .5rem;
	}
	.datecard {
		overflow: hidden;
    float: left;
    width: 28.5%;
    min-width: 1.2rem;
    min-height: .82rem;
    margin-left: 4.6%;
    display: inline-block;
    background: #fff;
    border: .02rem solid #ececec;
    border-radius: .1rem;
    text-align: center;
	}
	.datecard:first-child {
		margin-left: 0;
	}
	.focused {
		border-color: #bdbdbd;
	}
	.date-name {
		padding-top: .08rem;
    display: block;
    color: #dedede;
    font-size: .28rem;
    line-height: .36rem;
	}
	.selected {
		line-height: .6rem;
		color: #212121;
	}
	.date-detail {
		padding-bottom: .06rem;
		width: 100%;
		display: block;
    color: #dedede;
    font-size: .24rem;
    line-height: .32rem;
	}
	.buy-num {
		padding: .3rem .2rem .3rem .2rem;
		overflow: hidden;
    min-height: .5rem;
    position: relative;
    background: #fff;
	}
	.care-info {
		position: absolute;
    top: 28%;
    left: 1.6rem;
    margin-right: 2.1rem;
    line-height: 1;
    color: #ccc;
    font-size: .28rem;
	}
	.input-num {
		float: right;
    display: inline-block;
    position: relative;
    border: .02rem solid #c7ced4;
	}
	.num-reduce {
		float: left;
		background: #f0f0f0;
		border-right: 0;
		position: relative;
    display: inline-block;
    width: .56rem;
    height: .56rem;
    margin: .02rem;
	}
	.reduce-row {
		position: absolute;
    top: .26rem;
    left: .12rem;
    width: .3rem;
    height: .06rem;
		background-color: #cad1d7;
	}
	.num-input {
		float: left;
		width: .6rem;
    height: .6rem;
    padding: 0 .06rem;
    border: 0 none;
    font: normal .28rem/.6rem arial;
    text-align: center;
    vertical-align: top;
    outline: 0 none;
	}
	.num-add {
		float: left;
		position: relative;
    display: inline-block;
    width: .56rem;
    height: .56rem;
    margin: .02rem;
    background-color: #00afc7;
    border-left: 0;
	}
	.add-row {
		top: .26rem;
    left: .12rem;
    width: .3rem;
    height: .06rem;
    position: absolute;
    background-color: #fff;
	}
	.add-col {
		top: -.1rem;
    left: .12rem;
    width: .06rem;
    height: .28rem;
    position: absolute;
    background-color: #fff;
	}
	.row-data {
		overflow: hidden;
    min-height: .5rem;
    padding: .24rem;
    position: relative;
    background: #fff;
	}
	.row-name {
		float: left;
    width: 1.6rem;
    color: #616161;
    font-size: .3rem;
    line-height: .5rem;
	}
	.note-error {
		color: red;
	}
	.row-value {
		margin-left: 1.7rem;
    line-height: .5rem;
    position: relative;
    font-size: .28rem;
	}
	.textinput-note {
		display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
	}
	.note-default {
		display: none;
    top: 1px;
    left: 0px;
	}
	.textinput {
		width: 100%;
    height: .38rem;
    padding: .06rem 0;
    border: 0;
    font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    color: #212121;
    background: 0;
    -webkit-appearance: none;
    outline: none;
    vertical-align: middle;
	}
	.field-menu {
		right: 100%;
    min-width: .4rem;
    max-width: 1rem;
    margin-right: .1rem;
    padding: 0 .24rem 0 .06rem;
    text-align: right;
    text-indent: 0;
    overflow: hidden;
    position: absolute;
    border: .02rem solid #ccc;
    color: #888;
    font-size: .28rem;
    line-height: .5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
	}
	.name-field {
		top: .2rem;
    left: .1rem;
		overflow: hidden;
    position: absolute;
    min-width: .24rem;
    max-width: 1.4rem;
    padding-right: .3rem;
    border: .02rem solid #ccc;
    color: #888;
    font-size: .28rem;
    line-height: .5rem;
    text-indent: .1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
	}
	.note-outer {
		margin: .2rem .2rem 0 .2rem;
    color: #616161;
    font-size: .24rem;
    line-height: .4rem;
	}
	.note-inner {
		min-height: .4rem;
	}
	.note-side {
		float: right;
	}
	.control-outer {
		position: fixed;
    z-index: 92;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background: #fff;
	}
	.border-topbottom {
		border-color: #c9cccd;
	}
	.product-price {
		position: relative;
    float: left;
    font-size: .24rem;
    line-height: 1rem;
    text-indent: .2rem;
    width: 50%;
    color: #ff8300;
	}
	.price-num {
		font-size: .48rem;
	}
	.submit-order {
		float: right;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    text-align: center;
    width: 50%;
	}
</style>