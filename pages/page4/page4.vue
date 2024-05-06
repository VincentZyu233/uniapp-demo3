<template>
	<view class="box" v-on:click="onClick()" v-bind:style="{background:colorVar}">
		{{x}}
	</view>
	
	<switch checked @change="onSwitchChange" />
	
	<button type="warn" :loading="isLoading"> anniu</button>
	
	<view v-if="isLoading" > v if isloading is true </view>
	<view v-else > v if isloading is false!!!!!! </view>
	
	<image v-show="isLoading" src="../../static/cute.jpg" mode="aspectFit"></image>
	
	<view  v-for="(item,index) in 10" :key="index"> v for idx: {{index}} </view>
	
	<view> ------------------- </view>
	
	<view  v-for="item in arr"> name: {{item.name}} age:{{item.age}} </view>
	
	
</template>

<script setup>
	import {ref} from "vue";
	var x = ref(1);
	var colorVar = ref("#114514")
	function onClick(){
		x.value++;
		colorVar.value = getRandomColor();
	}
	
	function getRandomColor() {
	  // 生成随机的 R、G、B 分量
	  const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	  const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	  const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	  
	  // 拼接成十六进制颜色字符串
	  const color = `#${r}${g}${b}`;
	  
	  return color;
	}
	
	function onSwitchChange( e ){
		// console.log(e);
		console.log("switch on or off? ON TRUE, OFF FALSE" + e.detail.value);
		isLoading.value = !isLoading.value;
	}
	
	var isLoading = ref(true);
	
	const arr = ref(
		[
			{name:"张三", age:18},
			{name:"李四", age:19},
			{name:"王五", age:20},
			{name:"赵六", age:21},
			{name:"钱七", age:22},
			{name:"孙八", age:23},
			{name:"周九", age:24},
			{name:"吴十", age:25},
			{name:"郑十一", age:26},
			{name:"王十二", age:27}
		]
	);

	
</script>

<style>
.box{
	width: 200px;
	height: 200px;
	background-color: orange;
}
</style>
