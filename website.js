let url = "https://randomuser.me/api/?results=50";
let container = document.getElementById("main_container");
let filters = [];
let data;

function printJson(response) {
    return response.json();
};

document.getElementById("first").addEventListener("click", filterData);
document.getElementById("last").addEventListener("click", filterData);
document.getElementById("gender").addEventListener("click", filterData);

function filterData(event) {
    event.preventDefault();
    container.innerHTML = "";
    let input = document.getElementById("user_input").value;
    let buttonId = event.target.id;
    if (buttonId == "first") {
        let users = data.results.filter(function (user) {
            if (user.name.first.indexOf(input) != -1) {
                return user;
            }
        });
        displayUsers(users);
    }
    if (buttonId == "last") {
        let users = data.results.filter(function (user) {
            if (user.name.last.indexOf(input) != -1) {
                return user;
                }
        });
            displayUsers(users);
        }
    }

    fetch(url)
        .then(printJson)
        .then(function (myjson) {
            console.log(myjson)
            for (let i = 0; i < myjson.results.length; i++) {
                const fname = myjson.results[i].name.first.charAt(0).toUpperCase() + myjson.results[i].name.first.substring(1);
                const lname =  myjson.results[i].name.last.charAt(0).toUpperCase() + myjson.results[i].name.last.substring(1);
                const gender =  myjson.results[i].gender.charAt(0).toUpperCase() + myjson.results[i].gender.substring(1);
                const home  = myjson.results[i].location.street
                const email = myjson.results[i].email
                const pic = myjson.results[i].picture.large

                const div = document.createElement("div");
            div.setAttribute("class","profile")
                div.styles = {
                    "width": "50px"
                }
                //console.log(myjson.results[i].name.first)
                div.innerHTML = "<img class = 'picture'  src ='" + pic + "'/></div><div class = 'firstname' >"+fname + " " + lname + "</div><div class = 'gender'>" + gender + "</div><div class ='email'> " + email /*+ "</div><div class = 'home'>" + home */+ "</div>"
                let b1 = document.createElement("i");
                let a1 = document.createElement("a");
                b1.classList.add("fa")
                b1.classList.add("fa-snapchat")
                a1.appendChild(b1)
                div.appendChild(a1);
                let b2 = document.createElement("i");
                let a2= document.createElement("a");
                b2.classList.add("fa")
                b2.classList.add("fa-twitter")
                a2.appendChild(b2)
                div.appendChild(a2);
                let b3 = document.createElement("i");
                let a3 = document.createElement("a");
                b3.classList.add("fa")
                b3.classList.add("fa-linkedin")
                a3.appendChild(b3)
                div.appendChild(a3);
                let b4 = document.createElement("i");
                let a4 = document.createElement("a");
                b4.classList.add("fa")
                b4.classList.add("fa-facebook")
                a4.appendChild(b4)
                div.appendChild(a4);
                document.getElementById("people")
                let people = document.getElementById("people")
                people.appendChild(div)
                data = myjson
            }


        });

    function displayUsers(users) {
        for (let user of users) {
            appendUser(user);
        }
    }

    function appendUser(user) {
        let userElement = document.createElement("div");
        userElement.innerHTML = user.name.first + " " + user.name.last;
        userElement.innerHTML = user.gender + " " + user.email + " " + user.home;
        container.appendChild(userElement);
    }

// for (let i = 0; i < myjson.results.length; i++) {
//     const fname = myjson.results[i].name.first;
//     const lname = myjson.results[i].name.last;
//     const gender = myjson.results[i].gender;
//     const home = myjson.results[i].location.street
//     const email = myjson.results[i].email
//     const pic = myjson.results[i].picture.large;}

