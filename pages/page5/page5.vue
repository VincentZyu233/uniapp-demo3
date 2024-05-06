<template>
	<view class="out">
		

		<input type="text" class="HugeInput" v-model="inputVar" @focus="onInputFocus" @blur="onInputBlur" @input="onInputWriting" @confirm="onInputConfirm" />
		
		<image class="pic" src="../../static/mengbimao.gif" mode="" :class="isActive? 'active' : '' " ></image>
		<view :value="inputStatusText"> text: {{inputVar}}  </view>
		
		<checkbox-group @change="itemChange">
			
			<view class="item" v-for="(item, idx) in goods" :key="item.id">
				<checkbox :value="item.id" :checked="item.checked">  </checkbox>
				<text class="itemName"> name: {{item.name}} </text>
				<text class="itemPrice"> price: {{item.price}} </text>
				<text class="del" @click="remove( idx )"> del</text>
			</view>
			
		</checkbox-group>
		

		
		<view class="card">
			<view class="text"> 选中{{selectedItems.length}}个产品， 总价{{totalPrice}}元 {{selectedItems}}</view>
			
			goods: {{goods}}
		</view>
		
		<input type="text" class="NameInput" v-model="FirstName" placeholder="请输入FirstName"/>
		<input type="text" class="NameInput" v-model="LastName"  placeholder="请输入LastName"/>
		<view> 全称是： {{FirstName + '-' + LastName}} , </view>
		<view> 全称2是： {{FullName}} , </view>
		<view> 全称是 by func： {{FullNameFunc()}} </view>
		
		<input type="text" v-model="personVar" style="border: 1px solid black; margin-top: 10px;" placeholder="personvar test"/>
		{{personVar}}
		
		<input type="text" v-model="personObj.name" style="border: 1px solid black; margin-top: 10px;" placeholder="personObj test"/>
		
		<zujian1 boxText="123" imgSrc="../../static/cute.jpg"></zujian1>
		<zujian1 ></zujian1>
		<zujian1 ></zujian1>
		
		<!-- <zujian2></zujian2> -->
		<zujian2 v-for="(item,index) in userInfo" :obj="item"> </zujian2>
				
	</view>
	
	
</template>

<script setup>
	import {ref,computed, watch} from "vue";

	
	const goods = ref(
		[
			{id:'11', name:"xiaomi", price:1111, checked:false},
			{id:'12', name:"samsung", price:2222, checked:false},
			{id:'13', name:"apple", price:3333, checked:false},
			{id:'14', name:"huawei", price:4444, checked:false},
			{id:'15', name:"lenovo", price:5555, checked:false},
			{id:'16', name:"vivo", price:1111, checked:false},
		]
	);
	
	const selectedItems = ref([]);
	const totalPrice = computed(()=>{
		return goods.value.filter(item=>item.checked).reduce((prev,curr)=>prev+curr.price,0);
	})
		
		
	function remove( idx ){
		console.log("idx to be dele:" + idx);
		goods.value.splice(idx,1);
	}
	
	let inputVar = ref("ovo");
	let inputStatusText = ref("input status");
	let isActive = ref(false);
	
	function onInputFocus(e){
		console.log(e);
		isActive.value = true;
	}
	
	function onInputBlur(e){
		console.log(e);
		isActive.value = false;
	}
	
	function onInputWriting(e){
		isActive.value = false;
		setTimeout(function() {
		    isActive.value = true;
		}, 111);
	}
	
	function onInputConfirm(e){
		// console.log(e);
		console.log("confirm content:" + e.detail.value);
	}
	
	
	var FirstName = ref("");
	var LastName = ref("");
	
	// watch( [FirstName, LastName],
	// ( [NewFirstName, NewLastName], [OldFirstName,OldLastName] )=>{
	// 	console.log( "NewFirstName:" + NewFirstName );
	// 	console.log( "NewLastName:" + NewLastName );
	// 	console.log( "OldFirstName:" + OldFirstName );
	// 	console.log( "OldLastName:" + OldLastName );
	// } ); 
	
	
	//***** computed性能比较优秀， 多次使用 只用一次 *****
	// computed尽量作为只读的
	var FullName = computed( ()=> FirstName.value + '-' + LastName.value );
	var FullNameFunc = function(){
		return FirstName.value + '-' + LastName.value;
	}
	
	
	function itemChange(e){
		console.log("itemchange: " + e.detail );
		selectedItems.value = e.detail.value;
		
		goods.value.forEach(item=>{
			item.checked = selectedItems.value.includes(item.id);
		});
	}
	
	const personVar = ref("");
	
	//默认浅层监听
	watch( personVar, (newValue)=>{
		console.log("NewValue of personVar:" + newValue);
	} );
	
	var personObj = ref({
		name: "zhangsan", age:18
	});
	
	// watch( ()=>personObj.value.name, 
	// (newValue)=>{
	// 	console.log( "New name of person obj: " + newValue );
	// });
	
	watch(personObj, (newValue)=>{
		console.log( "[deep watch]New name of person obj: " + newValue );
	}, {deep:true});
	
	const userInfo = ref([
		{boxText: "1", imgSrc: "../../static/moyu.jpg"},
		{boxText: "2", imgSrc: "../../static/pypy.png"},
		{boxText: "3", imgSrc: "../../static/cute.jpg"},
	])
	
</script>

<style lang="scss" scoped>
.out{
	padding: 10px;
	margin-top: 200px;
	
	position: relative;

	.item{
		padding: 10px 0;
		.del{
			color: #c00;
			margin-left: 30px;
		}
		.price{
			
		}
	}
	
	.card{
		margin-top: 10px;
		border: 1px solid blue;
		padding: 10px 2px;
		border-radius: 10px;
	}
	
	.HugeInput{
		border: 1px solid #000000;
		position: relative;
		z-index: 2;
		background-color: white;
		padding: 0 10px;
		height: 100px;
		margin-bottom: 100px;
	}
	.pic{
		top:-0px;
		left: calc(50% - 100px);
		height: 100px;
		width: 100px;
		z-index: 1;
		position: absolute;
		transition: top 0.111s;
	}
	.pic.active{
		top: -200px;
		height: 200px;
		width: 200px;
	}
	
	
	.NameInput{
		border: 1px solid #000000;
		margin: 10px;
		padding: 0 10px;
	}
}
</style>
