$(function(){
  //class="select-box"内のoptionを変更する
  $(".select-box").on("change", function(){
    //選択したoptionのvalueを取得
    var select = $("option:selected").val();
    //class="food-list"内のlistのインデックスとdataを取得し繰り返しの動作を行う
    $(".food-list li").each(function(index, data){
      //1度すべてのリストを非表示
      $(this).hide();
      //リストのデータ名を取得
      var category = $(this).data("category-type");
      /*ifで選択したoptionのvalue名とリストのデータ名が一致したとき
      或いは選択したoptionが全てだった時動作を記述*/
      if(category === select || select === "all"){
        //名が一致したものを再び表示
        $(this).show();
      }
    });
  });
});