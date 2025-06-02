let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");
 result.style.margin= "20px";
 result.style.color="white";
 result.style.textShadow="2px 2px black ";


const calculateBoxesNeed = (humanAge) => {
console.log("run")

  
  let boxesNeed=(humanAge*364);
console.log(boxesNeed)
 result.innerHTML= `Your need ${boxesNeed} boxes to last a life time!`;
 result.style.fontFamily= 'Poppins', sans-serif;

}



equalsButton.addEventListener("click" , ()  => {

  
  console.log("click");
  
let x=input.value

console.log(x)

calculateBoxesNeed(x)


})



// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";

}
