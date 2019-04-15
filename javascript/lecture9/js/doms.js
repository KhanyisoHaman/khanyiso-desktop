// Manipulating the DOMS (Document Object Model)

// modify documents after they have finshed loading- add new content to a page, change the color of an element to reflect a changing state, or remove an element the user does not need anymore;






// document.getElementByIdTagName()
// document.getElementByClassName()
// documnet.querySelector()
// document.getElementById()


// function changeColor(newColor) {
//     let btn = document.getElementById('text');
//     btn.style.color = newColor;
// }

// function westFunction(showText) {
//     let words = document.getElementById('west');
//     if (words.style.display === "block") {
//         words.style.display = "none";
//     } else {
//         words.style.display = "block";
//     }
// }

// document.getElementById('textOne').ondblclick = changeText;

// function changeText() {
//     document.getElementById("text").innerHTML = "I am the legend of legends";
//     document.getElementById('text').style.backgroundColor = 'green' ;
//     document.getElementById('text').style.fontSize = "20px";
// }




// NEVER TRUST USER INPUT

// It is vital to vaildate user input before sending it to a server (and again once it arrives there, but let's take things one step at time!).

// Vaildation can be as simple as making sure that type of data is correct (number vs string, valid email address, etc); it can be more complex- checking for  password strength, for example, or parsing a comment to make sure it contains no URLs.

// During input

// const passwordInput = document.getElementById('password-input');
// const submitButton = document.getElementById('submit-button');

// passwordInput.addEventListener('input', ($event) => {
//     if ($event.target.value.length >= 6 &&  $event.target.value.length <= 12) {
//         submitButton.removeAttribute("disabled");
//     } else {
//         submitButton.setAttribute("disabled", "true");
//     }
// });


// If input event is triggered whenever the user enters data into given < input > elemenet. We can use this to check data as it is entered.

// After Input 

    //Add a blur event listener to the comfirm Password element.

    // Compare the value properties of both inputs.

        // if theya are the same, set the border styles to the thin solid green and set the display style or error so that it disappears

        // If they are different, set the border styles to thin solid red and set the display style of error Msg so that it appears


const passwordInput = document.getElementById('password-validation');
const confirmPassword = document.getElementById('confirm-password');

let error = document.getElementById('error');

// if (passwordInput === confirmPassword) {
//     passwordInput.style.border = "thin solid green";
//     confirmPassword.style.border = "thin solid green"; 
// } else {
//     passwordInput.style.border = "thin solid red";
//     confirmPassword.style.border = "thin solid red";    
// }

confirmPassword.addEventListener('blur', () => {
    if (passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = " solid green";
        confirmPassword.style.border = " solid green";
        error.style.display = "none"
    } else {
        passwordInput.style.border = "solid red";
        confirmPassword.style.border = " solid red"; 
        error.style.display = "inline"
    }
});