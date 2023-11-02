import Request from './http'

export const loginAPI=(data:{username:string,password:string})=>{
    return Request.post('/user/m/login',data)
}

export const bannerAPI=()=>{
    return Request.post('/banner/list')
}

export const goodsAPI=(data:{page:number,pageSize:number})=>{
    return Request.post('/shop/goods/list/v2',data)
}