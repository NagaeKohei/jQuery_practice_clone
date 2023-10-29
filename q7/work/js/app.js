$(function(){
  //ボタン要素class=drawer_buttonをクリックしバインドを行う
 $('.btn__submit').on("click", function(){
   
   //登録した名字を表示
   console.log("名字：" + "\n"+ inputElement($("#family__name")));
   
   //登録した名前を表示
   console.log("名前：" + "\n"+ inputElement($("#given__name")));

   //登録した生年月日を表示
   console.log("生年月日：" + "\n" + inputElement($(".year")) +"年"+ inputElement($(".month")) +"月"+ inputElement($(".day")) +"日");

   //登録した性別を表示
   var selectGender = $("input[name = 'gender']:checked")
   console.log("性別：" +"\n"+ inputElement(selectGender));

   //登録した職業を表示
   var selectWork = $("select[name = 'work']")
   console.log("職業："+"\n"+ inputElement(selectWork));

   //登録したアカウント情報を表示
   //アカウント名を表示
   console.log("アカウント名：" + "\n"+ inputElement($("#account__name")));
   //メールアドレスを表示
   console.log("メールアドレス：" + "\n"+ inputElement($("#email")));
   //パスワードを表示
   console.log("パスワード" + "\n"+ inputElement($("#password")));
   //パスワードを表示
   console.log("確認用パスワード" + "\n"+ inputElement($("#duplication__password")));

   //登録した連絡先を表示
   //住所を表示
   console.log("住所" + "\n"+ inputElement($("#address")));
   //電話番号を表示
   console.log("電話番号" + "\n"+ inputElement($("#tel")));
   
   //登録した購読情報を表示
   var selectSubscription =$('input[name="subscription"]:checked').map(function() {
     return $(this).val();
   }).get();
   console.log("購読情報："+"\n"+ selectSubscription);

 });
});

//登録した要素の各value名を取得する関数
function inputElement(inputString){
 var inputText = inputString.val();
 return inputText;
};