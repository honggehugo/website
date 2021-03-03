import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

axios.defaults.baseURL="http://localhost:8081"
//前置拦截
axios.interceptors.request.use(config=>{
    return config
})
axios.interceptors.response.use(response => {
    let res = response.data
    console.log("=======")
    console.log(res)
    console.log("=======")

    if (res.code === 200) {
        console.log("11111111")
        Element.Message.info(res.msg)
        return response;

    }else{
        console.log("密码不正确吗？？？？？？？？？？")
         Element.Message.error('登陆失败，请检查密码')
        return Promise.reject(response.data.msg);
     }
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误

},
        error => {

            if(error.response.data){
                Element.Message.error(error.response.data.msg)
            }
            if (error.response.status) {
                switch (error.response.status) {
                    // 401: 未登录
                    // 未登录则跳转登录页面，并携带当前页面的路径
                    // 在登录成功后返回当前页面，这一步需要在登录页操作。
                    case 401:
                        vant.Toast.fail("身份验证失败，请关闭重新进入。");
                        store.commit("REMOVE_INFO")
                        router.push("/login")
                        break;

                    // 403 token过期
                    // 登录过期对用户进行提示
                    // 清除本地token和清空vuex中token对象
                    // 跳转登录页面
                    case 403:
                        vant.Toast.fail("登录过期，请关闭重新进入。");
                        // 清除token
                        break;

                    // 404请求不存在
                    case 404:
                        vant.Toast.fail("您访问的网页不存在。");
                        break;
                    // 其他错误，直接抛出错误提示
                    default:
                        vant.Toast.fail(error.response.data.message);
                }
                return Promise.reject(error.response);
            }

            return Promise.reject(error)
    })