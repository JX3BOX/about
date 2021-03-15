<template>
    <div class="m-about-licence">
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
        };
    },
    computed: {},
    methods: {},
    mounted: function() {
        getConfig("licence").then((id) => {
            getArticle(id).then((data) => {
                this.data = data;
            });
        });
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
