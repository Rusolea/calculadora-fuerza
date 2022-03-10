 function calculateRm(weigth, rep) {
        const repMAx = weigth * rep * 0.0333 + parseFloat (weigth);
        return Math.round (repMAx);
}
      
function onClickButtonCalculateRm() {
        const inputWeigth = document.getElementById("InputWeigth");
        const weigthValue = inputWeigth.value;
        
        const inputRep = document.getElementById("InputRep");
        const repValue = inputRep.value;
      
        const calculateOneRep = calculateRm(weigthValue, repValue);
     
        

        document.getElementById("oneRep").value = Math.floor(calculateOneRep) ;
        document.getElementById("twoRep").value = Math.floor(calculateOneRep * 0.95);
        document.getElementById("threeRep").value = Math.floor(calculateOneRep * 0.90);
        document.getElementById("fourRep").value = Math.floor(calculateOneRep * 0.88);
        document.getElementById("fiveRep").value = Math.floor(calculateOneRep * 0.86);
        document.getElementById("sixRep").value = Math.floor(calculateOneRep * 0.83);
        document.getElementById("sevenRep").value = Math.floor(calculateOneRep * 0.80);
        document.getElementById("eightRep").value = Math.floor(calculateOneRep * 0.78);
        document.getElementById("nineRep").value = Math.floor(calculateOneRep * 0.76);
        document.getElementById("tenRep").value = Math.floor(calculateOneRep * 0.75);
        document.getElementById("elevenRep").value = Math.floor(calculateOneRep * 0.72);
        document.getElementById("twelveRep").value = Math.floor(calculateOneRep * 0.70);
        document.getElementById("thirteenRep").value = Math.floor(calculateOneRep * 0.62);
        document.getElementById("fourteenRep").value = Math.floor(calculateOneRep * 0.58);
        document.getElementById("fifteenRep").value = Math.floor(calculateOneRep * 0.56);  
        
        


}
 

