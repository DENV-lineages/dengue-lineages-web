function createNavbar() {
  document.getElementById("navbar").innerHTML = `
    <div class="ss__navbar">
        <a class="ss__navbar__logo" href="/">
        <img
        src="./assets/img/logo.png"
        alt="Dengue Lineages logo" />
        </a>
            <ul class="menu d-flex gap-4x mb-0">
                <li class="menu__item"><a class="menu__item__link" href="/design.html">Design</a></li>
                <li class="menu__item"><a class="menu__item__link" href="/lineages.html">Lineages</a></li>
                <li class="menu__item"><a class="menu__item__link" href="/resources.html">Resources</a></li>
                <li class="menu__item"><a class="menu__item__link" href="/contact.html">Contact</a></li>
            </ul>

        <div class="ss__navbar__burger">
            <div class="first"></div>
            <div class="second"></div>
            <div class="third"></div>
        </div>
    </div>
    `;
}

createNavbar();

const navSlide = () => {
  const burger = document.querySelector(".ss__navbar__burger");
  const nav = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `fadeLinks 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

function setActiveLink() {
  const currentURL = window.location.href;

  const links = document.querySelectorAll(".menu__item__link");

  for (let link of links) {
    // If the link's href matches the current URL
    if (link.href === currentURL) {
      // Add the "active" class to the link
      link.classList.add("active");
      break;
    }
  }
}

setActiveLink();
