const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxLength = 200;

textarea.addEventListener("input", function(){

    let textLength = textarea.value.length;

    counter.textContent = textLength + " / " + maxLength + " characters";

    if(textLength > maxLength){
        textarea.value = textarea.value.substring(0, maxLength);
        warning.textContent = "Character limit exceeded!";
    }
    else if(textLength === maxLength){
        warning.textContent = "Maximum characters reached!";
    }
    else{
        warning.textContent = "";
    }

});