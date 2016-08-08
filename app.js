
 var c = document.getElementById('canvas');
 var ctx = c.getContext('2d');
 
 var gradient = ctx.createLinearGradient(0,0,0,500);
 gradient.addColorStop(0, '#ccf2ff');
 gradient.addColorStop(1, '#ffc6b3');
 
 
 ctx.fillStyle = gradient;
 ctx.fillRect(0,0,1000,500);
 
 //house
 //ctx.fillStyle = 'black';
 //ctx.fillRect(200, 300, 100, 200);
 
 //rainbow
 var rainbow = ctx.createRadialGradient(500,250,50,500,250,70);
 rainbow.addColorStop(0, 'red');
 rainbow.addColorStop(0.5, 'orange');
 rainbow.addColorStop(1, 'blue');
 
 ctx.fillStyle = rainbow;
 ctx.beginPath();
 ctx.arc(500,250,70,0,2*Math.PI);
 ctx.fill();