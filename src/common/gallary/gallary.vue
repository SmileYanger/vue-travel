<template>
	<div class="container" @click="closeGallary">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide v-for="(item,index) in imgs" :key="index">
			    	<img class="swiper-img" :src="item"/>
			    </swiper-slide>			   
		        <div class="swiper-pagination"  slot="pagination"></div>
	        </swiper>
		</div>
	</div>
</template>

<script>
	export default{
		name:'CommonGallary',
		data(){
			return{
				 swiperOptions: {
			        pagination: '.swiper-pagination',
			        paginationType: 'fraction',
			        observeParents: true,
			        observer: true //监听到自己或者dom元素的父级时会自动的刷新一次
			    }			     
			}
		},
		methods:{
			closeGallary(){
				this.$emit('close')	 //把事件传给父组件，让父组件关闭画廊组件		
			}
		},
		props:{
	     	imgs:{
	     		type:Array
	     	}
	     }
	}
</script>

<style lang="stylus" scoped="scoped">
  	 .container >>> .swiper-container
    	overflow: inherit
  	 .container
	    display: flex
	    flex-direction: column
	    justify-content: center
	    z-index: 99
	    position: fixed
	    left: 0
	    right: 0
	    top: 0
	    bottom: 0
	    background: #000
    .wrapper
       height: 0
       width: 100%
       padding-bottom: 55%
    .swiper-img
        width: 100%
    .swiper-pagination
        color:red
        bottom: -1rem
</style>