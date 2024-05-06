<template>
	<view class="layout">
		<view class="header"> 
			i am header area 
			<slot name="header"></slot>
		</view>
		<view class="main"> 
			i am center //中间的位置会变化，留一个slot关键字
			<slot name="main"></slot>
		</view>
		<view class="footer"> i am footer area</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	
	.layout{
		.header{
			height: 10vh;
			background-color: #cfcfcf;
			border-radius: 10vw;
		}
		.main{
			height: 70vh;

		}
		.footer{
			height: 10vh;
			background-color: orange;
			border-radius: 10vw;
		}
	}

</style>