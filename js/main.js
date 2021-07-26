'use strict'
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

  var text = getFreeFormText("input-message01");
  var text2 = getFreeFormText("input-message02");
  inputFreeTextToForm(text, "output-message01");
  inputFreeTextToForm(text2, "output-message02");
}

//テキスト入力
const getFreeFormText = (id) => {
  const textbox = document.getElementById(id);
  const inputValue = textbox.value;
  return inputValue;
}

const inputFreeTextToForm = (text, id) => {
  //テキストボックスの値を使って、出力するメッセージを生成する
  const output = "" + text + "";

  //出力用のp要素にメッセージを表示
  document.getElementById(id).innerHTML = output;
}

//表示ボタンを戻るボタンに変更
const btn = document.getElementById("btn");
    let flg = false;

    const func1 = () => {
      if (flg) {
        btn.style.border = "solid 2px red";
        btn.style.borderRadius = "20px";
        btn.style.backgroundColor = "orange";
      } else {
        btn.style.border = "dashed 4px blue";
        btn.style.borderRadius = "0px";
        btn.style.backgroundColor = "lightblue";
      }
      flg = !flg;
    }

//上記関数をボタンクリック時に実行
switchBtn.addEventListener('click', ()=> {
  changeElement(firstPage, secondPage);
}, false);

//回転ボタンクリック時に実行
let turnPage = document.getElementById('turnPage');
var angle = 0;
 
  function foo(x){    
    var turnPage = document.getElementById("turnPage");
    angle = angle + x;
    turnPage.style.transform = "rotate(" + 180 + "deg)"; //deg 時計回りで正の方向
  };