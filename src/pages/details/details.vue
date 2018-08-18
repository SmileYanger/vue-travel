<template>
	<div>
		<details-banner></details-banner>
		<details-header></details-header>
		<div class="content">
			<details-list :lists="list"></details-list>
		</div>
	</div>
</template>

<script>
	import DetailsBanner from "./components/banner"
	import DetailsHeader from "./components/header"
	import DetailsList from "./components/list"
	export default{
		name:'ListDetails',
		components:{
			DetailsBanner,
			DetailsHeader,
			DetailsList
		},
		data(){
			return{
				list:[
					{
						title:'儿童票',
						children:[
							{
								title:'双人票',
									children:[
										{title:'大唐芙蓉园-双人票'}
									]
								},
							{
								title:'三管连票',
									children:[
										{title:'华清池-三人票'}
									]
								},
							{
								title:'五管连票',
									children:[
										{title:'古城墙-五人票'}
									]
								}
						]
					},
					{
						title:'学生票'
						},
					{
						title:'成人票'
						},
					{
						title:'特惠票'
						}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
.content
	height:30rem
</style>