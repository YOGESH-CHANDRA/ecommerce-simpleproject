// login pragramming

document.getElementById("btn").addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    if ((email == "") || (password == "")) {
        alert("Please enter the login credentials");
    }
    else if ((email === "admin@admin.com") && (password === "123456")) {
        alert("Login successful");
    }
    else {
        alert("Incorrect email or password");
    }
})