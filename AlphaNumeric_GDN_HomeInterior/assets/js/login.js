window.onload = function() {
    // Load users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const signUpForm = document.querySelector('.sign-up-container form');
    const signInForm = document.querySelector('.sign-in-container form');
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');

    // Switch to Sign In
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    // Switch to Sign Up
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    // Redirect to index page
    function redirectToIndexPage() {
        window.location.href = '/AlphaNumeric_GDN_HomeInterior/index.html'; // Adjust the path
    }

    // Sign Up
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = signUpForm.elements[0].value;
        const email = signUpForm.elements[1].value;
        const password = signUpForm.elements[2].value;

        if (name && email && password) {
            const existingUser = users.find(user => user.email === email);
            if (existingUser) {
                alert('User already exists!');
            } else {
                users.push({ name, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('loggedInEmail', email);
                alert('Registration successful! Redirecting to index page...');
                redirectToIndexPage();
            }
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Sign In
    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = signInForm.elements[0].value;
        const password = signInForm.elements[1].value;

        if (email && password) {
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem('loggedInEmail', email);
                alert(`Welcome back, ${user.name}! Redirecting to index page...`);
                redirectToIndexPage();
            } else {
                alert('Invalid email or password.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
}
