// Credențiale hardcodate
const VALID_CREDENTIALS = {
    email: 'admin@sushi.md',
    password: 'admin123'
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginMessage = document.getElementById('loginMessage');
    const loginButton = document.getElementById('loginButton');

    // Regex pattern pentru email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !password) {
            alert('Vă rugăm completați toate câmpurile!');
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Formatul email-ului este invalid!\nExemplu valid: nume@domain.com');
            return;
        }

        // Verifică credențialele hardcodate
        if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
            alert('Bine ai venit, Administrator!');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
            return;
        }

        // Verifică utilizatorii din localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`Bine ai venit, ${user.nume} ${user.prenume}!`);
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            const emailExists = users.some(u => u.email === email);
            if (emailExists) {
                alert('Parola introdusă este incorectă!');
            } else {
                alert('Nu există cont cu acest email!');
            }
        }
    });

    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '#4CAF50';
            }
        });
    });

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.dispatchEvent(new Event('submit'));
    });
}); 