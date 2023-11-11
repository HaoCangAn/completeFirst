import  axios  from 'axios'

const request = axios.create({
    baseURL:"http://localhost:8081",
    timeout:5000
})
request.interceptors.request.use((config)=>{
    //config是个配置对象，对象里面有一个属性很重要，headers请求头
    return config;		
});
request.interceptors.response.use(
    response =>{
        if(response.status === 200){
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },
    err=>{
        return Promise.reject(err.response)
    }
)
// request.post(url, date)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
export default request
// axios.defaults.withCredentials =true
 
// if(process.env.NODE_ENV=='DEV'){
//     axios.defaults.baseUal='http://localhost:8081/'
// }else if( process.env.NODE_ENV=='prod'){
//    axios.defaults.baseURL=''
// }
// axios.defaults.timeout=10000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// axios.interceptors.response.use(
//     response =>{
//         if(response.status === 200){
//             return Promise.resolve(response)
//         }else{
//             return Promise.reject(response)
//         }
//     },
//     err=>{
//         return Promise.reject(err.response)
//     }
// )

// function get (url,params){
//     return new Promise((resolve,reject)=>{
//         axios.get(url,{
//             params:params
//         }).then(res=>{
//             resolve(res.data)
//         }).catch(err =>{
//             reject(err.data)
//         })
//     })
// }
// function test (url,params){
//     return new Promise((resolve,reject)=>{
//         axios.post(url,{
//             params:params
//         }).then(res=>{
//             resolve(res.data)
//         }).catch(err =>{
//             reject(err.data)
//         })
//     })
// }
// export {
//     get,
//     test
// }