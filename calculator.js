var num1 = 0;
var num2 = 0;

var inputNumber = '0';

var operator = null;

var result = 0;

//first screen value
show(result);


//which button clicked
$( ".button" ).on( "click", function() {
    let clickedButton = $(this).html();
    console.log(clickedButton)

    if (clickedButton ==="AC") {
        result = 0;
        inputNumber = '0';
    }
    else if (clickedButton==='+' || clickedButton==='-' || clickedButton==='x' || clickedButton==='/') {
        num1 = parseInt(inputNumber);
        operator = clickedButton;
        inputNumber = '';
    }
    else if(clickedButton === '='){
        inputNumber = transaction(num1,inputNumber,operator);
        operator = null;
    }
    else{
        if (inputNumber === '0'){
            inputNumber = clickedButton;
        } 
        else{
            inputNumber = inputNumber + clickedButton;
        } 
    }

    show(inputNumber);

});

function show(results) {
    var results = results.toString();
    $("h1").html(results);
}
  

//All processes
function transaction(num1,num2,operator) {
    num1 = parseInt(num1);
    num2 =parseInt(num2);
    switch (operator) {
        case '/':
            return num1/num2;         
         case 'x':
            return num1*num2;            
        case '-':
            return num1-num2;      
        case '+':
            return num1+num2;            
        default:
            break;
    }
}
