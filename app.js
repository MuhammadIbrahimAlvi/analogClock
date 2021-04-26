const audioObj = new Audio('audio.mp3');

// Rotation Function
function rotateClock(){
    var time = new Date();
    var hd = 360.0 * time.getHours() / 12 + 30.0 * time.getMinutes() / 60;
    var md = 360.0 * time.getMinutes() / 60 + 6.0 * time.getSeconds() / 60;
    var sd = 360.0 * time.getSeconds() / 60 + 6.0 * time.getMilliseconds() / 1000;
    
    document.getElementById("hour-hand").style.transform = "rotate(" + hd + "deg)";
    document.getElementById("min-hand").style.transform = "rotate(" + md + "deg)";
    document.getElementById("second-hand").style.transform = "rotate(" + sd + "deg)";
let output="";
output=`<h5>${time.toTimeString()}</h5>`
    document.querySelector('.curr-time').innerHTML=output
  
}

document.body.addEventListener('click',()=>{
   
        audioObj.play();
    
 
})






setInterval(rotateClock,1000)






