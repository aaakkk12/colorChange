let btn = document.querySelector("button");
let input = document.querySelector("input");
let para = document.querySelector("p")
let body = document.querySelector("body")

input.addEventListener("click",()=>{
    para.textContent = input.value
    btn.addEventListener("click", ()=>{
        para.innerText = input.value;
        body.style.backgroundColor = input.value;
    })
})