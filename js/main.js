'use strict'

//ラジオボタン要素を取得
// let rejibukuro1 = document.getElementById('isNeedReceipt');
// let rejibukuro2 = document.getElementById('isNeedPointcard');

// ページ読み込み時にラジオボタンにチェックする
document.getElementById('rejibukuroRadiobuttonNeed').checked = true;
document.getElementById('poitCardRadiobuttonNeed').checked = true;

//ボタン要素を取得
let switchBtn = document.getElementById('btn');

//表示・非表示を切り替える要素を取得
let firstPage = document.getElementById('firstPage');
let secondPage = document.getElementById('secondPage');

//TOPでsecondPage要素を非表示
secondPage.style.display='none';

// ラジオボタン(レジ袋)のチェック状態を返す
function checkRejibukuroRadiobutton(){
  let rejibukuroRadiobuttonNeed = document.getElementById('rejibukuroRadiobuttonNeed');
  return rejibukuroRadiobuttonNeed.checked;
}

function setImageNeedRejibukuro(isNeed) {
  var image = document.getElementById('rejibukuroImage');
  if (isNeed) {
    image.src = 'image/rejibukurou_01.png';
  } else {
    image.src = 'image/rejibukurou_03.png';
  }
}

// ラジオボタン(ポイントカード)のチェック状態を返す
function checkPointcardRadiobutton() {
  let poitCardRadiobuttonNeed = document.getElementById('poitCardRadiobuttonNeed');
  return poitCardRadiobuttonNeed.checked;
}

function setImageNeedPointcard(isNeed) {
  var image = document.getElementById('pointcardImage');
  if (isNeed) {
    image.src = 'image/rejibukurou_02.png';
  } else {
    image.src = 'image/rejibukurou_04.png';
  }
}

//styleのdisplayを変更する関数
let changeElement = (first, second)=> {
  var isNeedRejibukurou = checkRejibukuroRadiobutton();
  setImageNeedRejibukuro(isNeedRejibukurou);

  var isNeedPointcard = checkPointcardRadiobutton();
  setImageNeedPointcard(isNeedPointcard);

  if(first.style.display==''){
    first.style.display='none';
    second.style.display='';
  }else{
    first.style.display='';
    second.style.display='none';
  }
}

//上記関数をボタンクリック時に実行
switchBtn.addEventListener('click', ()=> {
  changeElement(firstPage, secondPage);
}, false);

//画像を表示
/*(function() {
  var canvas = document.getElementById('rejibukuroImage');
      var context = canvas.getContext('2d');

      var image = new Image();
      image.src = 'image/rejibukurou_03.png';
      image.addEventListener('load', function() {
          context.drawImage(image, 0, 0, 150, 100);
          
      }, false);
})();*/

//上記関数をボタンクリック時に実行
// let checkBox = document.getElementById('isNeedReceipt');
// checkBox.addEventListener('click', butotnClick);