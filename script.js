let display = document.getElementById('display');

function appendChar(input){
    display.value += input
}

function clearInput(){
    display.value = ""
}

function calculate(){
    try{
        display.value  = eval(display.value)
    }
    catch(err){
        display.value = "Error"
    }
}