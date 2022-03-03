var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0;



function setup() {
  createCanvas(400,400);
  for (var i=0; i<weight.lenght; i+1){
    sum = sum+weight[i];
  }
  var prom = sum/weight.lenght;
  console.log(prom);
}

function draw() 
{
  background(30);
}

 

