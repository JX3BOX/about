<template>
    <div class="m-about-treaty" v-loading="loading">
        <h1>创作公约</h1>
        <div v-html="data"></div>
    </div>
</template>

<script>
import { getConfig, getArticle } from "@/service/axios.js";
export default {
    name: "Treaty",
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
        getConfig("treaty").then((id) => {
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
.m-about-treaty {
	padding: 40px;

    font-weight: 300;
    .lh(2.2);

    h1 {
		text-align: center;
		margin-top:0;
    }
}
</style>
