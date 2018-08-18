<template>
	<div>
		<details-banner></details-banner>
		<details-header></details-header>
		<div class="content"></div>
	</div>
</template>

<script>
	import DetailsBanner from "./components/banner"
	import DetailsHeader from "./components/header"
	export default{
		name:'ListDetails',
		components:{
			DetailsBanner,
			DetailsHeader
		}
	}
</script>

<style lang="stylus" scoped="scoped">
.content
	height:30rem
</style>