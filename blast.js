let display=document.getElementById("display")
let img1=document.getElementById("img1")
let blast=document.getElementById("blast")
let timeleft=10
let timer;
function startTimer(){
    display.textContent=`Remaining Time: ${timeleft}s`
}
blast.addEventListener("click",()=>{
    img1.src="./images.jpg"
    timeleft=10
    display.textContent=`Remaining Time: ${timeleft}s`
    timer=setInterval(() => {
        timeleft--;
        if(timeleft<=0){
            clearInterval(timer)
            img1.src="./download.png"
            display.textContent="BOOM!"
            return
        }
        startTimer()
    },1000);
})
