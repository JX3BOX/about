<template>
    <div class="m-about-team">
        <h1>团队</h1>

        <div class="m-about-team-item" :key="group" v-for="(grouplabel,group) in usergroups">
            <el-divider content-position="left">{{ grouplabel }}</el-divider>
            <member :list="teammates[group]" />
        </div>

        <p class="u-join">
            ❤️ 欢迎<a href="/bbs/21899/" target="_blank">加入我们</a>
        </p>
    </div>
</template>

<script>
import member from "../components/member";
import { getTeammates } from "@/service/axios";
import usergroups from "@/assets/data/usergroups.json";
export default {
    name: "Team",
    props: [],

    data: function () {
        return {
            list: [],
            usergroups,
        };
    },
    computed: {
        teammates: function () {
            const obj = {};

            Object.entries(usergroups).forEach(([key, value]) => {
                obj[key] = this.list.filter((item) => item.group === key);
            });

            return obj;
        },
    },
    methods: {
        loadTeammates: function () {
            getTeammates().then((res) => {
                this.list = res.data.data;
            });
        },
    },
    mounted: function () {
        this.loadTeammates();
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
