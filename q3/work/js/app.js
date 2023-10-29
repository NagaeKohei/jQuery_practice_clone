$(function(){
  //ボタン要素class=drawer_buttonをクリックしバインドを行う
$(".drawer_button").on("click", function(){
  //class=drawer_buttonに新たなクラス名activeを与えたり外したりと切り替える
  $(this).toggleClass("active");
  //class=drawer_bgの表示をフェードイン/フェードアウトで切り替える
  $(".drawer_bg").fadeToggle();
  //class=drawer_nav_wrapperに新たなクラス名openを与えたり外したりと切り替える
  $(".drawer_nav_wrapper").toggleClass("open");
});
});