<template>
	<view class="content">
		
		<view>
			<view @click="toUrl('/pages/page3/page3')" style="border: lightblue; background-color: #007AFF;"> 跳转！3 跳转test </view> 
		</view>
		
		<view>
			<view @click="toUrl('/pages/page4/page4')" style="border: lightblue; background-color: indianred;"> 跳转！4 </view> 
		</view>
		
		<view>
			<view @click="toUrl('/pages/page5/page5')" style="border: lightblue; background-color: yellow;"> 跳转！5 </view> 
		</view>
		
		<view>
			<view @click="toUrl('/pages/page6/page6')" style="border: lightblue; background-color: pink;"> 跳转！6 近期热梗 by 咸虾米</view> 
		</view>
		
		<view>
			<view @click="toUrl('/pages/page7/page7')" style="border: lightblue; background-color: green;"> 跳转！7 layout 插槽</view> 
		</view>
		
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		<view> timer:  {{x}} </view>
		
		<view> {{ 114+514 }}</view>
		<view> a = {{a}} </view>
		<view> str = {{str}} </view>
		<view> date now :{{Date.now()}} </view>
		<view> random = {{Math.random()}} </view>
		<view> sanyuan : {{1<2 ? 'true' : 'false' }} </view>
		<view> sanyuan2: {{1>2 ? 'true' : 'false' }} </view>
		<view> fun: {{fun()}} </view>
		
		<view> arr:{{arr}} </view>
		<view> obj:{{obj}} </view>
		
		<image v-bind:src="picUrl" mode=""></image>
		
		<image v-bind:src="arrs[1]" mode=""></image>
		
		<view class = "box" :class="{active:isActive}">
			vbind
			zhiling
			active true
		</view>
		<view class = "box" :class="{active:!isActive}">
			vbind
			zhiling
			active false
		</view>
		
		<view class="box" :style="{width: '80vw', height: 260+'px', fontSize:fontSizeVar+'px'}" >  内敛样式 </view>
	</view>
</template>

<script setup>
	import {ref} from "vue";
	
	const toUrl=(url)=>{
		uni.navigateTo({
			url:`${url}`
		})
	}
	
	let title ='123456'
	
	let x = ref(10);
	setInterval(()=>{
		x.value++;
		console.log("x.value: ", x.value);
	},1000);
	
	const a = 999;
	const str = 'qwq';
	function fun(){
		return "woshi hanshu d fanhuizhi";
	}
	
	let arr = ref([1,2,3,4]);
	
	let obj = ref( {name:'zhangsan', age:"114514"} );
	obj.value.name = 'lisi';
	
	
	const arrs = ref([
		"../../static/cute.jpg",
		"../../static/mengbimao.gif",
		"../../static/moyu.jpg",
	]);
	const picUrl = ref( "../../static/cute.jpg" );
	var idx = 0;
	
	
	setInterval(()=>{
		idx = (idx+1) % 3;
		picUrl.value = arrs.value[idx];
	}, 1000)
	
	let isActive = ref(false);
	setInterval(()=>{
		isActive.value = !isActive.value;
	}, 1000)
	
	let fontSizeVar = ref(25);
	setInterval(()=>{
		fontSizeVar.value = (fontSizeVar.value + 1 ) % 55;
	},55);
	
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.box{
		width: 200px;
		height: 200px;
		background-color: orange;
		font-size: 20px;
	}
	
	.active{
		background: green;
		color: white;
	}
</style>
