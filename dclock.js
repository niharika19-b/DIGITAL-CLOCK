let h=document.getElementById("hrs");
let m=document.getElementById("min");
let s=document.getElementById("sec");

setInterval (function(){

    let time=new Date();


    h.innerHTML=(time.getHours())
    m.innerHTML=(time.getMinutes())
    if(time.getSeconds()<=9){
        s.innerHTML = "0"+time.getSeconds();
    }else{
        s.innerHTML = time.getSeconds()
    }
},1000)


