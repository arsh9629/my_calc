let str=''
let out=0
function get(){
    const para=document.querySelector('p'); 
    if(this.classList.value=='ac'){
        str=''
        para.textContent=''
        return
    }
    if(this.classList.value=='c'){
        str=str.substring(0,str.length-1)
        console.log("after pop",str)
        para.textContent=str
        return
    }
    if(this.classList.value[0]=='='){
        out=eval(str)
        para.textContent=out
        str=''
        return
    }
    else{ 
        let last=str.substr(str.length-1,1)
        if(((last=='+')&&(this.classList.value=='+'))||((last=='-')&&(this.classList.value=='-')))return
        else{
            str+=this.classList.value
            para.textContent=str  
        }
            
                   
    }

  
}
const keys=document.querySelectorAll('#key')
keys.forEach(key=>{
    key.addEventListener('click',get)
})


