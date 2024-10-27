document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.login-container .register a');
    const signupLink = document.querySelector('.signup-container .register a');
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');
    const forgotLink = document.querySelector('.login-container .forgot a');
    const forgotContainer = document.querySelector('.forgot-container');

    // Event for switching to Signup form
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'flex';
    });

    // Event for switching back to Login form
    signupLink.addEventListener('click', function (e) {
        e.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'flex';
    });

    // Event for switching to Forgot Password form
    forgotLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        forgotContainer.style.display = 'flex';
    });

    // Event for returning from Forgot Password to Login form
    forgotContainer.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        forgotContainer.style.display = 'none';
        loginContainer.style.display = 'flex';
    });
});
