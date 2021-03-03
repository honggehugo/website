<template>
    <div>
        <Header></Header>
        <div class="m-blog">
            <h2>{{blog.title}}</h2>
            <el-divider></el-divider>
            <div v-html="blog.content"></div>
        </div>

    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "BlogDetail.vue",
        components: {Header},
        data() {
            return {
                blog: {
                    id: '',
                    title: 'moren',
                    content: 'nieron'
                }

            }
        },
        created() {
            const blogId = this.$route.params.blogId
            console.log(blogId)
            const _this = this
            if (blogId) {
                this.$axios.get('/blog/' + blogId).then(res => {
                    const blog = res.data.data
                    _this.blog.id = blog.id
                    _this.blog.title = blog.title
                    _this.blog.content = blog.content
                })
            }
        }
    }
</script>

<style scoped>
.m-blog{
    margin-top: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    min-height: 700px;
}
</style>