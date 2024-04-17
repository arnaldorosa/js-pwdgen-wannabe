let userName = prompt ("Inserisci il tuo nome");
let userLastName = prompt ("Inserisci il tuo cognome");
let userColor = prompt ("Inserisci il tuo colore preferito");

const userPassword = userName + userLastName + userColor + "#24";

document.getElementById('result-name').innerHTML = "Il mio nome è" + " " + userName;
document.getElementById('result-lastname').innerHTML = "Il mio cognome è" + " " + userLastName;
document.getElementById('result-color').innerHTML = "Il mio colore preferito è" + " " + userColor;
document.getElementById('result-password').innerHTML = "La mia password è" + " " + userPassword;