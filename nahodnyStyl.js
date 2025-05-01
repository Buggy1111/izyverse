const styly = [
  {
    backgroundColor: "#1c1c1c",
    color: "#ffca28",
    font: "'Courier New', monospace",
    buttonBg: "#ffca28",
    buttonColor: "#1c1c1c"
  },
  {
    backgroundColor: "#0d0d0d",
    color: "#00ffcc",
    font: "'Comic Sans MS', cursive",
    buttonBg: "#00ffcc",
    buttonColor: "#0d0d0d"
  },
  {
    backgroundColor: "#2a003f",
    color: "#ff66cc",
    font: "'Lucida Console', monospace",
    buttonBg: "#ff66cc",
    buttonColor: "#2a003f"
  },
  {
    backgroundColor: "#001f3f",
    color: "#7fdbff",
    font: "'Consolas', monospace",
    buttonBg: "#7fdbff",
    buttonColor: "#001f3f"
  }
];

function nahodnyStyl() {
  const styl = styly[Math.floor(Math.random() * styly.length)];

  document.body.style.backgroundColor = styl.backgroundColor;
  document.body.style.color = styl.color;
  document.body.style.fontFamily = styl.font;

  // Nadpis
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.style.color = styl.color;
    h1.style.fontFamily = styl.font;
  }

  // Tlačítko
  const button = document.querySelector("button");
  if (button) {
    button.style.backgroundColor = styl.buttonBg;
    button.style.color = styl.buttonColor;
    button.style.fontFamily = styl.font;
  }

  // Výstupní text
  const output = document.getElementById("output");
  if (output) {
    output.style.color = styl.color;
    output.style.fontFamily = styl.font;
  }
}

// Aplikuj při načtení
window.onload = nahodnyStyl;
