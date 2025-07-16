// btnというidを持つHTML要素を取得し、定数に代入する

const countBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する

countBtn.addEventListener('click', () => {

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する

setTimeout(() => {

// クリックされた時にtextというidを持つHTML要素を取得する
  const h2Text = document.getElementById('text');

// h2要素を「ボタンをクリックしました」というテキストに変更する
  h2Text.textContent = 'ボタンをクリックしました';

}, 2000); 

});