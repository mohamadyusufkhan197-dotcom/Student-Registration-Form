var studentForm = document.getElementById("studentForm")
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var departmentInput = document.getElementById("department");
var submitBtn = document.getElementById("submitBtn");

function validateName() {
    if (nameInput.value.trim() == "") {
        document.getElementById("nameError").textContent =
            "Please enter your name";
        return false;
    } else {
        document.getElementById("nameError").textContent = "";
        return true;
    }
}

function validateEmail() {
    if (!emailInput.value.includes("@") ||
        !emailInput.value.includes(".")) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email";
        return false;
    } else {
        document.getElementById("emailError").textContent = "";
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must have at least 6 characters";
        return false;
    } else {
        document.getElementById("passwordError").textContent = "";
        return true;
    }
}

function validateDepartment() {
    if (departmentInput.value == "") {
        document.getElementById("departmentError").textContent =
            "Please select your department";
        return false;
    } else {
        document.getElementById("departmentError").textContent = "";
        return true;
    }
}

function checkForm() {
    if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateDepartment()
    ) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);
departmentInput.addEventListener("change", checkForm);

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    checkForm();

    if (validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateDepartment()) {

        document.getElementById("successMessage").textContent =
            "Student registered successfully!";

        studentForm.reset();
        submitBtn.disabled = true;
    }
});
