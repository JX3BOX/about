<template>
    <div class="m-about-member" v-if="list && list.length">
        <div class="u-list">
            <a class="u-member" :href="item.user_id | authorLink" v-for="(item, i) in list" :key="i">
                <img :src="getAvatar(item)" />
                <span>{{ getUsername(item) }}</span>
                <em>{{ item.remark }}</em>
            </a>
        </div>
    </div>
</template>

<script>
    import { authorLink, showAvatar } from "@jx3box/jx3box-common/js/utils";
    export default {
        name: "member",
        props: ["list"],
        data: function() {
            return {
                data: [],
            };
        },
        methods: {
            getAvatar: function(item) {
                return showAvatar(item?.teammate_info?.user_avatar,'m');
            },
            getUsername: function(item) {
                return item?.teammate_info?.display_name;
            },
        },
        filters: {
            authorLink: function(uid) {
                return authorLink(uid);
            },
        },
        mounted: function() {},
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
