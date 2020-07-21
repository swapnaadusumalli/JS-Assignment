let i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);




const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);



function changeColor(){
    var dmode = document.getElementById("dark");
    dmode.style.backgroundColor = 'black';
    dmode.style.color = 'white';
   
}
setInterval(changeColor,2000);