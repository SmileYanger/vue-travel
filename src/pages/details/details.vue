<template>
	<div>
		<details-banner :bannerImg='bannerImg' :sightName="sightName" :gallaryImgs="gallaryImgs"></details-banner>
		<details-header></details-header>
		<div class="content">
			<details-list :lists="list"></details-list>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
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
		//组件名字的用途；
		//1.使用递归组件
		//2. 取消缓存时------>  keep-alive exclude="ListDetails"  组件的名字
		//3.组件查看工具
		data(){
			return{
				bannerImg:'',
				list:[],
				gallaryImgs:[],
				sightName:''
			}
		},
		methods:{
			getDetailsInfo (){
				axios.get('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.getDetailsSucc)			
			},
			getDetailsSucc (res){
				console.log(res)
				res=res.data
				if(res.ret && res.data){
					const data=res.data
					this.bannerImg=data.bannerImg
					this.list=data.categoryList
					this.gallaryImgs=data.gallaryImgs
					this.sightName=data.sightName
				}
			}
		},
		mounted(){
			this.getDetailsInfo()
		}
	}
</script>

<style lang="stylus" scoped="scoped">
.content
	height:30rem
</style>