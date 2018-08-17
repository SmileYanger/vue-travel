<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<i class="iconfont">&#xe632;</i>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city" tag="div">
			<div class="header-right">
				{{this.$store.state.city}}
				<i class="iconfont arrow-icon">&#xe615;</i>			
			</div>
		</router-link>
	</div>
</template>

<script>
//	import store from ''
	export default{
		name:'HomeHeader',

	}
</script>

<style lang="stylus" scoped="scoped">
    /*1rem =html font-size=50px*/
   @import '~styles/varibles.styl'
	.header
		line-height:0.86rem
		display:flex
		background:$bgColor
		color:#fff
	.header-left
		width:0.64rem
		float:left
	.back-icon
		text-align:center
		font-size:0.4rem
	.header-input
		flex:1
		background:#fff
		border-radius:.1rem
		margin-top:0.12rem
		height:0.64rem
		line-height:0.64rem
		margin-left:0.2rem
		color:#ccc
		padding-left:0.2rem
		font-size:0.25rem
	.header-right
		width:1.24rem
		text-align:center
		font-size:0.25rem
	.arrow-icon
		font-size:.24rem
		margin-left:-.04rem
</style>