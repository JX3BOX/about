<template>
    <div class="m-about-team">
        <h1>团队</h1>

        <!-- <el-divider content-position="left">管理</el-divider> -->
        <!-- <member list="8" :duty="admin" /> -->

        <template v-for="item in temp">
            <div class="m-about-team-item" :key="item">
                <el-divider content-position="left">{{ item }}</el-divider>
                <member
                    :list="teammates[item]"
                />
            </div>
        </template>

        <p class="u-join">
            ❤️ 欢迎
            <a href="/bbs/21899/" target="_blank">加入我们</a>
        </p>
    </div>
</template>

<script>
import member from "../components/member";
import {getTeammates} from  '@/service/axios'
import {group} from '@/assets/data/teammate_groups.json'
export default {
    name: "Team",
    props: [],

    data: function () {
        return {
            list: [],
            
            temp: ["开发", "设计", "运营", "产品", "内容", "编辑", "贡献名单"]
        };
    },
    computed: {
        teammates: function (){
            const obj = {}

            Object.entries(group).forEach(([key, value]) => {
                obj[value] = this.list.filter(item => item.group === key)
            });

            return obj
        }
        
    },
    methods: {
        loadTeammates: function (){
            getTeammates().then(res => {
                this.list = res.data.data
            })
        }
    },
    mounted: function () {
        this.loadTeammates()
    },
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
