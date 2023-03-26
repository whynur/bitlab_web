let users = [
    {login:"Ainur",password:"12345"},
    {login:"Aliya",password:"qwerty"},
    {login:"Askhat",password:"00000"}
];

function check() {
    let login = document.getElementById('login');
    let password = document.getElementById('password');

    for (let i = 0; i < users.length; i++) {
        if (login.value === users[i].login && password.value === users[i].password) {
            alert("You are authenticated");
        }
        else {
            login.style = "border:1px solid red";
            password.style = "border:1px solid red";
        }
    }
}
