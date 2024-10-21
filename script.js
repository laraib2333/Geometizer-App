function Calculate(){
  let radius =document.getElementById('radius').value;
   let circumference =2*Math.PI*radius;
 let area =Math.PI*(radius*radius);
    document.getElementById('message').innerText =
     `Radius of a circle: ${radius}  
    The circumference is: ${circumference} 
    The area is: ${area} `
}

function reset(){

    document.getElementById('radius').value = "";
    document.getElementById('message').innerText = "";
    }
 
