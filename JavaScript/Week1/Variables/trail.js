function displayUserDetails(){}

let username = prompt("enter user your username")

console.log(validateUsername(username))

while 
(validateUsername(username)==false){
    username = prompt(" please enter your username again")
}



let password = prompt("enter your password ")
console.log(validatePassword(password))

while 
(validatePassword(password)==false){
    password = prompt(" please enter more than 6 characters")
}


alert("thank you")




function validateUsername(username){
    if(username==null){
        return true
    }
    if ( username.length  > 10) {
        return false
    } 
else{
    return true 
}
    
}

function validatePassword(password){

    if (password>6){
    return true}

else{
return false
}

}
