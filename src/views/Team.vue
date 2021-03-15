<template>
    <div class="m-about-team">
        <h1>团队</h1>

        <!-- <el-divider content-position="left">管理</el-divider> -->
        <!-- <member list="8" :duty="admin" /> -->

        <el-divider content-position="left">开发</el-divider>
        <member
            list="8,5,172,6314,7,1167,2021,29023,182,24922,16166"
            :duty="developer"
        />

        <el-divider content-position="left">设计</el-divider>
        <member list="4011,3965" :duty="design" />

        <el-divider content-position="left">运营</el-divider>
        <member list="452,228,37,383" :duty="diplomacy" />

        <el-divider content-position="left">产品</el-divider>
        <member list="2,15,11,16904" :duty="production" />

        <el-divider content-position="left">内容</el-divider>
        <member list="1101,17,1972,44,1364,30" :duty="content" />

        <el-divider content-position="left">审核</el-divider>
        <member list="3217,7898,2394,62" :duty="audit" />

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
                8: "全栈开发",
                5: "全栈开发",
                172: "前端,iOS客户端",
                6314: "全栈开发",
                16166: "后端开发",
                2021: "插件开发",
                29023:"插件开发",
                1167: "运维",
                182: "全栈开发",
                8187: "全栈开发",
                24922: "Android客户端",
                27896:"前端开发",
                383:"前端开发",
                7:"前端开发"
            },
            production: {
                2: "PVE/PVX向",
                15: "PVE向",
                11: "PVE向",
                16904 : 'PVE向'
            },
            design: {
                4011: "美工小哥哥",
                3965: "美工小姐姐",
            },
            diplomacy: {
                452: "微博运营",
                228: "商务合作",
                37:"群组管理",
                383:"群组管理"
            },
            content: {
                17: "PVE向",
                1972: "PVE向",
                44: "PVE向",
                7570: "PVE向",
                1364: "PVE向",
                1101: "PVE向",
                30: "PVN向"
            },
            audit : {
                3217:"成就审核",
                7898:"成就审核",
                2394:"成就审核",
                62:"成就审核"
            },
            contributor: {
                372: "PVE向",
                4122: "PVE向",
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

    .u-join {
        .x;
        font-weight: 300;
        margin: 50px auto;
    }
}
</style>
