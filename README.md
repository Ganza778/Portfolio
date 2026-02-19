# Ganza's Personal Portfolio

## Project Overview

This is my **personal portfolio website**, designed to showcase my skills as a **Frontend Developer** and highlight my **real academic projects**.  
The site is **fully responsive**, works on desktop, tablet, and mobile, and demonstrates clean UI engineering practices.

The portfolio includes:
- Hero section with my profile picture and professional tagline  
- About Me section with background, program, and career goals  
- Technical Skills section with visual skill cards  
- Projects section with screenshots, descriptions, and GitHub links  
- Interactive **Student GPA Calculator**  
- Contact section with form and downloadable CV  

---

## Project Structure

portfolio/
│
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── main.js
├── assets/
│ ├── images/
│ └── cv/
└── README.md


---

## Features

- **Responsive Layout:** Works across mobile, tablet, and desktop using **Flexbox**, **media queries**, and **fluid design**  
- **Semantic HTML5:** Clean structure for accessibility and readability  
- **External CSS & JS:** Separation of concerns for maintainability  
- **Interactive GPA Calculator:** Real-world scenario with input validation and classification  
- **Downloadable CV:** Users can preview and download my CV  
- **Sticky Navbar & Mobile Menu:** Smooth UX with toggle on small screens  
- **Dynamic Year:** Footer automatically updates to the current year  

---

## Technical Skills Demonstrated

- **HTML5:** Semantic tags, proper heading hierarchy, forms  
- **CSS3:** Box model, Flexbox, grid, responsive design, hover effects  
- **JavaScript:** DOM manipulation, form validation, event handling, GPA calculation  
- **Git & GitHub:** Version control with meaningful commits  

---

## GPA Calculator

**Functionality:**  
The GPA Calculator allows a user to input course marks separated by commas (e.g., `78, 65, 54`). Upon submitting:

1. The input is validated (numbers between 0–100, not empty)  
2. GPA is calculated based on a standard 4.0 scale  
3. The result displays:
   - **GPA**
   - **Classification**: First Class, Second Class Upper, Second Class Lower, Fail  

**JavaScript Implementation Highlights:**

- Uses `document.getElementById` to select form and result container  
- Event listener on form `submit` prevents default behavior  
- Input is cleaned, split, and converted into numbers  
- Conditional statements calculate total points and GPA  
- Result displayed dynamically using `innerHTML`  

**HTML IDs required:**

html
<form id="gpa-form">
  <input id="marks" placeholder="e.g. 78, 65, 54">
  <button type="submit">Calculate GPA</button>
</form>

<div id="gpa-result"></div>
JavaScript snippet:

const gpaForm = document.getElementById("gpa-form");
const gpaResult = document.getElementById("gpa-result");

gpaForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // ...validation and calculation logic...
  gpaResult.innerHTML = `<strong>${gpa}</strong> - ${classification}`;
});
Live Demo
Hosted on GitHub Pages (replace with actual link)

Fully responsive and interactive

Technologies Used
HTML5

CSS3 (Flexbox, Grid, Media Queries)

JavaScript (ES6)

Git & GitHub

AI Usage Declaration
During the development of this portfolio, I followed the assignment’s AI usage policy.

1. What I asked AI:

Help explain the concept of a Student GPA Calculator
Advice on responsive navbar and mobile menu behavior

2. What I implemented myself:

All HTML structure, including hero, about, projects, CV, and contact sections

CSS layout, responsiveness, Flexbox, media queries, and visual styling

JavaScript logic for GPA calculation, form validation, and DOM manipulation

Sticky navbar and mobile menu toggle functionality

Integration of screenshots, CV download button, and project links

3. What I modified:

Updated input validation to handle edge cases (empty values, commas, invalid numbers)

