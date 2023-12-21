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
        iconPreview.style.backgroundImage = `url(${e.target.result})`;
        iconImage.style.display = "none"; // 新しい画像が選択されたら元の画像を非表示にする
      };
      reader.readAsDataURL(file);
    }
  });

  loginButton.addEventListener("click", function () {
    if (!iconInput.value) {
      // 画像が選択されていない場合はエラーメッセージを表示
      errorMessage.textContent = "アイコンが選択されていません。";
    } else {
      // 画像が選択されている場合は、ここでログイン処理を実装
      // 例: サーバーに画像をアップロードするコード
      errorMessage.textContent = "";
      // ログイン処理が成功したと仮定して次のページへ遷移
      // window.location.href = '次のページのURL';
    }
  });
});
