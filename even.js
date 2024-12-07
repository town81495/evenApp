'use strict';

// 偶数番号の文字を抽出する関数
function evenCharacters(inputString) {

  //結果を出力する変数resultを定義
  let result = '';

  //変数（引数）inputStringの偶数番目を取り出して、変数resultに追加する
  for (let i = 1; i < inputString.length; i += 2) {
      result += inputString[i];
  }
  console.log(result);
  return result;
}

//コマンドプロンプトの第一引数の文字列で実行
evenCharacters(process.argv[2])

