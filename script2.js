// script.js

document.addEventListener("DOMContentLoaded", function () {
  const aboutContent = `
    <h2>About</h2>
    <p>
      This virtual lab demonstrates the <strong>Maximum Power Transfer Theorem</strong> using ESP32,
      INA219 sensor, and MCP4131 digital potentiometer. It displays live values of
      voltage, current, power, and resistance on a web interface and plots a real-time
      Resistance vs Power chart using Chart.js. Designed for educational and experimental analysis.
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
