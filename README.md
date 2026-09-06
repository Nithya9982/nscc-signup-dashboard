# NSCC Signup Form & User Dashboard

**Author: Nithya Chetana**  
**B Tech CSE AIML| First Year**

This project was developed as part of the **NSCC SRMIST Recruitment Task – Task 1**.

It is a simple and modern web application that allows users to sign up using a validated form. The application validates the entered details, hashes the password before storing it, saves the user data in browser localStorage, and displays all registered users in a dashboard.

---

##  Features

### Required Features

- Signup form with Username, Email, and Password fields
- Username validation – cannot be empty
- Email validation using Regular Expression (Regex)
- Password validation – minimum 6 characters
- Password hashing before storing
- User data stored using browser `localStorage`
- Dashboard displaying all registered users
- Delete button to remove users from the dashboard

### Additional Features

- Modern and responsive user interface
- Gradient background
- Modern card-based design
- Interactive input fields
- Input focus effects
- Button hover animations
- Styled dashboard table
- Responsive layout for smaller screens
- Clear validation error messages
- User data remains after refreshing the page

---

##  Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling, layout, gradients, animations, and responsiveness
- **JavaScript** – Form validation, DOM manipulation, localStorage, and dashboard functionality
- **Web Crypto API** – Password hashing
- **LocalStorage API** – Browser-based data storage

---

##  Project Structure

```text
nscc-signup-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md