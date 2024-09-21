// Simulating a user database
const users = [];
const wishlist = [];

// Registration Function
function registerUser(event) {
    event.preventDefault();
   
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Check if the username already exists
    if (users.some(user => user.username === username)) {
        alert("Username already exists!");
        return;
    }

    // Save the user
    users.push({ username, password });
    alert("Registration successful!");
   
    // Clear the form
    document.getElementById('signup-form').reset();
    $('#signupModal').modal('hide'); // Hide the modal
}

// Login Function
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check user credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
       
        // Redirect to dashboard
        window.location.href = './assets/htmlpages/dashbord.html';
    } else {
        alert("Invalid username or password!");
    }

    // Clear the form
    document.getElementById('login-form').reset();
    $('#loginModal').modal('hide'); // Hide the modal
}

// Example of a function to add products to the wishlist
function addToWishlist(product) {
    wishlist.push(product);
}