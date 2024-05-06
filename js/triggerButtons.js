const buttons = document.querySelectorAll(".action-buttons-wrapper button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      document.getElementById(btn.id + "-content").style.display = "none";
      btn.classList.remove("active");
    });

    document.getElementById(button.id + "-content").style.display = "flex";

    button.classList.add("active");
  });
});

const nomenclatureItem = document.getElementById("nomenclature");

if (nomenclatureItem) {
  nomenclatureItem.addEventListener("click", () => {
    document.getElementById("design-overview-content").style.display = "none";
    document.getElementById("design-overview").classList.remove("active");

    document.getElementById("design-nomenclature-content").style.display =
      "flex";

    document.getElementById("design-nomenclature").classList.add("active");
  });
}

const requirementsItem = document.getElementById("requirements");

if (requirementsItem) {
  requirementsItem.addEventListener("click", () => {
    document.getElementById("design-overview-content").style.display = "none";
    document.getElementById("design-overview").classList.remove("active");

    document.getElementById("design-requirements-content").style.display =
      "flex";

    document.getElementById("design-requirements").classList.add("active");
  });
}