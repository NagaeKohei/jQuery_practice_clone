$(function(){
  //ボタン要素class=nav-itemをクリックしバインドを行う
  $(".nav-item").on("click", function(){
    //class=nav-itemで選択した特定のインデックスを取得
    var navlist = $(this).index();
    //class=description liにclass=is-hiddenを追加
    $(".description li").addClass("is-hidden");
    //class=nav-itemと同じインデックスのclass=description liのclass=is-hiddenを削除
    $(".description li").eq(navlist).removeClass("is-hidden");
  });
});