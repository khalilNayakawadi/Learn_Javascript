// Events are the actions which occurs when user interacts with the browser.
// Events can also araised by system.

let div = document.querySelector("div");
let modeBtn = document.querySelector("button");
let pageMode = "light";
modeBtn.addEventListener("click",()=>{
        if(pageMode === "light"){
            pageMode = "dark"
            div.classList.add("darkmode")
            modeBtn.classList.add("btndark")
            div.classList.remove("container")
        }else{
            pageMode = "light"
            div.classList.add("container")
            modeBtn.classList.remove("btndark")
            div.classList.remove("darkmode")
        }
})
