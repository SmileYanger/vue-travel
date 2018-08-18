<template>
	<div class="recomend">
		<div class="title">
			热销推介
		</div>
		<ul>
			<router-link 
				class="recomend-box border-bottom" 
				v-for="item in recomendList" 
				:key="item.id"
				tag="li"
				:to="'/details/'+item.id"
				>
				<img class='icon'  :src="item.imgUrl"/>
				<div class="recomend-dec">
					<p class="recomend-title">{{item.title}}</p>
					<p class="dec">{{item.desc}}</p>
					<button class="btn">查看更多</button>
				</div>
			</router-link>
		</ul>
		<div class="find-more">查看所有产品</div>
	</div>
</template>

<script>
	import ListDetails from "@/pages/details/details"
	export default{
		name:'HomeRecomend',
		components:{
			ListDetails
		},
		props:{
			recomendList:Array
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
	.title
		line-height:0.8rem
		background:#eee
		margin-top:.2rem
		padding:0 .2rem
		letter-spacing: 2px
	.recomend-box
		width:100%
		display:flex
	.icon
		height:1.5rem
		width:1.7rem
		float:left
		padding:.1rem
		border-radius:.1rem
	.recomend-dec
		flex:1
		padding:.1rem
		overflow:hidden
	.recomend-title
		padding:.1rem 0	
		font-size:0.32rem
		ellipsis()
	.dec
		color:#ccc
		padding:.15rem 0
		ellipsis()	
	.btn
		background:orange
		color:#fff
		text-align:center
		padding:0 0.2rem
		font-size:.26rem
	
	.find-more
		color:#00bcd4
		text-align:center		
		line-height:0.6rem
		height:0.6rem
		display:block

	
</style>