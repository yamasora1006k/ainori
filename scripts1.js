/** @format */

// script1.js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const addressInput = document.getElementById("address");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("passwordConfirm");
  const rememberPasswordCheckbox = document.getElementById("rememberPassword");
  const nextButton = document.getElementById("nextButton");
  const loginButton = document.getElementById("loginButton");
  const iconInput = document.getElementById("iconInput");
  const iconPreview = document.getElementById("iconPreview");
  const errorMessageDiv = document.getElementById("error-message");

  nextButton.addEventListener("click", function () {
    if (validateInputs()) {
      loginForm.style.display = "none"; // ログインフォームを隠す
      document.querySelector(".icon-setup").style.display = "block"; // アイコン設定を表示
    }
  });

  loginButton.addEventListener("click", function () {
    // アイコンの設定が完了したと仮定してログイン処理を実行
    // 実際のアプリケーションではここでサーバーにリクエストを送る処理が必要
    window.location.href = "home.html"; // ホーム画面に移動
  });

  iconInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("iconImage").src = e.target.result; // プレビューにアイコンを表示
      };
      reader.readAsDataURL(file);
    }
  });

  function validateInputs() {
    // 入力値の検証を行う
    if (passwordInput.value !== passwordConfirmInput.value) {
      errorMessageDiv.textContent = "パスワードが一致しません。";
      return false;
    }
    if (!usernameInput.value || !addressInput.value) {
      errorMessageDiv.textContent = "必須項目を入力してください。";
      return false;
    }
    // チェックボックスの状態に応じてローカルストレージに保存
    handleRememberPassword();
    return true;
  }

  function handleRememberPassword() {
    if (rememberPasswordCheckbox.checked) {
      localStorage.setItem("rukTaxiRememberedPassword", passwordInput.value);
    } else {
      localStorage.removeItem("rukTaxiRememberedPassword");
    }
  }
});
