let password = document.getElementById("password").value;
let passConfirm = document.getElementById("passFirm").value;

function testPass(password,passConfirm){
    if(password == passConfirm){
        return true;
    }
    else{
        return false;
    }
}