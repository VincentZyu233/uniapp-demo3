<template>
	<view style="padding: 10px; border: 2px solid blue;" class="zujian1">
		<view> i am zujian1</view>
		<image :src="imgSrc" mode="" style="height: 100px; width: 100px;"> </image>
		 {{imgSrc}}
		<view class="box" style="border: 1px solid black;"> i am a box, text:{{boxText}} </view>
		<view> text2:{{text2}} </view>
	</view>
</template>

<script setup>
	import { computed  } from "vue";
	
	// const props = defineProps( ['boxText', 'imgSrc'] );
	// console.log(props);
	// var text2 = computed( ()=>props.boxText+'@' ); 
	const props2 = defineProps({
		boxText:{
			type: String,
			default: "默认box文本"
		},
		imgSrc:{
			type: String,
			default: "../../static/mengbimao.gif"
		}
	});
	console.log(props2);
	var text2 = computed( ()=>props2.boxText+'@' ); 
	text2 = '456';
	
</script>

<style>
	.zujian1{
		width: 40vw;
		height: 20vh;
		background-color: #ccc;
		display: flex;
		flex-direction: column;
		
		align-items: center;
		justify-content: center;
		
		image{
			width: 100px;
			height: 100px;
			border-radius: 10%;
		}
	}
</style>