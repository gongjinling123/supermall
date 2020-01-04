import axios from 'axios'

// const url1='http://123.207.32.32:8000/api/w2'
// const url2='http://106.54.54.237:8000/api/w1'

export function request(config){
    const instance=axios.create({
        // URL1:'http://123.207.32.32:8000/api/w2',
        // URL2:'http://106.54.54.237:8000/api/w1',
        baseURL: 'http://106.54.54.237:8000/api/w1',
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