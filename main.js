// const database = firebase.database().ref();
// function updateDB(event) {
//     event.preventDefault();
//     const username = usernameElement.value;
//     const password = messageElement.value;
//     const email = emailElement.value;

//     usernameElement.value = "";
//     passwordElement.value = "";
//     emailElement.vaule = "";

//     console.log(username + " : " + password + " : " + email);

//     //Update database here
//     const value = {
//         NAME: username,
//         PASSWORD : password,
//         Email : email
//     }
//     database.push(value);
// }
// // const messageContainer = document.querySelector(".allMessages");
// // // Set database "child_added" event listener here
// // database.on("child_added",addMessageToBoard);

// // function addMessageToBoard(rowData){
// //     const row = rowData.val();
// //     const name = row.NAME;
// //     const message = row.MESSAGE;
// //     const pElement = document.createElement("p");

// //     pElement = document.createElement("p");
// //     pElement.innerText = name + " : " + message;
// //     messageContainer.appendChild(Element);

// // }

// const auth = firebase.auth();
// auth.signInWithEmailAndPassword(email, pass);


const database = firebase.database().ref();
const emailElement = document.getElementById("signUpEmail");
const passwordElement = document.getElementById("signUpPassword");
const signUpBtn= document.getElementById("signUpButton");

signUpBtn.addEventListener("click",updateDB);


function updateDB(event) {
    event.preventDefault();
    const Email = emailElement.value;
    const Password = passwordElement.value;

    emailElement.value = "";
    passwordElement.value = "";

    console.log(Email + " : " + Password);

    //Update database here
    const value = {
        EMAIL: Email,
        PASSWORD : Password
    }
    database.push(value);
}

