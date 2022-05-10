//lista di email nell'array

const email = ["giovanni@gmail.com","barbara@gmail.com","luca@gmail.com","massimo@gmail.com"];
// debug
console.log(email);
// chiedi al utente la sua email
const myInput = document.querySelector("input");
console.log(myInput);

// l'utente manda l'input 
const myButton = document.querySelector("button");
console.log(myButton);
// output
const myOutput = document.querySelector(".risultato");
console.log(myOutput);

let mail = false
//controlla se l'email e presente nella lista 
myButton.addEventListener("click",
    function(){
        let emailUser = myInput.value;
        for (let i = 0; i < email.length; i++) {
            if (email[i] == emailUser) {
                mail = true
                console.log("sei entrato");
                document.getElementById("risultato").innerHTML = "benvenuto nel sito";
               
            } else {
               
               console.log("non sei entrato");
            }

        // se e presente accedi o no 

        if( mail == true){
            document.getElementById("risultato").innerHTML = "benvenuto nel sito";
        } else {
            document.getElementById("risultato").innerHTML = "non sei entrato";
        }


    }
 }

)




