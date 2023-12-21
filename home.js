/** @format */

// ユーザーアイコンをクリックしたときのイベントリスナー
document.addEventListener("DOMContentLoaded", function () {
  var userIcon = document.querySelector(".user-icon-container");
  userIcon.addEventListener("click", function () {
    // アイコン設定ページにリダイレクトする処理
    window.location.href = "login_icon.html"; // アイコン設定画面のURLに変更してください
  });

  // コメント機能のダミー実装
  // 本来はサーバーサイドからコメントデータを取得して表示する必要があります
  var commentsSection = document.querySelector(".comments-section");
  commentsSection.innerHTML = "<p>ここにコメントが表示されます</p>";
});

// NORITAKUリンクをクリックしたときのイベントリスナー
// ここでは特にJavaScriptでの処理は必要ありませんが、将来的な拡張のためにスケルトンを設置しておきます。
var noritakuLink = document.querySelector(".noritaku-link");
noritakuLink.addEventListener("click", function () {
  // 何らかの処理を実行する場合はここに追加します
});
