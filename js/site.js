//get the string from the page

function getPhrase(){
    document.getElementById("alert").classList.add("invisible");
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;


    let userPhrase = document.getElementById("userPhrase").value;
    let  isPalindrome =  checkIfPalindrome(userPhrase.toLowerCase().replace(/\s+/g, '').replace(regex, ''));

    displayPalindrome(isPalindrome);
}

function checkIfPalindrome(userPhrase){

    //reverse string
    let revString = [];

for (let index = userPhrase.length-1; index >= 0; index--) {
    revString += userPhrase[index];
    
}

//check if rev is same as user string
    if(revString == userPhrase){
        return true;
    } else{
        return false;
    }


}

function displayPalindrome(isPalindrome){
    if(isPalindrome){
        let result = "is a palindrome";
        document.getElementById("msg").innerHTML = `Congrats! Your word/phrase ${result}.`;
        document.getElementById("alert").classList.remove("invisible");

    }else{
        let result = "is not a palindrome";
        document.getElementById("msg").innerHTML = `I'm Sorry! Your word/phrase ${result}.`;
        document.getElementById("alert").classList.remove("invisible");
    }

}