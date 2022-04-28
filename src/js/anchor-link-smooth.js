const smoothScroolAchor = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < smoothScroolAchor.length; index++) {
  const element = smoothScroolAchor[index];

  element.addEventListener("click", function (event) {
    event.preventDefault();
    if (document.getElementById(this.getAttribute("href").replace("#", "")))
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
  });
}
