<template>
    <div class="m-about-member" v-if="list && list.length">
        <div class="u-item" v-for="(item, i) in list" :key="i">
            <el-popover popper-class="m-about-popover" placement="top-start" trigger="hover" width="280">
                <div class="u-user">
                    <div class="u-user-info">
                        <img :src="getAvatar(item)" />
                        <span class="u-txt">
                            <span class="u-name">{{ getUsername(item) }}</span>
                            <span class="u-tags">
                                <el-tag class="u-tag" size="small" v-for="key in item.duty" :key="key"> {{ showTag(key) }} </el-tag>
                            </span>
                        </span>
                    </div>
                    <div class="u-desc" v-html="item.desc || '暂无介绍'"></div>
                </div>
                <div slot="reference" class="u-info">
                    <a class="u-member" :href="authorLink(item.user_id)">
                        <img :src="getAvatar(item)" />
                        <span class="u-info">
                            <span>{{ getUsername(item) }}</span>
                            <em>{{ item.remark }}</em>
                        </span>
                    </a>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script>
import { authorLink, showAvatar } from "@jx3box/jx3box-common/js/utils";
import { showDate } from "@jx3box/jx3box-common/js/moment";
import usergroups from "@/assets/data/usergroups.json";
export default {
    name: "member",
    props: ["list"],
    data: function () {
        return {
            data: [],
            tag: usergroups,
        };
    },
    methods: {
        getAvatar: function (item) {
            return showAvatar(item?.teammate_info?.user_avatar, "m");
        },
        getUsername: function (item) {
            return item?.teammate_info?.display_name;
        },
        authorLink,
        showDate,
        showTag(key) {
            return this.tag[key] || key;
        },
    },

    mounted: function () {},
    components: {},
};
</script>

<style lang="less">
.m-about-member {
    .flex;
    flex-wrap: wrap;
    .u-item {
        .mb(40px);
        width: 25%;
    }
}
.u-member {
    .flex;
    font-weight: 300;
    img {
        .fl;
        .mr(20px);
        .r(50%);
        .size(68px);
    }
    .u-info {
        .flex;
        flex-direction: column;
        color: @color;
        span {
            .lh(42px);
            .db;
            &:hover {
                color: @primary;
            }
        }

        em {
            .lh(18px);
            .db;
            .fz(12px);
        }
    }
}
.m-about-popover {
    .u-user {
        .flex;
        cursor: default;
        flex-direction: column;
        &-info {
            .flex;
            border-bottom: 1px solid @border-hr;
            img {
                .size(48px);
                margin: 0 15px 10px 0;
                .r(2px);
            }
            .u-name {
                .bold;
                .fz(14px,1.6);
                margin-bottom:2px;
            }
            .u-txt {
                .flex;
                flex-direction: column;
                
            }
            .u-tags {
                .flex;
                flex-wrap: wrap;
                .u-tag {
                    margin: 0 10px 10px 0;
                }
            }
        }
    }
    .u-desc {
        .fz(13px,2);
        p {
            margin: 0;
        }
        margin-top:5px;
    }
}
@media screen and (max-width:@phone){
.m-about-member {
    flex-direction: column;
    .u-item {
        width: auto;
    }
}
}
</style>
