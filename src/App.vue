<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="剑三魔盒" slug="about" root="/about" :publishEnable="false">
            <img slot="logo" svg-inline src="./assets/img/logo.svg" />
            <Info />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true">
            <router-view />
        </Main>
    </div>
</template>

<script>
import Info from '@/components/Info.vue';
import Nav from '@/components/Nav.vue';
// import Extend from '@/components/Extend.vue';

    export default {
        name : 'App',
        props:[],
        data : function(){
            return {
                
            }
        },
        computed:{},
        methods:{},
        mounted:function(){},
        components:{
            Info,
            Nav,
            // Extend,
        }
    }
</script>