document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    const userDisplayElement = document.getElementById('userDisplay');

    if (userName) {
        userDisplayElement.textContent = `Welcome, ${userName}!`;
    } else {
        userDisplayElement.textContent = '';
    }
});
