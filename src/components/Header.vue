<template>
    <div class = "m-content">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#24292e"
                text-color="#fff"
                active-text-color="#ffd04b"
                router="true">
            <el-menu-item ><a href="/" ><el-avatar :size="40" :src="squareUrl" ></el-avatar></a></el-menu-item>
            <el-submenu index="2">
                <template slot="title">婚礼作品</template>
                <el-menu-item index="2-1">即日回放</el-menu-item>
                <el-menu-item index="2-2">婚礼电影</el-menu-item>
                <el-menu-item index="2-3">婚礼提前拍</el-menu-item>
<!--                <el-submenu index="2-4">-->
<!--                    <template slot="title">关于我们</template>-->
<!--                    <el-menu-item index="2-4-1">商业制作</el-menu-item>-->
<!--                    <el-menu-item index="2-4-2">联系我们</el-menu-item>-->
<!--                    <el-menu-item index="2-4-3">官方微博</el-menu-item>-->
<!--                </el-submenu>-->
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">关于我们</template>
                <el-menu-item index="2-1">商业制作</el-menu-item>
                <el-menu-item index="2-2">联系我们</el-menu-item>
                <el-menu-item index="2-3">官方微博</el-menu-item>
            </el-submenu>
            <el-menu-item index="1"><el-link type="warning" href="blog/add">发表文章</el-link></el-menu-item>


            <el-submenu index="4" class="m-avatar">
                <template slot="title"><el-avatar :size="25" :src="circleUrl" ></el-avatar></template>
                <el-menu-item index="2-1" v-show="!hasLogin" @click="login" >login</el-menu-item>
                <el-menu-item index="2-2" v-show="hasLogin" @click="logout" >logout</el-menu-item>
            </el-submenu>


        </el-menu>



        <span></span>





    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: require('../assets/7a3aee095fb4206cd82916ef92acc8a1_1.jpg'),
                sizeList: ["large", "medium", "small"],
                user : {
                    username : "请先登录",
                    login:"/login"
                },
                hasLogin:false
            }
        },
        methods: {
            logout() {
                const _this = this
                this.$axios.get("logout", {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(res => {
                    _this.$store.commit("REMOVE_INFO")
                    _this.$router.push("/")
                })
            },
            login() {
                this.$router.push("/login")
            }
        },
        created() {
            if(this.$store.getters.getUser.username) {
                this.user.username = this.$store.getters.getUser.username
                this.circleUrl = require('../assets/20210227123104.jpg')
                this.hasLogin = true,
                this.login=""

            }
        }
    }
</script>

<style scoped>
.m-content{
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
}
.m-avatar{
    position: fixed;
    right: 10px;
}
</style>