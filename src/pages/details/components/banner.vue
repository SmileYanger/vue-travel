<template>
	<div>
		<div class="banner-box" @click="showGallaryClick">
	    	<img class="swiper-img" :src="bannerImg"/>
	        <div class="details-info">
	        	<div class="details-desc">{{this.sightName}}</div>
	        	<div class="btn-box">
	        		<i class="iconfont">&#xe631;</i>
	        		{{this.gallaryImgs.length}}
	        	</div>
	        </div>
		</div>
		<common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="HandleCloseGallery"></common-gallary>
	</div>
</template>

<script >
	import CommonGallary from "@/common/gallary/gallary"
	export default{
		name:"DetailsBanner",
		components:{
			CommonGallary
		},
		props:{
			bannerImg:String,
			sightName:String,
			gallaryImgs:Array
		},
		data(){
			return{
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