const signupForm = document.getElementById("signupForm");
const userTableBody = document.getElementById("userTableBody");



function getUsers() {
    const users = localStorage.getItem("users");

    if (users) {
        return JSON.parse(users);
    }

    return [];
}



function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}


// SHA-256
async function hashPassword(password) {

    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;
}



function displayUsers() {

    const users = getUsers();

    userTableBody.innerHTML = "";

    users.forEach((user, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="deleteUser(${index})"
                >
                    Delete
                </button>
            </td>
        `;

        userTableBody.appendChild(row);
    });
}



function deleteUser(index) {

    const users = getUsers();

    users.splice(index, 1);

    saveUsers(users);

    displayUsers();
}



signupForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous errors
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;


    // Username validation
    if (username === "") {

        usernameError.textContent = "Username cannot be empty.";

        isValid = false;
    }


    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        emailError.textContent = "Please enter a valid email.";

        isValid = false;
    }


    // Password validation
    if (password.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters long.";

        isValid = false;
    }


    if (!isValid) {
        return;
    }


    // Hash password
    const hashedPassword = await hashPassword(password);


    // Get existing users
    const users = getUsers();

// creating new user
    const newUser = {
        username: username,
        email: email,
        password: hashedPassword
    };

    users.push(newUser);

    saveUsers(users);
    signupForm.reset();
    displayUsers();

});


displayUsers();