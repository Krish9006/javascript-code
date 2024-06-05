// document.body.addEventListener("click",function(){
//     const randomcolor ='#' + Math.floor(Math.random() * 1677215).toString(16);
//     console.log(randomcolor);
//     document.body.style.backgroundColor=randomcolor;
// });

const btn = document.querySelector("button");
btn.addEventListener("click",function(){
    const randomcolor ='#' + Math.floor(Math.random() * 1677215).toString(16);
    console.log(randomcolor);
    document.body.style.backgroundColor=randomcolor;
})
