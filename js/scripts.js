$(document).ready(function(){
  $(".form").submit(function(){
    var num1 = parseInt($("input#num1").val());
    var num2 = parseInt($("input#num2").val());
    if(num1 || num2 === null){
      $("#empty-value").show();
    } else if (isNaN(num1) || isNaN(num2)){
      $("#Nan-value").show();
    } else if (num1 < 0 || num2 < 0){
      $("#negative-value").show();      
    } else {
      $("#larger-than-value").show();
    }



  })
})

//add loop to handle negative numbers
//return error if one num is neg and other is pos
