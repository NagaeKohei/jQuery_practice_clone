$(function(){
  //Q1-1 読み込み時文字の色の変化
  //ページを読み込んだらid="q1"の文字色を青に変更
  $("#q1").css("color","blue");

  //o1-2 クリックしてボタンの色を変化
  //ボタン要素id=q2をクリックしバインドを行う
  $("#q2").click(function(){
    //id=q2の背景色を黒色に変更する
    $(this).css("background-color", "black");
  });

  //Q1-3 クリックしたらフェードアウト
  //ボタン要素id=q3をクリックしバインドを行う
  $("#q3").click(function(){
    //id=q3を2.5秒かけてフェードアウト
    $(this).fadeOut(2500);
  });

  //Q1-4 クリックしたらサイズ変更
  //ボタン要素id=q4をクリックしバインドを行う
  $("#q4").click(function(){
    //id=q4の横幅を400pxに変更
    $(this).width(400);
    //id=q4の高さを150pxに変更
    $(this).height(150);
    //id=q4の文字の大きさを1.5remに変更
    $(this).css("font-size", "1.5rem");
  });

  //Q1-5 クリックしてDOMを挿入
  //ボタン要素id=q5をクリックしバインドを行う
  $("#q5").click(function(){
    //要素をid=q5外の前に挿入し、スタイルでインラインブロックに設定し横並びに
    $("<p style='display:inline-block;'>要素外の前</p>").insertBefore(this);
    //要素をid=q5内の前に挿入し、スタイルでインラインブロックに設定し横並びに
    $("<p style='display:inline-block;'>要素内の前</p>").prependTo(this)
    //要素をid=q5内の後ろに挿入し、スタイルでインラインブロックに設定し横並びに
    $("<p style='display:inline-block;'>要素内の後ろ</p>").appendTo(this);
    //要素をid=q5外の後ろに挿入し、スタイルでインラインブロックに設定し横並びに
    $("<p style='display:inline-block;'>要素外の後ろ</p>").insertAfter(this)
  });

  //Q1-6 クリックして移動
  //ボタン要素id=q6をクリックしバインドを行う
  $("#q6").click(function(){
    //アニメーションメソッドをid=q6に設定
    $(this).animate({
      //要素の左余白を‐300pxに設定し移動
      marginLeft: "-300px",
      //要素の上余白を‐300pxに設定し移動
      marginTop: "100px"
      //上記動作を1秒間で完結
    }, 1000);
  });

  //Q1-7 クリックしてidのノードをコンソールに表示
  //ボタン要素id=q7をクリックしバインドを行う
  $("#q7").click(function(){
    //コンソールにid=q7のHTMLノードを表示
    console.log($(this)[0]);
  });

  //Q1-8 ホバー時サイズ変更
  //ボタン要素id=q8をクリックしバインドを行う
  $("#q8").hover(function(){
    //id=q8の横幅を400pxに変更
    $(this).width(400);
    //id=q8の高さを150pxに変更
    $(this).height(150);
    //id=q8の文字の大きさを1.5remに変更
    $(this).css("font-size", "1.5rem");
  },function(){ //ホバーを外した後の処理
    //id=q8の横幅を200pxに変更
    $(this).width(200);
    //id=q8の高さを15pxに変更
    $(this).height(15);
    //id=q8の文字の大きさを1remに変更
    $(this).css("font-size", "1rem");
  });

  //Q1-9 クリックして配列のアラート表示
  //ボタン要素id=q9の各配列の1つをクリックしバインドを行う
  $("#q9 li").click(function(){
    //各配列のインデックスを取得
    var alrt = $(this).index();
    //取得したインデックスをアラートに表示
    alert(alrt);
  });

  //Q1-9 クリックして配列のアラート表示
  //ボタン要素id=q10の各配列の1つをクリックしバインドを行う
  $("#q10 li").click(function(){
    //各配列のインデックスを取得
    var btn10 = $(this).index();
    /*id=q11の配列のインデックス番号とid=q10の
    インデックス番号が一致しているid=q11の配列のpaddingを70pxに変更*/
    $("#q11 li").eq(btn10).css("padding", "70");
    /*id=q11の配列のインデックス番号とid=q10の
    インデックス番号が一致しているid=q11の配列の文字の大きさを1.5remに変更*/
    $("#q11 li").eq(btn10).css("font-size", "1.5rem");
    /*id=q11の配列のインデックス番号とid=q10の
    インデックス番号が一致しているid=q11の配列の角枠の丸みを50％に変更*/
    $("#q11 li").eq(btn10).css("border-radius", "50%");
  });
});

