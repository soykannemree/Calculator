var num1 = [];
var num2 = [];
var clickedButton = [];

var firstNum;
var secondNum;

var operator;

var result = 0;

var start = false;


//which button clicked
$( ".button" ).on( "click", function() {
    
    //to check the character that from the keyboard had taken
    var clickedButton= (this.id);

    if(clickedButton!="AC"){
       
        if (start==false) {

            if(operator!="="){

                if(clickedButton!="+" && clickedButton!="x" && clickedButton!="-" && clickedButton!="/"){
                    num1+=clickedButton;
                    $("h1").text(num1);
                }
                else{
                    firstNum = parseInt($("h1").innerHTML);
                    result+=parseInt(firstNum);
                    start=true;
                    operator=clickedButton;
                    $("h1").text("");
                    if(clickedButton!="+" && clickedButton!="x" && clickedButton!="-" && clickedButton!="/"){
                        num2+=clickedButton;
                        $("h1").text(num2);
                    }
        
                    //check
                    console.log(operator);
                    console.log(parseInt(firstNum));
                }
            }          
        } 
        else {
            
            $("h1").text("");
            result+=parseInt(secondNum);
            if(clickedButton!="="){
                num2+=clickedButton;
                $("h1").text(num2);
            }
            else
            {
                result = transaction(num1,num2,operator);
                $("h1").text(result);
            }
  
        }

    }
    else{
        start=false;
        result=0;
        num1=0;
        num2=0;
        $("h1").text("0");
    }

} );


//All processes
function transaction(num1,num2,operator) {
    switch (operator) {
        case '/':
            div(num1,num2);            
            break;
         case '*':
            mult(num1,num2);            
            break;
        case '-':
            min(num1,num2);            
            break;
        case '+':
            add(num1,num2);            
            break;
        default:
            break;
    }
}


function operatorFind(operator){
    $(".button").on("click", function(){
        
    });
}
//all processes how they work
function add(num1,num2) {
    var result =  num1+num2;    
}
function mult(num1,num2) {
    var result = num1*num2; 
}
function min(num1,num2) {
    var result = num1-num2;  
}
function div(num1,num2) {
    var result = num1/num2;
}
