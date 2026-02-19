/* =========================
   MOBILE MENU TOGGLE
========================= */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


/* =========================
   DYNAMIC YEAR (FOOTER)
========================= */
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();


/* =========================
   GPA CALCULATOR LOGIC
========================= */
const gpaForm = document.getElementById("gpa-form");
const marksInput = document.getElementById("marks");
const resultDiv = document.getElementById("gpa-result");

gpaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const marksValue = marksInput.value.trim();

  // Validation
  if (marksValue === "") {
    resultDiv.textContent = "Please enter course marks.";
    resultDiv.style.color = "red";
    return;
  }

  const marksArray = marksValue.split(",").map(mark => parseFloat(mark));

  // Check for invalid marks
  for (let mark of marksArray) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
      resultDiv.textContent =
        "Marks must be numbers between 0 and 100.";
      resultDiv.style.color = "red";
      return;
    }
  }

  // GPA calculation
  let totalPoints = 0;

  marksArray.forEach(mark => {
    if (mark >= 80) totalPoints += 4.0;
    else if (mark >= 70) totalPoints += 3.5;
    else if (mark >= 60) totalPoints += 3.0;
    else if (mark >= 50) totalPoints += 2.5;
    else if (mark >= 40) totalPoints += 2.0;
    else totalPoints += 0;
  });

  const gpa = (totalPoints / marksArray.length).toFixed(2);

  // Classification
  let classification = "";

  if (gpa >= 3.6) classification = "First Class";
  else if (gpa >= 3.0) classification = "Second Class Upper";
  else if (gpa >= 2.5) classification = "Second Class Lower";
  else if (gpa >= 2.0) classification = "Pass";
  else classification = "Fail";

  // Display result
  resultDiv.style.color = "green";
  resultDiv.innerHTML = `
    <p>Your GPA is <strong>${gpa}</strong></p>
    <p>Classification: <strong>${classification}</strong></p>
  `;
});


/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = contactForm.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      isValid = false;
    } else {
      input.style.border = "2px solid green";
    }
  });

  if (isValid) {
    alert("Message sent successfully! (Demo only)");
    contactForm.reset();

    inputs.forEach(input => {
      input.style.border = "none";
    });
  }
});
