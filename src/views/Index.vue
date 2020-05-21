<template>
    <div class="m-about-index">
        <div class="u-banner">
            <img src="" alt="" />
        </div>

        <div class="u-intro">
            <p>
                JX3BOX（剑三魔盒）是由湖南浮烟科技有限公司出品的剑网3玩家交流分享社区，管理团队由原超级宏&JX3PVE官方站原班团队组成。
            </p>
            <p>
                我们的宗旨是，打造和谐友爱的分享讨论环境，为广大玩家提供分享体验与展现自我的平台！
            </p>
            <p>
                欢迎加入我们，共建美好社区。如果你觉得好用，欢迎推荐给你的小伙伴。
            </p>
        </div>

        <div class="u-group">
            <el-row :gutter="20">
                <el-col v-for="(item, i) in group" :key="i" :span="6">
                    <div class="u-group-item">
                        <i :class="item.icon"></i>
                        <h4>{{ item.name }}</h4>
                        <p>
                            <b>{{ item.qq }}</b>
                            <a
                                class="el-button el-button--primary el-button--mini is-plain"
                                :href="item.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                >加入</a
                            >
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="u-contact">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="u-contact-item">
						<i class="el-icon-message"></i>
						<span>官方邮箱</span>
						<b>admin@jx3box.com</b>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="u-contact-item">
						<i class="el-icon-message"></i>
						<span>合作联系</span>
						<b>rx6@qq.com</b>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    props: [],
    data: function() {
        return {
            group: [
                {
                    name: "官方反馈群",
                    qq: 2471800,
                    link: "https://jq.qq.com/?_wv=1027&k=k1aSaI93",
                    icon: "el-icon-service",
                },
                {
                    name: "成就讨论群",
                    qq: 614370825,
                    link: "https://jq.qq.com/?_wv=1027&k=MFwMNVRb",
                    icon: "el-icon-trophy",
                },
                {
                    name: "团长交流群",
                    qq: 785597424,
                    link: "https://jq.qq.com/?_wv=1027&k=bpNtDAzA",
                    icon: "el-icon-user-solid",
                },
                {
                    name: "签约作者群",
                    qq: 978285140,
                    link: "https://jq.qq.com/?_wv=1027&k=rHqH70e3",
                    icon: "el-icon-s-promotion",
                },
            ],
        };
    },
    computed: {},
    methods: {},
    mounted: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/index.less";
</style>
