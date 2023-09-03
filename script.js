const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

let registeredUsers = [];

function registerUser() {
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;


    if (!regUsername || !regPassword) {
        alert("Username and password are required.");
        return;
    }

    if (registeredUsers.some(user => user.username === regUsername)) {
        alert("Username is already taken. Please choose another.");
        return;
    }

    registeredUsers.push({ username: regUsername, password: regPassword });

    document.getElementById("regUsername").value = "";
    document.getElementById("regPassword").value = "";

    alert("Registration successful!");
}

function loginUser() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (!loginUsername || !loginPassword) {
        alert("Username and password are required.");
        return;
    }

    const user = registeredUsers.find(user => user.username === loginUsername);

    if (!user || user.password !== loginPassword) {
        alert("Invalid username or password. Please try again.");
        return;
    }

    document.getElementById("rm").style.display = "none";
    document.getElementById("welcome").style.display = "block";

    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}

function logoutUser() {
    document.getElementById("rm").style.display = "block";
    document.getElementById("welcome").style.display = "none";
}
