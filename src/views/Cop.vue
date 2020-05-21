<template>
	<div class="m-about-cop">

		<h1>合作</h1>
		<el-divider content-position="left">合作伙伴</el-divider>

		<div class="u-item">
			<i class="el-icon-connection"></i>
			<div>茗伊插件集</div>
		</div>
		<div class="u-item">
			<i class="el-icon-connection"></i>
			<div>胖叔叔配装器</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Cop',
	props: [],
	data: function() {
		return {}
	},
	computed: {},
	methods: {},
	mounted: function() {},
	components: {},
}
</script>

<style lang="less">
	.m-about-cop{
		padding:40px;
		.u-item{

			.x;
			i{
				font-size:48px;
				.db;
			}

			.w(200px);
			.fl;
			.lh(2);
			font-weight:300;
			padding:40px;
		}
	}
</style>