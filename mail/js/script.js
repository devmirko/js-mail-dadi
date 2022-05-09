//lista di email nell'array

const email = ["giovanni@gmail.com","barbara@gmail.com","luca@gmail.com","massimo@gmail.com"];
// debug
console.log(email);

const myInput = document.querySelector("input");
console.log(myInput);


const myButton = document.querySelector("button");
console.log(myButton);

const myOutput = document.querySelector(".risultato");
console.log(myOutput);


//chiedi al utente la sua email
myButton.addEventListener("click",
    function(){
        let emailUser = myInput.value;
        for (let i = 0; i < email.length; i++) {
            if (email[i] === emailUser) {
                console.log("sei entrato");
                myOutput.innerHTML = '<h2>benvenuto nel nostro sito</h2>'
               
            } else {
                
               
            }
        }
    }

)




