/** @format */

// login_icon.js
document.addEventListener("DOMContentLoaded", function () {
  const iconInput = document.getElementById("iconInput");
  const loginButton = document.getElementById("loginButton");
  const iconPreview = document.getElementById("iconPreview");
  const iconImage = document.getElementById("iconImage");
  const errorMessage = document.getElementById("error-message");

  iconPreview.addEventListener("click", function () {
    iconInput.click();
  });

  iconInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        iconImage.src = e.target.result; // 画像をimgタグのsrcに設定
        iconImage.style.display = "block"; // imgタグを表示
        iconImage.style.width = "100%"; // 画像の幅を100%に設定
        iconImage.style.height = "auto"; // 画像の高さを自動で設定
        iconImage.style.objectFit = "contain"; // 画像がコンテナに収まるように調整
        iconImage.style.borderRadius = "50%"; // 画像を円形にする
      };
      reader.readAsDataURL(file);
    }
  });

  loginButton.addEventListener("click", function () {
    if (!iconInput.value) {
      errorMessage.textContent = "アイコンが選択されていません。";
    } else {
      errorMessage.textContent = "";
      // 画像が選択されている場合の処理を実装
      // 例: サーバーへの画像アップロード処理など
      window.location.href = "../index.html";
    }
  });
});
