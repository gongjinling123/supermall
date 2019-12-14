import axios from 'axios'

const url1='http://123.207.32.32:8000/api/v2'
const url2='http://106.54.54.237:8000/api/v1'

export function request(config){
    const instance=axios.create({
        // URL1:'http://123.207.32.32:8000/api/v2',
        // URL2:'http://106.54.54.237:8000/api/v1',
        baseURL: url1 || url2,
        timeout:10000
    })

    // 拦截器
    axios.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err)
    })

    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data
    },err=>{
        console.log(err)
    })

    // 发送网络请求
    return instance(config)
}