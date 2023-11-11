import request from "./axios";

const register=()=>{
    return request({
        url:"/login",
        method:"get"
    })
}
const login= (val)=>{
    return  request({
        url:"/test",
        method:"post",
        data:val
    })
}
const list =()=>{
    return request({
        url:'/add',
        method:'get'
    })
}
const addList =(val)=>{
    return request({
        url:'/addlist',
        method:'post',
        data:val
    })
}
const uplist=(data)=>{
    return request({
        url:'/uplist',
        method:'post',
        data
    })
}
const deleteIdList=(val)=>{
    return request({
        url:'/deleteIdList',
        method:'post',
        data:{
            id:val
        }
    })
}

export {
    register,
    login,
    list,
    addList,
    uplist,
    deleteIdList
}