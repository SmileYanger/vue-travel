<template>
	<div>
		<div class="banner-box" @click="showGallaryClick">
	    	<img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_600x330_cd78f1b7.jpg"/>
	        <div class="details-info">
	        	<div class="details-desc">陕西历史博物馆(AAAA景区)</div>
	        	<div class="btn-box">
	        		<i class="iconfont">&#xe631;</i>
	        		4
	        	</div>
	        </div>
		</div>
		<common-gallary :imgs="imgUrl" v-show="showGallary" @close="HandleCloseGallery"></common-gallary>
	</div>
</template>

<script >
	import CommonGallary from "@/common/gallary/gallary"
	export default{
		name:"DetailsBanner",
		components:{
			CommonGallary
		},
		data(){
			return{
				imgUrl:[
			     	'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_600x330_23323094.jpg',
			     	'http://img1.qunarzz.com/sight/p0/1703/3a/3a4a9641a8867671a3.img.png_600x330_f428b36e.png',
			     	'http://img1.qunarzz.com/sight/p0/1412/84/f696c67a8052bb60e6fc51b0f9ba7388.water.jpg_600x330_edb4c9ac.jpg'
			     ],
			     showGallary:false
			}
		},
		methods:{
			showGallaryClick(){
				this.showGallary=true
			},
			HandleCloseGallery(){
				this.showGallary=false
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.banner-box
		height:0
		overflow:hidden
		padding-bottom:55%		
		position:relative
	.swiper-img
		width:100%
	.details-info
		height:.68rem
		width:100%
		background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
		position:absolute
		bottom:0
		left:0
		z-index:9
		display:flex		
		justify-content:space-between
		color:#fff	
		
	.details-desc
		font-size:.24rem
			
		line-height:.68rem
		letter-spacing:1px
		flex:1
		padding:0 .1rem
	.btn-box
		height:.5rem
		padding:0 .4rem
		background:#000
		margin-top:.09rem
		border-radius:.25rem
		text-align:center
		line-height:.5rem
		margin-right:.1rem
		
</style>