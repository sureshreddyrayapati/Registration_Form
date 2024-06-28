var fullnameH = document.getElementById("fullname").value;

function function1()
{
    var fullname = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phnum = document.getElementById("phnum").value;
    var pass = document.getElementById("pass").value;
    var confPass = document.getElementById("confPass").value;
    if (pass !== '' && confPass !== '') {
        if (pass === confPass) {
            showDialog("Registration Successful\n" +
                "Full Name: " + fullname + "\n" +
                "Username: " + username + "\n" +
                "Email: " + email + "\n" +
                "Phone Number: " + phnum
            );
        } else {
            alert("Password does not match");
        }
    }
}

function showDialog(message) {
    document.getElementById('dialogMessage').innerText = message;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('customDialog').style.display = 'block';
}

function closeDialog(isConfirmed) {
    if (isConfirmed) {
        // Clear the form fields
        window.location.href='HomePage.html';
    }
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('customDialog').style.display = 'none';
}
document.getElementById('text').textContent=fullnameH;