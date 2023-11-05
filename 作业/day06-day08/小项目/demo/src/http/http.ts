import axios,{AxiosInstance} from "axios";

class Request{
    instance:AxiosInstance;
    constructor(){
        this.instance=axios.create({
            baseURL:'https://api.it120.cc/xiaochengxu/',
            timeout:20000,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
                }
        })
        this.int()

    }
    reqint(){
        this.instance.interceptors.request.use(config=>{
            return config
        },err=>{
            return err
        })
    }
    resint(){
        this.instance.interceptors.response.use(res=>{
            return res
        },err=>{
            return err
        })
    }

    int(){
        this.reqint()
        this.resint()
    }

    async get(url:string,params?:any){
        let res= await this.instance({
            method:'get',
            url:url,
            params:params
        })
        return res
    }

    async post(url:string,params?:any){
        let res= await this.instance({
            method:'post',
            url:url,
            data:params
        })
        return res
    }

}

export default new Request()