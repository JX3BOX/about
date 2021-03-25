<template>
    <div class="m-about-index">
        <div class="u-banner">
            <img :src="banner" />
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
                        <a href="http://wpa.qq.com/msgrd?v=3&uin=17229398&site=qq&menu=yes">QQ : 17229398</a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {__ossMirror,__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "Index",
    props: [],
    data: function() {
        return {
            group: [
                {
                    name: "官方反馈群（兑奖）",
                    qq: 2471800,
                    link: "https://jq.qq.com/?_wv=1027&k=k1aSaI93",
                    icon: "el-icon-service",
                },
                {
                    name: "百科小分队（成就党）",
                    qq: 614370825,
                    link: "https://jq.qq.com/?_wv=1027&k=MFwMNVRb",
                    icon: "el-icon-trophy",
                },
                {
                    name: "休闲交流群（捏脸、家园等）",
                    qq: 658035079,
                    link: "https://jq.qq.com/?_wv=1027&k=mA07EfW3",
                    icon: "el-icon-place",
                },
                {
                    name: "团长交流群（副本、赛事）",
                    qq: 785597424,
                    link: "https://jq.qq.com/?_wv=1027&k=bpNtDAzA",
                    icon: "el-icon-user",
                },
                {
                    name: "宏作者群（宏库）",
                    qq: 297985102,
                    link: "https://jq.qq.com/?_wv=1027&k=ypz3InIy",
                    icon: "el-icon-position",
                },
                {
                    name: "插件作者群（插件、数据、工具）",
                    qq: 608303480,
                    link: "https://jq.qq.com/?_wv=1027&k=uSHHxdmd",
                    icon: "el-icon-setting",
                },
                {
                    name: "签约作者群（职业KOL）",
                    qq: 978285140,
                    link: "https://jq.qq.com/?_wv=1027&k=rHqH70e3",
                    icon: "el-icon-collection",
                },
            ],
            banner : __imgPath + 'image/about/banner.png'
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
