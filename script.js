    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');
    let signupForm = document.querySelector('#signupForm');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateEmail() {
        let email = emailInput.value;
        if (email.length > 3 && email.includes('@') && email.includes('.')) {
            emailError.textContent = '';
            emailInput.classList.add('done');
        } else {
            emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
           
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length > 8) {
            passwordError.textContent = 'All good!';
            passwordError.classList.remove('error');
            passwordError.classList.add('success');
            
            
        } else {
            passwordError.textContent = 'Make sure password is more than 8 characters.';
            passwordInput.classList.add('done');
        }
    }

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (emailInput.classList.contains('done') && passwordInput.classList.contains('done')) {
            if (confirm('Do you want to sign up?')) {
                alert('Successful signup!');
                window.location.href = window.location.href;
                emailInput.value = '';
                passwordInput.value = '';
            } else {
                
                window.location.href = window.location.href;
                emailInput.value = '';
                passwordInput.value = '';
            }
        } else {
            alert('Please fill the details');
        }
    });