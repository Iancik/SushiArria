document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const numeInput = document.getElementById('nume');
    const prenumeInput = document.getElementById('prenume');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Regex patterns
    const patterns = {
        nume: /^[A-Za-zĂăÎîȘșȚț\s]{2,30}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    };

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!numeInput.value.trim()) {
            alert('Introduceți numele!');
            return;
        }
        if (!patterns.nume.test(numeInput.value)) {
            alert('Numele poate conține doar litere și spații (2-30 caractere)');
            return;
        }

        if (!prenumeInput.value.trim()) {
            alert('Introduceți prenumele!');
            return;
        }
        if (!patterns.nume.test(prenumeInput.value)) {
            alert('Prenumele poate conține doar litere și spații (2-30 caractere)');
            return;
        }

        if (!emailInput.value) {
            alert('Introduceți email-ul!');
            return;
        }
        if (!patterns.email.test(emailInput.value)) {
            alert('Format email invalid!\nExemplu: nume@domain.com');
            return;
        }

        if (!passwordInput.value) {
            alert('Introduceți parola!');
            return;
        }
        if (!patterns.password.test(passwordInput.value)) {
            alert('Parola trebuie să conțină:\n' +
                  '- Minim 8 caractere\n' +
                  '- Cel puțin o literă mare (A-Z)\n' +
                  '- Cel puțin o literă mică (a-z)\n' +
                  '- Cel puțin un număr (0-9)\n' +
                  '- Cel puțin un caracter special (@$!%*?&)');
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Parolele nu coincid!');
            return;
        }

        const newUser = {
            nume: numeInput.value,
            prenume: prenumeInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.email === emailInput.value)) {
            alert('Există deja un cont cu acest email!');
            return;
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Înregistrare reușită! Veți fi redirecționat către pagina de login...');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    });
});
