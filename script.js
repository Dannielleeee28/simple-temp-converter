const tempValue = document.getElementById("tempValue");
const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
const result = document.getElementById("result");
let temp;

function convert(){
   
   if(CtoF.checked){
      temp = Number(tempValue.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "°F";
   }
   else if(FtoC.checked){
      temp = Number(tempValue.value);
      temp = (temp - 32) * (5/9);
      result.textContent = temp.toFixed(1) + "°C";
   }
   else{
      result.textContent= "Select a unit.";
   }
} 