import Request from './http'

export const geetAPI=(key:any)=>{
    return Request.get('/verification/pic/gett',{key})
}



export const loginAPI=(data:{mobile:string,pwd:string})=>{
    return Request.post('/user/m/login',data)
}

export const bannerAPI=()=>{
    return Request.post('/banner/list')
}

export const goodsAPI=(data:{page:number,pageSize:number})=>{
    return Request.post('/shop/goods/list/v2',data)
}

export const reputation=(data:{goodsId:string,page:number,pageSize:number})=>{
    return Request.post('shop/goods/reputation/v2',data)
}