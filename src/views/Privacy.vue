<template>
    <div class="m-about-privacy">
        <h1>隐私政策</h1>
        <div v-html="data"></div>
    </div>
</template>

<script>
import { getConfig, getArticle } from "@jx3box/jx3box-common/js/server.js";
export default {
    name: "Privacy",
    props: [],
    data: function() {
        return {
            data : ''
        };
    },
    computed: {},
    methods: {},
    mounted: function() {
        getConfig("privacy").then((id) => {
            getArticle(id).then((data) => {
                this.data = data;
            });
        });
    },
    components: {},
};
</script>

<style lang="less">
.m-about-privacy {
    padding: 40px;

    font-weight: 300;
    .lh(2.2);

    h1 {
        text-align: center;
        margin-top:0;
    }
}
</style>
