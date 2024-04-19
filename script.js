document.addEventListener('DOMContentLoaded', function() {
    var email = document.getElementById('email');
    var emailver = document.getElementById('emailver');
    var error = document.getElementById('error');

    emailver.addEventListener('input', function() {
        if(email.value === emailver.value) {
            error.textContent = "Email's Match";
            error.style.color = 'green';
        } else {
            error.textContent = "Emails Do Not Match";
            error.style.color = 'red';
        }
    })
})

