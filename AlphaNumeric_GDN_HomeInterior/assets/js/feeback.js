document.addEventListener("DOMContentLoaded", function () {
    // Target the form and its inputs correctly
    const form = document.querySelector("form.app-form");
    const nameInput = document.querySelector("input[placeholder='NAME']");
    const emailInput = document.querySelector("input[placeholder='EMAIL']");
    const contactInput = document.querySelector("input[placeholder='CONTACT NO']");
    const messageInput = document.querySelector("input[placeholder='MESSAGE']");
    
    const cancelButton = document.querySelector(".app-form-button:first-child"); // Cancel button
    const sendButton = document.querySelector(".app-form-button:last-child");   // Send button

    // Check if the buttons exist before adding event listeners
    if (sendButton) {
        sendButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission

            let valid = true;
            let errors = [];

            // Name Validation
            const nameValue = nameInput.value.trim();
            if (!nameValue || !/^[A-Za-z\s]+$/.test(nameValue)) {
                valid = false;
                errors.push("Please enter a valid name (letters and spaces only).");
                nameInput.style.borderColor = "red";
            } else {
                nameInput.style.borderColor = "";
            }

            // Email Validation
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValue || !emailPattern.test(emailValue)) {
                valid = false;
                errors.push("Please enter a valid email.");
                emailInput.style.borderColor = "red";
            } else {
                emailInput.style.borderColor = "";
            }

            // Contact Number Validation
            const contactValue = contactInput.value.trim();
            if (!contactValue || !/^\d{10,15}$/.test(contactValue)) {
                valid = false;
                errors.push("Please enter a valid contact number (10-15 digits).");
                contactInput.style.borderColor = "red";
            } else {
                contactInput.style.borderColor = "";
            }

            // Message Validation
            const messageValue = messageInput.value.trim();
            if (!messageValue) {
                valid = false;
                errors.push("Please enter a message.");
                messageInput.style.borderColor = "red";
            } else {
                messageInput.style.borderColor = "";
            }

            if (valid) {
                // Store the data in localStorage
                const feedbackData = {
                    name: nameValue,
                    email: emailValue,
                    contact: contactValue,
                    message: messageValue,
                };

                // Save to LocalStorage (convert object to string)
                localStorage.setItem("feedback", JSON.stringify(feedbackData));

                // Alert the user
                alert("Thank you for your feedback!");

                // Clear the form after submission
                form.reset(); // This clears all form fields
            } else {
                alert(errors.join("\n")); // Show errors in alert
            }
        });
    }

    // Check if the cancel button exists before adding event listener
    if (cancelButton) {
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            form.reset(); // Reset the form fields when cancel button is clicked
            nameInput.style.borderColor = "";
            emailInput.style.borderColor = "";
            contactInput.style.borderColor = "";
            messageInput.style.borderColor = "";
        });
    }
});
