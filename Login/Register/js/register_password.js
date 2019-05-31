console.log('register_password JS');

let eye1 = document.getElementById('password_eye1');
eye1.addEventListener('click', () => {
    var pass_input = document.getElementById("password1");
    if (pass_input.type === "password") {
        pass_input.type = "text";
        eye1.classList.add('fa-eye-slash');
        eye1.classList.remove('fa-eye');
        } else {
        pass_input.type = "password";
        eye1.classList.remove('fa-eye-slash');
        eye1.classList.add('fa-eye');
        }
})

let eye2 = document.getElementById('password_eye2');
eye2.addEventListener('click', () => {
    var pass_input = document.getElementById("password2");
    if (pass_input.type === "password") {
        pass_input.type = "text";
        eye2.classList.add('fa-eye-slash');
        eye2.classList.remove('fa-eye');
        } else {
        pass_input.type = "password";
        eye2.classList.remove('fa-eye-slash');
        eye2.classList.add('fa-eye');
        }
})