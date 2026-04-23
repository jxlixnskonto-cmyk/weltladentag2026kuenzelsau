const map = document.getElementById("map");

if (map) {
  /* ---------------- MAP DRAG ---------------- */

  let isDown = false;
  let startX;
  let scrollLeft;

  map.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - map.offsetLeft;
    scrollLeft = map.parentElement.scrollLeft;
  });

  map.addEventListener("mouseleave", () => {
    isDown = false;
  });

  map.addEventListener("mouseup", () => {
    isDown = false;
  });

  map.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - map.offsetLeft;
    const walk = (x - startX) * 1.2;

    map.parentElement.scrollLeft = scrollLeft - walk;
  });
}

/* ---------------- POPUPS ---------------- */

const pins = document.querySelectorAll(".pin");
const popupDE = document.getElementById("popup");
const popupEC = document.getElementById("popup-ecuador");
const popupBF = document.getElementById("popup-burkina");
const popupIT = document.getElementById("popup-italien");
const popupPH = document.getElementById("popup-philippinen");
const popupPY = document.getElementById("popup-paraguay");
const popupSW = document.getElementById("popup-eswatini");
/* ---------------- PIN CLICK ---------------- */

pins.forEach(pin => {
  pin.addEventListener("click", () => {
    const country = pin.dataset.country;

    // alle schließen
    document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));

    // gezielt öffnen
    if (country === "Deutschland") {
      popupDE.classList.remove("hidden");
    }

    if (country === "Ecuador") {
      popupEC.classList.remove("hidden");
    }

    if (country === "Burkina Faso") {
  popupBF.classList.remove("hidden");
     }

if (country === "Italien") {
  popupIT.classList.remove("hidden");
}

if (country === "Philippinen") {
  popupPH.classList.remove("hidden");
}

if (country === "Paraguay") {
  popupPY.classList.remove("hidden");
}

if (country === "Eswatini") {
  popupSW.classList.remove("hidden");
}

    document.body.classList.add("blur");
  });
});

/* ---------------- CLOSE BUTTONS ---------------- */

document.querySelectorAll(".close-x").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
    document.body.classList.remove("blur");
  });
});

/* ---------------- SCROLL BUTTON PRO POPUP ---------------- */

document.querySelectorAll(".popup").forEach(popup => {
  const content = popup.querySelector(".popup-scroll");
  const btn = popup.querySelector(".scroll-btn");

  if (!content || !btn) return;

  btn.addEventListener("click", () => {
    const isBottom =
      content.scrollTop + content.clientHeight >= content.scrollHeight - 5;

    content.scrollTo({
      top: isBottom ? 0 : content.scrollHeight,
      behavior: "smooth"
    });
  });

  content.addEventListener("scroll", () => {
    const isBottom =
      content.scrollTop + content.clientHeight >= content.scrollHeight - 5;

    btn.textContent = isBottom ? "↑" : "↓";
  });
});

const menuBtn = document.getElementById("menuToggle");
const menuContent = document.getElementById("menuContent");

if (menuBtn && menuContent) {

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuContent.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!menuContent.contains(e.target) && !menuBtn.contains(e.target)) {
      menuContent.classList.add("hidden");
    }
  });

}