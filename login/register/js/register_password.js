let eye = document.getElementById('password_eye');
eye.addEventListener('click', () => {
    var pass_input = document.getElementById("password");
    if (pass_input.type === "password") {
        pass_input.type = "text";
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye');
        } else {
        pass_input.type = "password";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        }
})