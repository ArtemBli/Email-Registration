document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");

    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const name = nameInput.value;
        const email = emailInput.value;

        let storedData = JSON.parse(localStorage.getItem("userData")) || [];

        if (!Array.isArray(storedData)) {
            storedData = [];
        }

        storedData.push({
            name: name,
            email: email
        });

        localStorage.setItem("userData", JSON.stringify(storedData));

        userForm.reset();
    });
});
