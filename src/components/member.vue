<template>
    <div class="m-about-member" v-if="data && list">
        <div class="u-list">
            <a class="u-member" :href="item.ID | authorLink" v-for="(item,i) in data" :key="i">
                <img :src="item.user_avatar | showAvatar" />
                <span>{{item.display_name}}</span>
                <em>{{item.duty}}</em>
            </a>
        </div>
    </div>
</template>

<script>
import { getUsers } from "@/service/axios.js";
import { authorLink, showAvatar } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "member",
    props: ["list", "duty"],
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
        getUsers(this.list).then((data) => {
            let sequence = this.list.split(',')
            this.data = []
            for(let uid of sequence){
                for(let o of data){
                    if(o.ID == uid){
                        o.duty = this.duty[o.ID]
                        this.data.push(o)
                    }
                }
            }
        });
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