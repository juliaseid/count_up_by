function countUpPos(num1, num2) {
  for (var i=0; i<=num1; i+=num2) {
    $(".output").text(i);
  }
}

function countDownNeg(num1, num2) {
  for (var i=0; i>=num1; i+=num2) {
    $(".output").text(i);
  }
}


$(document).ready(function(){
  $(".form").submit(function(){
    var num1 = parseInt($("input#num1").val());
    var num2 = parseInt($("input#num2").val());
    if(num1 === ""|| num2 === ""){
      $("#empty-value").show();
    } else if (isNaN(num1) || isNaN(num2)){
      $("#Nan-value").show();
    } else if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)){
      $("#negative-value").show();      
    } else if (Math.abs(num1) < Math.abs(num2)){ 
      $("#larger-than-value").show();
    } else if (num1 < 0){
      countDownNeg(num1, num2);
    }
    else{
      countUpPos(num1, num2)
    }
    event.preventDefault();


  })
})

//add loop to handle negative numbers
//return error if one num is neg and other is pos
