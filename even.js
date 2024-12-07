'use strict';
//fsモジュールを取得
const fs = require("fs");

////➀テキスト読み込みモジュールstart************************************************************************
//テキストファイルを読み込む関数
function readTextFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { console.error('エラーが発生しました:', err);
      return;
     }
     const even = evenCharacters(data);
     console.log('偶数番目の文字:', even);
    });
   }
////➀テキスト読み込みモジュールend************************************************************************


////➁偶数文字取得モジュールstart************************************************************************
//偶数番号の文字を抽出する関数
function evenCharacters(inputString) {

  //結果を出力する変数resultを定義
  let result = '';

  //変数（引数）inputStringの偶数番目を取り出して、変数resultに追加する
  for (let i = 1; i < inputString.length; i += 2) {
      result += inputString[i];
  }
  return result;
}
////➁偶数文字取得モジュールend************************************************************************


//読み込むテキストファイルのパスを指定
const filePath = 'C:\\Users\\town\\Desktop\\example.txt';
//デスクトップ上のテキストファイルのパスを引数に関数を実行
readTextFile(filePath);