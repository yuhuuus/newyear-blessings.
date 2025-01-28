const messages = [
    "🎉 祝大家新年快乐！",
    "💪 身体健康，恭喜发财！",
    "✨ 万事如意！",
    "💖 心想事成！",
    "🐍 蛇年大吉！"
  ];
  
  let currentMessageIndex = 0;
  
  const modal = document.getElementById("modal");
  const cardMessage = document.getElementById("cardMessage");
  const nextBtn = document.getElementById("nextBtn");
  const startBtn = document.getElementById("startBtn");
  const finalMessage = document.getElementById("finalMessage");
  const blessingImage = document.getElementById("blessingImage");
  
  // Start showing messages
  startBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    cardMessage.textContent = messages[currentMessageIndex];
  });
  
  // Show next message
  nextBtn.addEventListener("click", function () {
    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
      cardMessage.textContent = messages[currentMessageIndex];
    } else {
      modal.style.display = "none";
      showFinalMessage();
    }
  });
  
  // Show final message
  function showFinalMessage() {
    finalMessage.style.display = "block";
    blessingImage.src = "happy.jpg"; // Ganti dengan URL gambarmu
    blessingImage.alt = "新年祝福图片";
    blessingImage.style.width = "100%"; // Ubah ukuran gambar
    blessingImage.style.maxWidth = "750px"; // Batasi ukuran maksimal
    blessingImage.style.display = "block";
    blessingImage.style.margin = "0 auto"; // Tengahin gambar
}
