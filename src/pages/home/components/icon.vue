<template>
	<div class="icon-box">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon-img" v-for="(item,index) in page" :key="item.id">
					<div class="icon-content-img">
						<img class="icon-imgs"   :src="item.imgUrl"/>
					</div>
					<p class="icon-dec">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'homeIcons',
		props:{
			iconList:Array
		},
		data(){
			return{
				swiperOption: {
		        	pagination:'.swiper-pagination',
		        	loop:true        	
		        }	
			}
		},
		computed:{
			pages(){
				const pages=[]
				this.iconList.forEach((item,index)=>{
					const page=Math.floor(index/8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)				
				})
			return pages
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icon-box >>> .swiper-container
	height:0
	padding-bottom:50%
	
.icon-img
	width:25%
	height:0
	padding-bottom:25%
	overflow:hidden
	position:relative
	float:left
.icon-content-img
	box-sizing:border-box
	padding:.1rem
	position:absolute
	top:0
	right:0
	left:0
	bottom:.44rem
.icon-imgs
	height:100%
	margin:0 auto
	display:block
.icon-dec
	position:absolute
	bottom:0
	right:0
	left:0	
	line-height:.44rem
	height:.44rem
	text-align:center
	color:$darkTextColor	
	ellipsis()
</style>