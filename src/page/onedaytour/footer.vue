<template>
    <div class="footer">
        <div class="footer-con"><i class="iconfont">&#xe697;</i><span>全部分类</span></div>
        <div class="footer-con"><i class="iconfont">&#xe661;</i><span>筛选</span></div>
        <div class="footer-con"><i class="iconfont">&#xe60f;</i><span>推荐排序</span></div>
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
.footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: .8rem;
    width: 100%;
    font-size: .24rem;
    color: #fff;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    bottom: 0;  
}
.footer-con {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>

