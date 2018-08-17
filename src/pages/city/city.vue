<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :hotCity="hotCity" :cities="cities"></city-list>
		<city-alphabet :cities="cities"></city-alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	import CityHeader from './components/header.vue'
	import CitySearch from './components/search.vue'
	import CityList from './components/list.vue'
	import CityAlphabet from './components/alphabet.vue'
	export default{
		name:'City',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data(){
			return{
				hotCity:[],
				cities:{}
			}
		},
		methods:{
			getCityList(){
				axios.get('/api/city.json').then(this.getCityListSucc)
			},
			getCityListSucc(res){
				console.log(res)
				res=res.data
				if(res.ret && res.data){
					const data=res.data
					this.hotCity=data.hotCities;
					this.cities=data.cities
					
				}
			}
		},
		mounted(){
			this.getCityList()
		}
	}
</script>

<style>
</style>