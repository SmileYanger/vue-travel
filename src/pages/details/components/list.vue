<template>
	<div>
		<div class="list-box" v-for="(item,index) in lists" :key="index">
			<div class="list-item border-bottom">
				<span class="mp-ticketype-ticket"></span>
				{{item.title}}
			</div>
			<div if="item.children">
				<details-list :lists="item.children" class="children-item">
				</details-list>
			</div>
			<!--递归组件的使用方法：就是自己用自己，通过：lists="item.children"使用，体现了details-list：组件的name-->
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailsList',
		props:{
			lists:Array
		}
	}
</script>

<style lang="stylus" scoped="scoped">
.mp-ticketype-ticket 
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem	
    position:relative
    top:.1rem
.list-item
	padding:.3rem
.children-item
	padding:0 .6rem

</style>