/* setTimeout(()=>{
    document.body.style.backgroundColor="green"
    setTimeout(()=>{
        document.body.style.backgroundColor="red"
    },1000)
},1000) */

changeColor("red",1000)


 changeColor =(color,interval)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=`${color}`
    },interval)
}
