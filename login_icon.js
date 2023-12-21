/** @format */

// login_icon.js
document.addEventListener("DOMContentLoaded", function () {
  // アイコンプレビュー画像の要素を取得
  const iconPreview = document.getElementById("iconPreview");
  // ファイル入力要素を取得
  const iconInput = document.getElementById("iconInput");
  // ログインボタンの要素を取得
  const loginButton = document.getElementById("loginButton");

  // アイコンプレビューがクリックされたときにファイル入力を開くイベントリスナー
  iconPreview.addEventListener("click", function () {
    iconInput.click();
  });

  // ファイルが選択されたときにプレビューを更新するイベントリスナー
  iconInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // プレビュー画像を表示
        iconPreview.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(file);
    }
  });

  // ログインボタンがクリックされたときのイベント
  loginButton.addEventListener("click", function () {
    // ここにログイン処理を実装します
    // 例えば、サーバーへのリクエストを送信するコードなど
    alert("ログイン処理を実装してください。");
  });
});
