<template>
    <nav class="m-nav">
        <!-- <h5 class="u-title">账号设置</h5> -->
        <div class="m-nav-group">
            <router-link to="/"><img class="u-index" svg-inline src="../assets/img/logo.svg" /><span>关于我们</span></router-link>
            <router-link to="/team"><img class="u-team" svg-inline src="../assets/img/logo.svg" /><span>团队成员</span></router-link>
            <!-- <router-link to="/cop"
                ><img
                    class="u-cop"
                    svg-inline
                    src="../assets/img/logo.svg"
                /><span>合作伙伴</span></router-link
            > -->
            <router-link to="/privacy"><img class="u-privacy" svg-inline src="../assets/img/logo.svg" /><span>隐私政策</span></router-link>
            <router-link to="/licence"><img class="u-licence" svg-inline src="../assets/img/logo.svg" /><span>用户协议</span></router-link>
            <router-link to="/treaty"><img class="u-treaty" svg-inline src="../assets/img/logo.svg" /><span>创作公约</span></router-link>
            <router-link to="/incentives"><img class="u-incentives" svg-inline src="../assets/img/logo.svg" /><span>创作激励</span></router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {},
};
</script>

<style lang="less">
.m-nav {
    .u-title {
        padding: 10px;
        border-bottom: 1px solid #eee;
        margin: 0;
    }
}
.m-nav-group {
    margin-top: 5px;
    margin-bottom: 10px;
    a {
        .db;
        // border-bottom: 1px solid #eee;
        .fz(14px, 32px);
        padding: 5px 25px;
        color: #555;
        svg {
            .y(-3px);
            .mr(5px);
            fill: #555;
            .size(16px);
        }

        .u-fav,
        .u-pass,
        .u-user,
        .u-avatar {
            .size(14px);
            .y(-2px);
        }
        .u-blank {
            .mt(7px);
            .fr;
        }

        &:hover {
            // background-color: #fff;
            color: @color-link;
            svg {
                fill: @color-link;
            }
        }

        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        &.router-link-exact-active {
            background-color: #fff;
            color: @color-link;
            svg {
                fill: @color-link;
            }
            .bold;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
    }
}
</style>
