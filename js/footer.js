async function loadFooter() {
  const response = await fetch("./footer.html");
  const footerHTML = await response.text();
  document.getElementById("footer-container").innerHTML = footerHTML;

  loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  );
  loadScript("./js/menu.js");
  loadScript("./js/triggerButtons.js");
}

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

loadFooter();
