<template>
	<page-layout>
		
		<template v-slot:header>
			<view> 我是首页头部 </view>
		</template>
		
		<template v-slot:main>
			<zujian3 @add="onAdd" @textChange="onTextChange"></zujian3>
			num:{{num}}
			<view class="box" :style="{background: colorVar, fontSize:sizeVar+'px'}" > color is <br>:   {{colorVar}} </view>
			
			<view v-for="item in 20"> this is row no.{{item}}</view>
			<view class="box">  im a box </view>
		</template>
		
		
	</page-layout>
</template>

<script setup>
	
	import {ref} from "vue";
	const num = ref(0);
	const colorVar = ref("#ccc");
	const sizeVar = ref(12);
	
	const onAdd = function(e){
		console.log( "onAdd:" + e );
		num.value = e;
		colorVar.value = "#" + String(e).substring(6,3);
		sizeVar.value = e*10 + 10;
		console.log( "colorVar is " + colorVar.value );
	}
	
	const onTextChange = function(e){
		console.log( "onTextChange(): " + "父组件监听到子组件定义的textChange事件，然后父组件调用onTextChange函数");
		sizeVar.value = e;
	}
	
</script>

<style lang="scss" scoped>

	.box{
		background-color: pink;
		height: 100px;
		width: 100px;
	}
	
</style>
