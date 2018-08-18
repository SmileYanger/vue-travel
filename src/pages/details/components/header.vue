<template>
	<div>
		<div class="detailsBack" v-show="showHeader">
			<router-link 
				class="iconfont"
				tag="div"
				to="/"
				>
				&#xe624;
			</router-link>
		</div>
		<div class="header-fixed" v-show="!showHeader" :style="opcityStyle">
			<router-link 
				class="iconfont header-fixed-left"
				tag="div"
				to="/"
				>
				&#xe624;
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script >
	
	export default{
		name:'DetailsHeader',
		data(){
			return{
				showHeader:true,
				opcityStyle:0
			}
		},
		methods:{
			handleScroll(){
				const top=document.documentElement.scrollTop
				if(top>60){
					this.showHeader=false
					let opacity=top/140
					opacity = opacity > 1 ? 1 : opacity
					this.opcityStyle={opacity}
				}else{
					this.showHeader=true
				}
			}
		},
		activated () {
			window.addEventListener('scroll',this.handleScroll)
			//keep-alive组件激活时调用，该钩子在服务器端不被渲染
		},
		deactivated () {  //全局事件的解绑
			window.addEventListener('scroll',this.handleScroll)
			//keep-alive组件停用时调用，在钩子在该钩子在服务器端不被渲染
			//页面被隐藏或者页面即将被替换为新的页面时调用
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	 @import '~styles/varibles.styl'
	.detailsBack
		width: .8rem
		height: .8rem
		text-align: center
		line-height: .8rem
		background: rgba(0,0,0,.8)
		border-radius: 50%
		position: absolute
		top: .2rem
		left: .2rem
		color:#fff	
	.header-fixed
		position:fixed
		top:0
		left:0
		right:0
		line-height:0.8rem
		display:flex
		background:$bgColor
		color:#fff	
		text-align:center
		display:block
		letter-spacing:2px	
	.header-fixed-left
		width:0.64rem
		float:left
</style>