<template>
  <div>
	<div class="pagination">
		<span class="up">上一页</span>
		<span class="sum"><i>1 </i>/<i> 4</i></span>
		<span class="next">下一页</span>
	</div>
	<div class="parcel-tickets">
	    <a class="tickets" href="#">去哪儿门票</a>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.pagination {
		height: 1.1rem;
		line-height: 1.1rem;
		width: 100%;
		text-align: center;
	}
	.up {
		display: inline-block;
		text-align: center;
	  height: .6rem;
	  line-height: .6rem;
	  width: 1.4rem;
	  border-radius: .1rem;
	  background: #bdbdbd;
	  color: #fff;
	}
	.sum {
	  margin: 0 .1rem;
	}
	.next {
		display: inline-block;
		text-align: center;
	  height: .6rem;
	  line-height: .6rem;
	  width: 1.4rem;
	  border-radius: .1rem;
	  border: .02rem solid #00afc7;
	  color: #00afc7;
	  background: #fff;
	}
	.tickets {
		display: block;
		height: .52rem;
		text-align: center;
		color: #00afc7;
	}

</style>


