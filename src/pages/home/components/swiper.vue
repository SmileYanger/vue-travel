<template>
	<div class="wraper">
	 	<swiper :options="swiperOption">
		    <swiper-slide v-for="item in swiperList" :key="item.id" v-if="swiperList.length">
		    	<img class="swiper-img" :src="item.imgUrl"/>
		    </swiper-slide>
	        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
	 </div>
</template>

<script>

	export default {
    name:'HomeSwiper',
    props:{
    	swiperList:Array
    },
    data() {
      return {
        swiperOption: {
        	pagination:'.swiper-pagination',
        	loop:true        	
        }
      }
    }
  }
</script>


<style  lang="stylus" scoped="scoped">
.swiper-pagination >>> .swiper-pagination-bullet-active
	background:#fff
.wraper
	width:100%
	height:0
	overflow:hidden
	padding-bottom:31.25%
	background:#ccc
.swiper-img
	width:100% 
</style>