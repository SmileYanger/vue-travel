<template>
	<div>
		<home-header ></home-header>
		<home-swiper :swiperList='swiperList'></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recomend  :recomendList="recomendList"></home-recomend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>	
</template>

<script>
	import axios from 'axios'
	import HomeHeader from './components/header'
	import HomeSwiper from './components/swiper'
	import HomeIcons from './components/icon'
	import HomeRecomend from './components/recomend'
	import HomeWeekend from './components/weekend'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecomend,
			HomeWeekend
		},
		data(){
			return {
				swiperList:[],
				iconList:[],
				recomendList:[],
				weekendList:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json').then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				console.log(res)
				res=res.data
				if(res.ret && res.data){
					const data=res.data
					this.swiperList=data.swiperList;
					this.iconList=data.iconList;
					this.recomendList=data.recommendList
					this.weekendList=data.weekendList
				}
				console.log(this.city)
			}
		},
		mounted:function(){
			this.getHomeInfo()
		}
	}
</script>

<style>
</style>