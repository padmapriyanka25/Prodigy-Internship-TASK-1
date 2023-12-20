

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        // Validate name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            alert('Name is required');
            event.preventDefault();
            return false;
        }

        // Validate email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert('Please enter a valid email address');
            event.preventDefault();
            return false;
        }

        // Validate phone number
        const phoneInput = document.getElementById('phone');
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            alert('Please enter a valid 10-digit phone number');
            event.preventDefault();
            return false;
        }

        // Validate message
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            alert('Message cannot be empty');
            event.preventDefault();
            return false;
        }
    });
});

