<template>
    <div class="m-about-team">
        <h1>团队</h1>

        <el-divider content-position="left">管理</el-divider>
        <member list="8" :duty="admin" />

        <el-divider content-position="left">开发</el-divider>
		<member list="8,5,172,6668" :duty="developer" />

        <el-divider content-position="left">产品</el-divider>
		<member list="2,15,452,37,228,30,11" :duty="production" />

        <el-divider content-position="left">美术</el-divider>
		<member list="3965" :duty="design" />

        <el-divider content-position="left">贡献名单</el-divider>
		<member list="17,372,44,1972,4122" :duty="diplomacy" />

		<p class="u-join">❤️ 欢迎加入我们 admin@jx3box.com</p>
    </div>
</template>

<script>
import member from "../components/member";
export default {
    name: "Team",
    props: [],

    data: function() {
        return {
            admin: {
                8: "项目统筹规划与实施",
            },
            developer: {
                8: "CMS系统/应用服务/前端",
                5: "中台系统/百科服务/前端",
                172: "技术支持/前端",
                6668: "应用服务/运维",
            },
            production: {
				2 : 'PVE/PVX栏目建设',
				15:'PVE栏目建设',
                452:'PVX栏目建设/外宣',
                228:'PVX栏目建设/外宣',
				37:'PVE栏目建设/文案',
				30:'PVN栏目建设/测试',
                11:'PVE栏目建设',
			},
            design: {
				3965 : '美工小姐姐'
			},
            diplomacy: {
				17:'PVE向',
				372:'PVE向',
				1972:'PVE向',
				44:'PVE向',
				7570:'PVE向',
				4122:'PVE向',
			},
        };
    },
    computed: {},
    methods: {},
    mounted: function() {},
    components: {
        member,
    },
};
</script>

<style lang="less">
.m-about-team {
	padding: 40px;
	
	.u-join{
		.x;
		font-weight:300;
		margin:50px auto;
	}
}
</style>
