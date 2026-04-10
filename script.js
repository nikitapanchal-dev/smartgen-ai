let typingInterval;

function generateAI() {
  let input = document.getElementById("userInput").value;
  let output = document.getElementById("output");

  if (input.trim() === "") {
    output.innerText = "Please type something!";
    return;
  }

  clearInterval(typingInterval);

  let text = "AI Response: This is a smart AI-generated result for: " + input;
  output.innerText = "";

  let i = 0;

  typingInterval = setInterval(() => {
    output.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(typingInterval);
  }, 20);
}

function toggleFAQ(el) {
  let p = el.nextElementSibling;
  p.style.display = p.style.display === "block" ? "none" : "block";
}

function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  let btn = document.getElementById("themeBtn");
  btn.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
}