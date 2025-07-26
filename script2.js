// script.js

document.addEventListener("DOMContentLoaded", function () {
  const aboutContent = `
    </p>
  `;

  // Find or create a container for the "About" section
  let aboutSection = document.getElementById("about");

  // If it doesn't exist, create it
  if (!aboutSection) {
    aboutSection = document.createElement("section");
    aboutSection.id = "about";
    document.body.appendChild(aboutSection);
  }

  aboutSection.innerHTML = aboutContent;
});
