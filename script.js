const countdownElement = document.getElementById("countdown");
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 5);
const eventTime = eventDate.getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventTime - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.innerText = `Annual Day in ${days}d ${hours}h ${minutes}m ${seconds}s!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", function() {
    const historyItem = document.querySelector(".dropdown-arrow");
    const historyMenu = historyItem.querySelector("ul");

    historyItem.addEventListener("click", function(event) {
        event.stopPropagation();
        const isActive = historyMenu.style.display === "block";
        historyMenu.style.display = isActive ? "none" : "block";
        historyItem.classList.toggle("active", !isActive);
    });

    document.addEventListener("click", function() {
        historyMenu.style.display = "none";
        historyItem.classList.remove("active");
    });

    let loginButton = document.getElementById("loginBtn");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("loginPopup").style.display = "block";
        });
    } else {
        console.error("Login button not found!");
    }

    let registerButton = document.getElementById("register");
    if (registerButton) {
        registerButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents any default behavior that may cause unwanted popups
            window.open("register.html", "_blank", "width=500,height=600");
        });
    }
});

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginPopup").style.display = "none";
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim().replace(/\D/g, '');

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

    alert("Form submitted successfully!");
    return true;
}

function submitLogin() {
    if (validateForm()) {
        alert("Login successful!"); 
        closePopup();
    }
}
