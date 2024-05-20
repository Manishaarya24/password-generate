const PasswordBox = document.getElementById("");
const letgth = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "123456789";
const symbol = "@#$%^&*()_|}{[]></-=";



const allchars = upperCase + lowerCase + number + symbol;


function createPassword(){
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];


    while (length > Password.length){
        Password += symbol[Math.floor(Math.random() * allchars.length)];
    }
    PasswordBox.value = Password;
}
console.log(PasswordBox)






































                 
