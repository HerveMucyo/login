// Validation functions
function isValidEmail(email) {
    // Implement your email validation logic here
}

function isValidPhoneNumber(phoneNumber) {
    // Implement your phone number validation logic here
}

// Mock user data for login (replace with your authentication logic)
const mockUser = {
    email: 'mucyoh32@gmail.com',
    password: '123',
};

// Login form submit event
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === mockUser.email && password === mockUser.password) {
        // Redirect to the success page if login is successful
        window.location.href = "success.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Forgot password form submit event
document.getElementById("forgot-password-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const resetEmail = document.getElementById("reset-email").value;

    if (isValidEmail(resetEmail)) {
        // Implement your forgot password logic here
        // Redirect to appropriate page on success
        alert("Password reset instructions sent to your email.");
        window.location.href = "index.html"; // Redirect back to login
    } else {
        alert("Invalid email address. Please try again.");
    }
});