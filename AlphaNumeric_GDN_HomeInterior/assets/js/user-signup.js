
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Store user data in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already exists. Please use a different email.');
        return;
    }
   
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    // Optionally close the modal or redirect
});

// User Login
// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//         alert(`Welcome, ${user.name}!`);
//         // Redirect to profile or any other page
//         // window.location.href = 'profile.html'; // Uncomment for redirection
//     } else {
//         alert('Invalid email or password. Please try again.');
//     }
// });