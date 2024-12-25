const i=document.getElementById('inp')
const m=document.getElementById('msg')

i.addEventListener("input",function(){
    const v=parseInt(i.value)

    if (isNaN(v)){
        m.textContent=""
        return
    }

    if(v<0){
        m.textContent="Enter a possitive value"
    }else if(v%2===0){
        const even=[v + 2,v + 4,v + 6];
        m.textContent=`${even.join(' ')}`
    }else{
        const odd=[v + 2,v + 4,v + 6];
        m.textContent=`${odd.join(' ')}`
    }
})