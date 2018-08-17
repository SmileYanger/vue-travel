<template>
	<div class="list" ref="wrapper">
		<div >
			<div class="area" >
				<div class="title border-topbottom">当前城市</div>
				<div class="btn-list">
					<div class="btn">{{this.$store.state.city}}</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom" >热门城市</div>
				<div class="btn-list" >
					<div class="btn" v-for="item in hotCity" :key="item.id" @click="handleCity(item.name)">{{item.name}}</div>
				</div>
			</div>
			<div class="area" v-for="(item, key) in cities"  :key="key" :ref="key">
				<div class="title border-topbottom" >{{key}}</div>
					<div class="item-list">
						<div 
							class="item" 
							v-for="innerItem in item" 
							:key="innerItem.id" 
							@click="handleCity(innerItem.name)"
						>
							{{innerItem.name}}
						</div>					
				   </div>
			 </div>
		 </div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default{
		name:'CityList',
		props:{
			hotCity:Array,
			cities:Object			
		},
		data(){
			return{
				letter:''
			}
		},
		methods:{
			handleCity(city){
				this.$store.dispatch('changeCity',city)
				this.$router.push("/")
			}
		},
		mounted:function(){
			this.scroll=new  BScroll(this.$refs.wrapper)
			var _this=this
			this.bus.$on('',function(value){
				_this.letter=value
			})			
		},
		watch:{		
			letter() {
				const element=this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
 @import '~styles/varibles.styl'
.list
	overflow:hidden
	position:absolute
	top:1.6rem
	left:0
	right:0
	bottom:0
 .title
 	line-height:.5rem
 	background:#eee
 	font-size:0.26rem
 	padding-left:0.2rem
 	color:#666
 .btn-list
 	padding:0.1rem .6rem .1rem .1rem
 	box-sizing:border-box
 	display:flex
 	flex-wrap:wrap
 	justify-content: space-between
 	align-items:center
 .btn
 	padding:0.05rem 0
 	width:30%	
 	border:.02rem solid #ccc
 	text-align:center
 	border-radius:.06rem
 	margin:0.1rem 0
 .item-list
 	.item
 		line-height:.6rem
 		padding-left:.1rem
 		color:#666	
 		border-bottom:.02rem solid #ccc
</style>