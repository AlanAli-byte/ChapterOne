function submitRegistration() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let phone = document.getElementById("regPhone").value.trim().replace(/\D/g, '');

    if (name === "" || email === "" || password === "" || phone.length !== 10) {
        alert("Please fill out all fields correctly.");
        return;
    }

    alert("Registration successful!");
    window.close();
}

function validateForm() {
 let name = document.getElementById("regName").value.trim();
 let email = document.getElementById("regEmail").value.trim();
 let password = document.getElementById("regPassword").value.trim();
 let phone = document.getElementById("regPhone").value.trim().replace(/\D/g, ''); // Remove all non-numeric characters

 let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
 let phoneRegex = /^\d{10}$/;

 if (name === "") {
     alert("Name field cannot be empty!");
     return false;
 }
 if (!emailRegex.test(email)) {
     alert("Invalid email format!");
     return false;
 }
 if (!passwordRegex.test(password)) {
     alert("Password must be at least 8 characters, including a letter and a number.");
     return false;
 }
 if (!phoneRegex.test(phone)) {
     alert("Phone number must be exactly 10 digits.");
     return false;
 }

 return true;
}

function submitRegistration() {
 if (!validateForm()) {
     return; // Stop submission if validation fails
 }
 alert("Registration successful!");
 window.close();
}
