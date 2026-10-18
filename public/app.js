let btn = document.querySelectorAll("button");

for(let bt of btn){
    bt.addEventListener("mouseover",()=>{
        bt.classList.add("b");
        setTimeout(()=>{
            bt.classList.remove("b");
        },500);
    })
}