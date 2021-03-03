<template>
    <div>
        <Header></Header>

        <div class="block">
            <el-carousel :interval="4000" type="card" height="500px">
                <el-carousel-item v-for="item in carouselList" :key="item.key">
                    <img :src="item.src">
                </el-carousel-item>
            </el-carousel>
        </div>
        <Footer></Footer>
    </div>


</template>

<script>
    import Header from "../components/Header"
    import Footer from "../components/Footer";
    export default {
        name: "HomePage.vue",
        components: {Footer, Header},
        data(){
            return{
                blogs:{},
                currentPage:1,
                total:0,
                pageSize:5,
                carouselList:[
                    {src:require('../static/20210303195630.jpg')},
                    {src:require('../static/20210303195616.jpg')},
                    {src:require('../static/20210303195605.jpg')},
                    {src:require('../static/20210303195553.jpg')},
                    {src:require('../static/20210303195542.jpg')},
                    {src:require('../assets/20210227123104.jpg')}

                ]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .mpage{
        margin: 0 auto;
        text-align: center;
    }
</style>