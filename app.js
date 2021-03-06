// function drawBird(x,y){

 var c = document.getElementById('canvas');
 var ctx = c.getContext('2d');

 var gradient = ctx.createLinearGradient(0,0,0,500);
 gradient.addColorStop(0, '#ccf2ff');
 gradient.addColorStop(1, '#ffc6b3');


 ctx.fillStyle = gradient;
 ctx.fillRect(0,0,1000,500);


 //rainbow
 var rainbow = ctx.createRadialGradient(500,250,80,500,250,100);
 rainbow.addColorStop(0, 'transparent');
 rainbow.addColorStop(0.15, 'rgba(255,0,0,.35)');
 rainbow.addColorStop(0.3, 'rgba(155,160,0,.35)');
 rainbow.addColorStop(0.45, 'rgba(255,255,0,.35)');
 rainbow.addColorStop(0.6, 'rgba(51,221,0,.35)');
 rainbow.addColorStop(0.75, 'rgba(17,51,204,.35)');
 rainbow.addColorStop(0.9, 'rgba(34,0,102,.35)');
 rainbow.addColorStop(1, 'rgba(51,0,68,.35)');

 ctx.fillStyle = rainbow;
 ctx.beginPath();
 ctx.arc(500,250,100,0,2*Math.PI);
 ctx.fill();

 // stores current image
 bg_img = ctx.getImageData(0,0,1000,500);


 function drawBird(x,y){
   ctx.clearRect(0,0,1000,500);
   ctx.putImageData(bg_img,0,0);
   ctx.fillStyle = 'green';
   ctx.fillRect(x, y, 50, 50);
   x += 1;
   y += Math.random() < 0.5 ? -5 : 5;
   var loopTimer = setTimeout('drawBird('+x+','+y+')', 1);
 }

//bird(s)
