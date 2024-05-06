<template>
	<view class="out" style="border: 1px solid black; padding: 10px;">
		zizujian3
		<button @click="$emit('add', Math.random())" type="primary"> i am a button</button>
		<!-- 当按钮被点击时，会触发一个名为 'add' 的自定义事件，并且传递了参数 123 给父组件。 -->
		两个按钮是等价的哦
		<button @click="onClick"> i am button2 </button>
		
		<view> ------ </view>
		<input  type="text" @input="onInput" style="border: 1px solid black;" />
	</view>
</template>

<script setup>
	const emit = defineEmits( ["add", "textChange"] );
	function onClick(){
		emit("add", Math.random());
		console.log("zizujian3 button2 click");
	}
	
	function onInput(e){
		console.log("现在文本框的内容是:" + e.detail.value);
		emit("textChange", e.detail.value);
	}
	
</script>

<style>

</style>