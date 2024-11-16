document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(`Thank you, ${name}! We will get back to you at ${email}.`);
    this.reset(); // Reset form fields
});
