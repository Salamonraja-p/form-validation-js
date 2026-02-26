document.getElementById("form-validate").addEventListener('submit', function(event) {

    event.preventDefault();

    let usernmae = document.getElementById("userName").value.trim()
    let email = document.getElementById("Email").value.trim()
    let password = document.getElementById("Password").value.trim()
    let confromPassword = document.getElementById("ConformPassword").value.trim()

    let isValue = false;


    let usernamepatter = /^[A-Za-z]+ [A-Z a-z]+$/
    let emailpatteren = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/


    if (usernmae === "") {
        document.getElementById("unameError").innerText = "Name is Required"
        let isValue = false;
    } else if (!usernamepatter.test(usernmae)) {
        document.getElementById("unameError").innerText = "Enter Your full name"
        let isValue = false;
    } else if (usernamepatter.test(usernmae)) {
        document.getElementById("unameError").innerText = ""
        let isValue = true;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is Required"
        let isValue = false;
    } else if (!emailpatteren.test(email)) {
        document.getElementById("emailError").innerText = "Enter correct Email"
        let isValue = false;
    } else if (emailpatteren.test(email)) {
        document.getElementById("emailError").innerText = ""
        let isValue = true;
    }


    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is Required"
        let isValue = false;
    } else if (password.length < 4 || password.length > 10) {
        document.getElementById("passwordError").innerText = "Enter the password char at 4 to 10"
        let isValue = false;
    } else if (password.length >= 4 || password.length <= 10) {
        document.getElementById("passwordError").innerText = ""
        let isValue = true;
    }

    if (confromPassword === "") {
        document.getElementById("conformError").innerText = " Conform Password is Required"
        let isValue = false;
    } else if (confromPassword !== password) {
        document.getElementById("conformError").innerText = "Pattern Not Match"
        let isValue = false;
    } else if (confromPassword == password) {
        document.getElementById("conformError").innerText = ""
        let isValue = true;
    }

    if (isValue) {
        alert(`Hi ${usernmae},Welcome our`)
    }
})