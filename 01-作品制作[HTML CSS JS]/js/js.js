//-----------------------------------------
//serchボタンをクリック
//-----------------------------------------
$('#search-buttom').on('click', function(){
  keyword = $("#search-input").val();
   console.log(keyword);
  
  
  $('.page1').remove();
  $('.hotel_box').remove();
  let mid_cd = 'kagoshima';
  $.ajax({
    url: 'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&applicationId=1020173082905393111&keyword=' + keyword + '&middleClassCode=' + mid_cd,
    type: 'post',
    dataType:'jsonp'
  })


  .done(function(response) {
    pageCount = response.pagingInfo.recordCount;
    console.log(pageCount);
    let hotels = response.hotels;
    let contents = '';
    let i = 0;
    hotels.length;
    for( i; i<hotels.length; i++){
      let num1  = Math.floor(hotels[i].hotel[0].hotelBasicInfo.reviewAverage);
      let num2  = 5 - num1;
      /*店舗名～住所の表示*/
      contents +=
      '<div class="hotel_box"><img src="' + hotels[i].hotel[0].hotelBasicInfo. hotelImageUrl + '">'+
      '<ul><li>' + hotels[i].hotel[0].hotelBasicInfo.hotelName + '</li>'+
      '<li>' + hotels[i].hotel[0].hotelBasicInfo.hotelKanaName + '</li>'+
      '<li>' + hotels[i].hotel[0].hotelBasicInfo.address2 + '</li>';
      /*レビューの表示*/
      for(let j = 0; j < num1; j++){
         contents +='<img src="../img/star2.png" alt="星（黄）" class="image1 image">';
      } 
      for(let k = 0; k < num2; k++){
        contents +='<img src="../img/star1.png" alt="星（灰）" class="image1 image">';
      }
      /*料金とリンクボタンの表示*/
      contents +=
      '<li>' + hotels[i].hotel[0].hotelBasicInfo.telephoneNo + '</li></ul>'+
      '<div class="hotel_child"><p>最安料金￥' + hotels[i].hotel[0].hotelBasicInfo.hotelMinCharge + '～</p>'+
      '<a href ="' + hotels[i].hotel[0].hotelBasicInfo.hotelInformationUrl + '"> 詳細情報へ</a></div></div>';
      $('#list').append(contents);      
      
      sessionStorage.setItem("gdsjajo",hotels[i].hotel[0].hotelBasicInfo.hotelName);
      /*変数の中身を初期化*/
      contents  = "";
    }
    
  });
  setTimeout("aaaaa()", 2000);
})