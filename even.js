'use strict';
//fsモジュールを取得
const fs = require("fs");

////➀テキスト読み込みモジュールstart************************************************************************
//テキストファイルを読み込む関数
function readAndWrite(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {console.error('エラーが発生しました:', err);
      return;
     }

     //読み込んだテキストをevenCharacters関数で偶数を取得する
     const even = evenCharacters(data);
     //ログ
     console.log('偶数番目の文字:', even);

     //テキストファイルに書き込む関数
     fs.writeFile('C:\\Users\\town\\Desktop\\result.txt', even, (err) => {
        if (err) { console.error('ファイル書き込み中にエラーが発生しました:', err);
        return;
       }
        //ログ
        console.log(`結果が'C:\\Users\\town\\Desktop\\result.txt'に書き込まれました`);
      });

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
readAndWrite(filePath);