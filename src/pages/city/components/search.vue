<template>
	<div>
		<div class="search">
			<input type="search" v-model="keyword"  class="search-input"    placeholder="输入城市名字或者拼音" />
		</div>
		<div ref="search" class="search-box" v-show="keyword">
			<ul >
				<li 
					v-for="item in list"
				    class="list-item border-bottom"
				     :key="item.id"
				     @click="handelCity(item.name)"
				>{{item.name}}</li>
				<li v-show="hasNoData" class="list-item border-bottom center">没有找到匹配的数据</li>
			</ul>
		</div>		
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'CitySearch',
		props:{
			cities:Object
		},
		data(){
			return{
				keyword:'',
				list:[],
				timer:'',
				show:true
			}
		},
		methods:{
			handelCity:function(city){
				this.$store.dispatch('changeCity',city)
				this.$router.push("/")
			}
		},
		watch: {
			keyword () {
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list=[]
					return
				}
				
				this.timer=setTimeout( () => {
					const result=[]
					for(let i in this.cities){
						this.cities[i].forEach((value)=> {
							if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
								result.push(value)
							}
						})
					}
					this.list=result
				},100)
				console.log(this.list)
				
			}
		},     
		mounted(){
			this.scroll= new BScroll(this.$refs.search)
		},
		computed:{
			hasNoData(){
				return !this.list.length
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">

 @import '~styles/varibles.styl'
 .search
 	height:0.72rem
 	padding:0 .1rem
 	background:$bgColor
 .search-input
 	box-sizing:border-box
 	width:100%
 	height:0.62rem
 	padding:0 .1rem
 	text-align:center
 	border-radius:0.1rem
 	color:$darkTextColor
 	font-size:.2rem
.search-box
	position: absolute
	z-index:1
	overflow:hidden
	top:1.58rem
	left:0
	right:0
	bottom:0
	background:#ccc
.list-item
	line-height:.8rem
	font-size:.3rem
	padding:0 .2rem
	background:#fff
.center
	text-align:center
</style>