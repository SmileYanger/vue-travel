<template>
	<div class="week-box">
		<div class="title">
			周末去哪儿
		</div>
		<div class="week-list" v-for="item in weekendList" :key="item.id">
			<img class="week-img"  :src="item.imgUrl"/>
			<p class="week-title">{{item.title}}</p>
			<p class="week-dec">{{item.desc}}</p>
		</div>		
	</div>
</template>

<script>
	export default{
		name:'HomeWeekend',
		props:{
			weekendList:Array
		}
	}
</script>

<style lang="stylus" scoped="scoped">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.title
		line-height:0.8rem
		background:#eee
		padding:0 .2rem
		letter-spacing: 2px
.week-img
	width:100%
	height:2.5rem
.week-title
	font-size:.28rem
	padding:0.15rem
	color:$darkTextColor
	ellipsis()
.week-dec
	padding-bottom:0.3rem
	padding-left:0.15rem
	font-size:.26rem
	color:#000
	ellipsis()
</style>