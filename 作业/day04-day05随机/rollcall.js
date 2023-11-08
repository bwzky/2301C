let list=[
    { id:1 , name:'张三',sat:0},
    { id:2 , name:'李四',sat:0},
    { id:3 , name:'王五',sat:0},
    { id:4 , name:'赵六',sat:0},
    { id:5 , name:'杨七',sat:0},
    { id:6 , name:'老八',sat:0},
    { id:7 , name:'杨好奇',sat:1},
    { id:8 , name:'杨蛋',sat:0},
    { id:9 , name:'刘伯温',sat:1},
    { id:10 , name:'徐铭蔚',sat:1},
    { id:11 , name:'张正',sat:1},
    { id:12 , name:'小黑',sat:1},
    { id:13 , name:'羊驼',sat:1},
    { id:14 , name:'李博',sat:1},
    { id:15 , name:'张天龙',sat:0},
    { id:16 , name:'李蛋',sat:0}
]
//深拷贝数据
let shops=[...list]
console.log(shops);

//男生数组
let boyobj=[]
//女生数组
let girlsobj=[]

function arrbox(){
    shops.forEach(item=>{
        if(item.sat==0){
            boyobj.push(item)
        }else{
            girlsobj.push(item)
        }
    })
}

const ul=document.getElementsByTagName('ul')[0]
//随机点名
const one=document.getElementById('one')
//双人点名
const two=document.getElementById('two')
//男生点名
const boy=document.getElementById('boy')
//女生点名
const girls=document.getElementById('girls')
//幸运儿名字
const cont=document.getElementById('cont')
//渲染数据
domes()
function domes(){
    ul.innerHTML=''
    list.forEach(item=>{
        var li=document.createElement('li')
        li.innerText+=item.name
        li.style.backgroundImage=rdGradient()
        ul.appendChild(li)
    })
}

//随机数
function suiji(arr){
    let ming=arr.length
    return Math.floor(Math.random()*ming)
}

var dian=''

//随机点名
function random(){
    if(one.innerText=='随机点名'){
        one.innerText='停止点名'
        dian=setInterval(() => {
            domes()
        }, 100);
    }else{
         //清除定时器
        clearInterval(dian)
        one.innerText='随机点名'
        let index=suiji(list)
        cont.style.backgroundImage=rdGradient()
        cont.innerHTML=list[index].name
        shops.splice(index,1)
    }
}

//双人点名
function add(){
    if(two.innerText=='双人点名'){
        two.innerText='停止点名'
        dian=setInterval(() => {
            domes()
        }, 100);
    }else{
        //清除定时器
        clearInterval(dian)
        two.innerText='双人点名'
        let index=suiji(shops)
        let about=suiji(shops)
        cont.style.backgroundImage=rdGradient()
        cont.innerHTML=list[index].name+','+list[about].name

        let one=shops[index]
        let two1=shops[about]

        let filte=shops.filter(item=>item.id!=one.id).filter(item=>item.id!=two1.id)
        shops=filte
    }
}


//男生点名
function male(){
    arrbox()
    if(boy.innerText=='男生点名'){
        boy.innerText='停止点名'
        //定时器改变颜色
        dian=setInterval(() => {
            domes()
        }, 100);
    }else{
         //清除定时器
        clearInterval(dian)
        boy.innerText='男生点名'
        let index=suiji(boyobj)
        //渐变的颜色
        cont.style.backgroundImage=rdGradient()
        //选中人的名字
        cont.innerHTML=boyobj[index].name
        let i=shops.findIndex(item=>
            item.id==boyobj[index].id
        )
        shops.splice(i,1)
    }
}


//女生点名
function female(){
    arrbox()
    if(girls.innerText=='女生点名'){
        girls.innerText='停止点名'
        //定时器改变颜色
        dian=setInterval(() => {
            domes()
        }, 100);
    }else{
         //清除定时器
        clearInterval(dian)
        girls.innerText='女生点名'
        let index=suiji(girlsobj)
        //渐变的颜色
        cont.style.backgroundImage=rdGradient()
        //选中人的名字
        cont.innerHTML=girlsobj[index].name
        
        let i=shops.findIndex(item=>
            item.id==girlsobj[index].id
        )
        shops.splice(i,1)
    }
}


//封装渐变色
function Gradient(){
    return Math.floor(Math.random()*255)
}

function rdGradient(){
    return `linear-gradient(to right  top, rgb(${Gradient()},${Gradient()},${Gradient()}),rgb(${Gradient()},${Gradient()},${Gradient()}))`
}
