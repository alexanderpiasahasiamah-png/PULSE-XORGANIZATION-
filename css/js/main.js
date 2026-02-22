function openWhatsApp() {
  window.location.href = "https://wa.me/YOURNUMBER";
}

function openTelegram() {
  window.location.href = "https://t.me/YOURBOTNAME";
}

function showChat() {
  document.getElementById("chatBox").style.display = "block";
}

async function analyze() {
  const symptoms = document.getElementById("symptoms").value;

  const response = await fetch("http://localhost:5000/api/healthcare", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms })
  });

  const data = await response.json();
  document.getElementById("result").innerHTML = data.reply;
}
