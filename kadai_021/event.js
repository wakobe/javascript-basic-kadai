// ボタン要素とテキスト要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンクリック時にテキストを2秒後に書き換える処理
button.addEventListener("click", function () {
  setTimeout(function (){
    text.textContent = "ボタンをクリックしました";
}, 2000);
});
