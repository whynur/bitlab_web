let users = [
    {email:"ainur@mail.ru"},
    {email:"aliya@mail.ru"},
    {email:"askhat@mail.ru"}
];


function addUser() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let ret_password = document.getElementById('ret_password');
    let email_input = document.getElementById('email_input');
    let password_input = document.getElementById('password_input');
    let emailMessage = document.getElementById('emailMessage');
    let passwordMessage = document.getElementById('passwordMessage');
    let retpasMessage = document.getElementById('retpasMessage');


        if (email.value === users.email) {
            emailMessage.style = "display:block;color:red";
        }
        else if (password.value.length < 6){
            passwordMessage.style = "display:block;color:red";
        }




        // if(password.value.length > 6) {
        //
        // }
        // else {
        //     passwordMessage.innerHTML = "<span style = 'color:red;'>Password length at least must be 6 symbols</span>";
        // }
        //
        // if(password.value === ret_password.value) {
        //
        // }
        // else {
        //     retpasMessage.innerHTML = "<span style = 'color:red;'>Passwords are not same</span>";
        // }


}