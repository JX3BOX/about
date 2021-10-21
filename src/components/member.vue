<template>
    <div class="m-about-member" v-if="list">
        <div class="u-list">
            <a class="u-member" :href="item.user_id | authorLink" v-for="(item,i) in list" :key="i">
                <img :src="item.teammate_info.user_avatar | showAvatar" />
                <span>{{item.teammate_info.display_name}}</span>
                <em>{{item.remark}}</em>
            </a>
        </div>
    </div>
</template>

<script>
import { authorLink, showAvatar } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "member",
    props: ["list"],
    data: function () {
        return {
            data: [],
        };
    },
    computed: {},
    filters: {
        authorLink: function (uid) {
            return authorLink(uid);
        },
        showAvatar: function (url) {
            return showAvatar(url);
        },
    },
    mounted: function () {
    },
    components: {},
};
</script>

<style lang="less">
.m-about-member {
    .u-list {
        .clearfix;
    }
    .u-member {
        .db;
        .fl;
        .w(320px);
        .mr(20px);
        .mb(20px);
        font-weight: 300;
        color: @color;

        img {
            .fl;
            .mr(20px);
            .r(50%);
            .size(68px);
        }

        span {
            .lh(42px);
            .db;
        }

        em {
            .lh(18px);
            .db;
            .fz(12px);
        }

        &:hover {
            span {
                color: @primary;
            }
        }
    }
}
</style>