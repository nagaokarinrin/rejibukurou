'use strict'
// ページ読み込み時にラジオボタンにチェックする
document.getElementById('rejibukuroRadiobuttonNeed').checked = true;
document.getElementById('poitCardRadiobuttonNeed').checked = true;

//ボタン要素を取得
let switchBtn = document.getElementById('btn');
let turnBtn = document.getElementById('turnBtn');

//表示・非表示を切り替える要素を取得
let firstPage = document.getElementById('firstPage');
let secondPage = document.getElementById('secondPage');

//ボタンのstyle要素を取得
let btnChange = document.getElementById('btnChange');
let btnText = document.getElementById('btnText');

//TOPでsecondPage要素を非表示
secondPage.style.display='none';

//上記関数をボタンクリック時に実行
switchBtn.addEventListener('click', ()=> {
  changeElement(firstPage, secondPage);

  var isNeedRejibukurou = checkRejibukuroRadiobutton();
  setImageNeedRejibukuro(isNeedRejibukurou);
  var isNeedPointcard = checkPointcardRadiobutton();
  setImageNeedPointcard(isNeedPointcard);

  var text = getFreeFormText("input-message01");
  var text2 = getFreeFormText("input-message02");
  inputFreeTextToForm(text, "output-message01");
  inputFreeTextToForm(text2, "output-message02");
}, false);

turnBtn.addEventListener('click', ()=> {
  turnContent();
}, false);

//styleのdisplayを変更する関数
let changeElement = (first, second)=> {
  if(first.style.display==''){
    first.style.display='none';
    second.style.display='';
    btnChange.style.borderRadius='100vh';
    btnChange.style.padding='20px 60px';
    btnText.textContent="もどる";
    

  }else{
    first.style.display='';
    second.style.display='none';
    btnChange.borderRadius='';
    btnChange.style.padding='';
    btnText.textContent="表示";
  }
}

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

function turnContent(){    
  var turnPage = document.getElementById("turnPage");
  if (turnPage.style.transform == "rotate(180deg)") {
    turnPage.style.transform = "rotate(" + 0 + "deg)"; //deg 時計回りで正の方向
  } else {
    turnPage.style.transform = "rotate(" + 180 + "deg)"; //deg 時計回りで正の方向
  }
};
/*//要素の取得 → クリックされたとき
document.getElementById('btnChange').addEventListener('click',function(){
  //要素の取得 → 背景色を変える
  document.getElementById('btnChange').style.borderRadius='100vh';
  document.getElementById('btnChange').style.padding='20px 60px';
  document.getElementById('btnChange').style.content="もどる";
});
*/



