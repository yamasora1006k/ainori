/** @format */

// script1.js
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const nextButton = document.getElementById("nextButton");
  const errorMessageDiv = document.getElementById("error-message");

  nextButton.addEventListener("click", function () {
    // ここに入力値のバリデーションを行うコードを追加することができます。
    // バリデーションが成功した場合にのみ、次の画面へ遷移させる。
    if (validateInputs()) {
      // バリデーション成功時の処理。例えば、次のステップへ進むためのコードをここに追加します。
      window.location.href = "./login_icon/login_icon.html"; // アイコン設定ページに遷移する
    } else {
      // バリデーション失敗時のエラーメッセージを表示する。
      errorMessageDiv.textContent = "入力に誤りがあります。";
    }
  });

  function validateInputs() {
    // フォーム内の各入力値に対するバリデーションを実施する。
    // ここでは、単純な例として全ての入力がされているかどうかだけをチェックします。
    const username = document.getElementById("username").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    if (!username || !address || !password || !passwordConfirm) {
      return false; // 一つでも入力されていないフィールドがあればfalseを返す
    } else if (password !== passwordConfirm) {
      errorMessageDiv.textContent = "パスワードが一致しません。"; // パスワードの不一致をチェック
      return false;
    }
    return true; // すべてのバリデーションチェックが通ればtrueを返す
  }
});
