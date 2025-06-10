let form = document.getElementById("myForm");
let timeSpent = document.getElementById("timeSpent");
let confirmationMessage = document.getElementById("confirmationMessage");
let startTime;

form.addEventListener("focusin", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    startTime = new Date().getTime();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let endTime = new Date().getTime();
  let time = (endTime - startTime) / 1000;
  timeSpent.textContent = `Time spent: ${time} seconds`;
  confirmationMessage.textContent = "Form submitted successfully!";
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push({ name, email, message });
  localStorage.setItem("data", JSON.stringify(data));
  form.reset();
})