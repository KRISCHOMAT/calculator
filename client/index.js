const btns = document.getElementsByTagName("button");
const display = document.getElementById("display");
const themeA = document.getElementById("theme-a");
const themeB = document.getElementById("theme-b");
const themeC = document.getElementById("theme-c");
const root = document.querySelector(":root");

// Themes

// Theme A
themeA.addEventListener("click", () => {
  themeA.style.backgroundColor = "var(--red)";
  themeB.style.backgroundColor = "var(--white)";
  themeC.style.backgroundColor = "var(--white)";

  root.style.setProperty("--btn-primary", "#e6ded7");
  root.style.setProperty("--btn-secondary", "#64719a");
  root.style.setProperty("--btn-hipster", "var(--red)");
  root.style.setProperty("--btn-main-color", "var(--black)");
  root.style.setProperty("--background-light", "#3b4664");
  root.style.setProperty("--background-display", "#181f32");
  root.style.setProperty("--background-controls", "#252d43");
  root.style.setProperty("--header-color", "var(--white)");
  root.style.setProperty("--display-color", "var(--white)");
});

// Theme B
themeB.addEventListener("click", () => {
  themeB.style.backgroundColor = "var(--red)";
  themeA.style.backgroundColor = "var(--white)";
  themeC.style.backgroundColor = "var(--white)";

  root.style.setProperty("--btn-primary", "#e6ded7");
  root.style.setProperty("--btn-secondary", "#388185");
  root.style.setProperty("--btn-hipster", "var(--red)");
  root.style.setProperty("--btn-main-color", "var(--black)");
  root.style.setProperty("--background-light", "#e6e6e6");
  root.style.setProperty("--background-display", "#eeeeee");
  root.style.setProperty("--background-controls", "#d3cdcd");
  root.style.setProperty("--header-color", "var(--black)");
  root.style.setProperty("--display-color", "var(--black)");
});

// Theme C
themeC.addEventListener("click", () => {
  themeC.style.backgroundColor = "var(--red)";
  themeA.style.backgroundColor = "var(--white)";
  themeB.style.backgroundColor = "var(--white)";

  root.style.setProperty("--btn-primary", "#34194D");
  root.style.setProperty("--btn-secondary", "#55067B");
  root.style.setProperty("--btn-hipster", "var(--green)");
  root.style.setProperty("--btn-main-color", "var(--yellow)");
  root.style.setProperty("--background-light", "#150429");
  root.style.setProperty("--background-display", "#1E0836");
  root.style.setProperty("--background-controls", "#150429");
  root.style.setProperty("--header-color", "var(--yellow)");
  root.style.setProperty("--display-color", "var(--yellow)");
});

// Calc
let isStart = true;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (
      btns[i].name !== "del" &&
      btns[i].name !== "reset" &&
      btns[i].name !== "equal" &&
      btns[i].name !== "theme"
    ) {
      if (isStart) {
        display.innerHTML = btns[i].name;
        isStart = false;
      } else {
        display.innerHTML = display.innerHTML + btns[i].name;
      }
    }
    if (btns[i].name === "del") {
      let del = display.innerHTML.slice(0, display.innerHTML.length - 1);
      if (del.length === 0) {
        display.innerHTML = "0";
      } else {
        display.innerHTML = del;
      }
    } else if (btns[i].name === "reset") {
      display.innerHTML = "0";
      isStart = true;
    } else if (btns[i].name === "equal") {
      let calc = display.innerHTML;
      display.innerHTML = eval(calc);
    }
  });
}
