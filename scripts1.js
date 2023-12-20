/** @format */

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const addressInput = document.getElementById("address");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("passwordConfirm");
  const rememberPasswordCheckbox = document.getElementById("rememberPassword");
  const nextButton = document.getElementById("nextButton");
  const errorMessageDiv = document.getElementById("error-message");

  nextButton.addEventListener("click", function () {
    let valid = validateInputs();
    if (valid) {
      errorMessageDiv.textContent = "";
      // ここにアイコン設定のJavaScriptコードを挿入
      // 画像が選択されたか、デフォルトのアイコンを設定
      // 次のステップのためにボタンを「ログイン」に変更し、ホーム画面へのリンクを設定
    }
  });

  function validateInputs() {
    if (passwordInput.value !== passwordConfirmInput.value) {
      errorMessageDiv.textContent = "パスワードが一致しません。";
      return false;
    }
    return true;
  }

  // パスワード記憶のチェックボックスの状態に基づいて処理を行う関数
  function handleRememberPassword() {
    if (rememberPasswordCheckbox.checked) {
      // パスワードをローカルストレージに保存する処理をここに挿入
    } else {
      // パスワードをローカルストレージから削除する処理をここに挿入
    }
  }

  // ユーザーがログインボタンを押したときのイベントハンドラを設定
  // 実際のアプリケーションでは、ここでサーバーにリクエストを送るなどの処理が必要になります
  // ここでは単純化のために、単にホームページへのリンクを表示するだけにしています
  // <!-- <a href="home.html">ホーム画面に移動</a> -->
});
