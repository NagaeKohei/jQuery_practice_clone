$(function () {
  var pageCount = 1, searchWord = ""; // ページ番号とキーワードを初期化

  $(".search-btn").on("click", function () {
    var input = $("#search-input").val(); // 入力値を取得
    if (input !== searchWord) { // 入力値がキーワードと異なる場合
      pageCount = 1; // ページ番号を1にリセット
      $(".lists").empty(); // リストを空にする
      searchWord = input; // キーワードを更新
    } else {
      pageCount++; // ページ番号をインクリメント
    }
    $.ajax({
      // テンプレートリテラルでURLを作成
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`, 
      method: "GET"
    }).done(function (response) {
      const result = response['@graph'];
      displayResult(result); // 書籍の情報をリストに追加する関数を呼び出す
     })
    .fail(function (error) {
      $(".lists").empty(); // リストを空にする
      $(".message").remove(); // メッセージを削除
      if (error.status === 0) { // 通信エラーの場合
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をして下さい。</div>');
      } else if (error.status === 400) { // リクエストエラーの場合
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>');
      } else { // その他のエラーの場合
        $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行って下さい。</div>');
      }
    })
  });
 
  $(".reset-btn").on("click", function () {
    pageCount = 1; // ページ番号をリセット
    searchWord = ""; // キーワードをリセット
    $(".lists").empty(); // リストを空にする
    $(".message").remove(); // メッセージを削除
    $("#search-input").val("") // 入力値を空にする
  })

    // 書籍の情報をリストに追加する関数
    function displayResult(books) {
      $(".message").remove(); // メッセージを削除
      var length = books[0].items?.length; // オプショナルチェイニングでitemsが存在するかチェック
      if (length > 0) { // 0より大きいかどうか比較
        $.each(books[0].items, function (index, book) {
          var item = `<li class="lists-item"><div class="list-inner"><p>タイトル：${book.title ?? "タイトル不明"}</p><p>作者：${book["dc:creator"] ?? "作者不明"}</p><p>出版社：${book["dc:publisher"]?.[0] ?? "出版社不明"}</p><a href="${book.link["@id"]}" target="_blank">書籍情報</a></div></li>`; // テンプレートリテラルで文字列を作成
          $(".lists").prepend(item); // リストに追加
        });
      } else {
        $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>'); // 検索結果がない場合のメッセージ
      }
    }
});
