const name = document.getElementById("friendName");
const email = document.getElementById("friendEmail");

name.addEventListener("input", function (event) {
    if(name.validity.tooShort) {
        name.setCustomValidity("Nome não pode ser vazio");
        return "";
    } 
    if(name.validity.valueMissing){
        name.setCustomValidity("Por favor me preencha!");
        return "";
    }
    name.setCustomValidity("");
  });

email.addEventListener("input", function (event) {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Email precisa ser válido: conter @ e um dominio \(ex \'.br\'\)");
        return "";
    } 
    if(email.validity.valueMissing){
        name.setCustomValidity("Por favor me preencha!");
        return "";
    }
    email.setCustomValidity("");
});