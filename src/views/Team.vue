<template>
    <div class="m-about-team">
        <h1>团队</h1>

        <!-- <el-divider content-position="left">管理</el-divider> -->
        <!-- <member list="8" :duty="admin" /> -->

        <el-divider content-position="left">开发</el-divider>
		<member list="8,5,172,6314,16166,8187,182,1167,24922" :duty="developer" />

        <el-divider content-position="left">美术</el-divider>
		<member list="3965,4011" :duty="design" />

        <el-divider content-position="left">运营</el-divider>
		<member list="452,228" :duty="diplomacy" />

        <el-divider content-position="left">产品</el-divider>
		<member list="2,15,37,11" :duty="production" />

        <el-divider content-position="left">内容</el-divider>
		<member list="17,1972,44,30,1364,1101" :duty="content" />

        <el-divider content-position="left">贡献名单</el-divider>
        <member list="372,4122" :duty="contributor" />

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
                8: "后端服务/前端",
                5: "后端服务/前端",
                172: "技术支持/前端",
                6314: "后端服务/前端",
                16166: "后端服务/DBA",
                8187: "后端服务/前端",
                182: "后端服务/前端",
                1167:'运维',
                24922:"Android客户端"
            },
            production: {
				2 : 'PVE/PVX栏目建设',
				15:'PVE栏目建设',
				37:'PVE栏目建设/文案',
                11:'PVE栏目建设',
			},
            design: {
				3965 : '美工小姐姐',
                4011 : '美工小哥哥'
            },
            diplomacy : {
                452:'PVX栏目建设/官网微博',
                228:'PVX栏目建设/对外合作',
            },
            content: {
                30:'PVN向',
				17:'PVE向',
				1972:'PVE向',
				44:'PVE向',
				7570:'PVE向',
				1364:'PVE向',
				1101:'PVE向',
            },
            contributor: {
                372:'PVE向',
                4122:'PVE向',
            }
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
