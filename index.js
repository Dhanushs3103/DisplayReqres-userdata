let main = document.getElementById("main");
let fetchButton = document.getElementById("fetchUsers");
let url = "https://reqres.in/api/users?page=2";
let h1 = document.getElementById("h1");

let data = [];
    fetchButton.addEventListener("click", () => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            data =res.data;
            console.log(data);
            displayData(data);
        })
        .catch(() => {
            console.log("error")
        })

        function displayData(data) {
            data.forEach((userData) => {
                // div creation
                let userDiv = document.createElement("div");
                userDiv.className = "userDiv";
                // Image creation
                let userImg = document.createElement("img");
                userImg.src = userData.avatar;
                // name creation
                let userName = document.createElement("p");
                userName.textContent = `Name: ${userData.first_name} ${userData.last_name}`;
                // email creation
                let userEmail = document.createElement("p");
                userEmail.textContent = `Email: ${userData.email}`;
                // appending the all the elements to userDiv
                userDiv.append(userImg, userName, userEmail);
                main.append(userDiv);
            });
    
        }
    })

   

