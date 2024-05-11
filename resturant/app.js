
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Here you can handle form submission, for example, send the data to a backend server using fetch or XMLHttpRequest
    // For demonstration, we'll log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // You can also reset the form after submission
    form.reset();
  });
});



