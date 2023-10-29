$(function(){
  //class=dropdwn li上にマウスが乗せバインドを行う
  $(".dropdwn li").on("mouseenter", function(){
    //マウスを乗せたclass=dropdwn liのclass=dropdwn_menuを上から下にスライドさせ表示
    $(this).find(".dropdwn_menu").slideDown();
  //class=dropdwn li上にマウスから外しバインドを行う
  }).on("mouseleave", function(){
    //マウスを外したclass=dropdwn liのclass=dropdwn_menuを下から上にスライドさせ非表示
    $(this).find(".dropdwn_menu").slideUp();
  });
});