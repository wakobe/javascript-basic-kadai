// ボタン要素とテキスト要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンクリック時にテキストを書き換える処理
button.addEventListener("click", function () {
  text.textContent = "ボタンをクリックしました";
});
