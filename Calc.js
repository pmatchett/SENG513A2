$(document).ready(function(){
  //assigning the event handlers for all the basic buttons
  $("#left").click(addToOut.bind(this, '('));
  $("#right").click(addToOut.bind(this, ')'));
  $("#9").click(addToOut.bind(this, '9'));
  $("#8").click(addToOut.bind(this, '8'));
  $("#7").click(addToOut.bind(this, '7'));
  $("#6").click(addToOut.bind(this, '6'));
  $("#5").click(addToOut.bind(this, '5'));
  $("#4").click(addToOut.bind(this, '4'));
  $("#3").click(addToOut.bind(this, '3'));
  $("#2").click(addToOut.bind(this, '2'));
  $("#1").click(addToOut.bind(this, '1'));
  $("#0").click(addToOut.bind(this, '0'));
  $("#dec").click(addToOut.bind(this, '.'));
  $("#mult").click(addToOut.bind(this, '*'));
  $("#add").click(addToOut.bind(this, '+'));
  $("#sub").click(addToOut.bind(this, '-'));
  $("#divide").click(addToOut.bind(this, '/'));
  //assgning the event handler for the = button
  $("#equal").click(equalHandler());
  //assigning the event handler for the clear button
  $("#clear").click(function(){
    $("#input").text("");
  });
  //assigning the event handler for the back button
  $("#back").click(function(){
    let input = $("#input").text();
    input = input.slice(0,-1);
    $("#input").text(input);
  });
});

//closure that will be used to remember previous answer
function equalHandler(){
  let input = document.getElementById("input");
  let result;
  let previousResult;
  return function(){
    let formula = input.innerHTML;
    if(formula.charAt(0)==='+' || formula.charAt(0)==='-' || formula.charAt(0)==='*' || formula.charAt(0)==='/'){
      if(previousResult !== undefined){
        formula = previousResult + formula;
      }
    }
    try{
      result = eval(formula);
      previousResult = result;
      //result = result.toFixed(5);
    }
    catch(err){
      result = "Error";
    }
    $("#output").text(formula + " = " +result);
    input.innerHTML=result;
  }
}

//function that will add the button pressed to the current equation to be calculated
function addToOut(char){
  $("#input").append(char);
}
