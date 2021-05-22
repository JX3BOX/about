<template>
    <div class="m-about-licence" v-loading="loading">
        <h1>用户协议</h1>
        <div v-html="data"></div>
    </div>
</template>

<script>
import { getConfig, getArticle } from "@/service/axios.js";
export default {
    name: "Licence",
    props: [],
    data: function() {
        return {
            data: "",
            loading : false
        };
    },
    computed: {},
    methods: {},
    mounted: function() {
        this.loading = true
        getConfig("licence").then((id) => {
            getArticle(id).then((data) => {
                this.data = data;
            });
        }).finally(() => {
            this.loading = false
        })
    },
    components: {},
};
</script>

<style lang="less">
.m-about-licence {
    padding: 40px;

    font-weight: 300;
    .lh(2.2);

    h1 {
        text-align: center;
        margin-top: 0;
    }

    table {
        border-collapse: collapse;
        .w(100%);
        td,
        th {
            border: 1px solid #eee;
            padding: 10px;
        }
    }
}
</style>
