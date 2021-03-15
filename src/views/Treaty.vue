<template>
    <div class="m-about-treaty">
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
        };
    },
    computed: {},
    methods: {},
    mounted: function() {
        getConfig("treaty").then((id) => {
            getArticle(id).then((data) => {
                this.data = data;
            });
        });
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
