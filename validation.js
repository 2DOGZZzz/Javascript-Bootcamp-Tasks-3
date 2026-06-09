
const form = document.getElementById('RegstrForm');
const UsernameError = document.getElementById('UsernameError');
const EmailError = document.getElementById('EmailError');
const PasswordError = document.getElementById('PasswordError');
const TermsError = document.getElementById('TermsError');
const ResendBtn = document.getElementById('ResendBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    //  default inputs values 
    const UsernameInput = document.getElementById('Username').value.trim();
    const EmailInput = document.getElementById('Email').value.trim();
    const PasswordInput = document.getElementById('Password').value;
    const TermsInput = document.getElementById('TermsChecked'); 

    // clearing post errors
    clearErrorMsg();

    let Validation = true;

    // Validation of inputs
    if (!UsernameInput) {
        setError(document.getElementById('Username'), UsernameError, "Username Field Is Required.");
        Validation = false;
    }

    if (!EmailInput) {
        setError(document.getElementById('Email'), EmailError, "Email Field Is Required.");
        Validation = false;
    } else if (!/\S+@\S+\.\S+/.test(EmailInput)) {
        setError(document.getElementById('Email'), EmailError, "Please enter a valid email address.");
        Validation = false;
    }

    if (!PasswordInput) {
        setError(document.getElementById('Password'), PasswordError, "Password Fiel Is Required.")
        Validation = false;
    } else if (PasswordInput.length < 8) {
        setError(document.getElementById('Password'), PasswordError, "Password must be at least 8 characters.");
        Validation = false;
    }

    if (!TermsInput || !TermsInput.checked) {
        setError(TermsInput, TermsError, "You must accept the terms and conditions !.");
        Validation = false;
    }

    
    if (Validation) {
        alert('Form submitted successfully!');
        form.reset();
        clearErrorMsg();
    }
});
// function for clearing Error Messages 
function clearErrorMsg() {
    const Errors = [UsernameError, EmailError, PasswordError, TermsError];
    
    const Inputs = [
        document.getElementById('Username'),
        document.getElementById('Email'),
        document.getElementById('Password'),
        document.getElementById('TermsChecked')
    ];
    
    Errors.forEach(span => {
        if (span) span.textContent = "";
    });
    
    Inputs.forEach(input => {
        if (input) input.style.borderColor = "var(--IputBorder)";
    });
}

//function for setting error messages 
function setError(inputElement, errorSpan, message) {
    if (errorSpan) errorSpan.textContent = message;
    if (inputElement && inputElement.style) {
        inputElement.style.borderColor = "var(--ErrorColor)";
    }
}

// countdown timer for resend button 
let TimeCounter = 10;
const countdownInterval = setInterval(function() {
    TimeCounter--;
    if (TimeCounter > 0) {
        ResendBtn.textContent = `Resend Verification (${TimeCounter}s)`;
    } else {
        clearInterval(countdownInterval);
        ResendBtn.textContent = "Resend Verification";
        ResendBtn.removeAttribute('disabled');
    }
}, 1000);
