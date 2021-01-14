//同じ数字を入力したら表示されるのが変わる
// 改ページボタンを消えるようにする
var clicknum = 1;
var back_page = $('#back_page');
var next_page = $('#next_page');
let pageCount ;
var sort_num ="standard";
let count = 0;
let count1= 0;
let small_cd = sessionStorage.getItem('value');
var keyword = "";
let k;
$('.sort').on('click', function(){
  $('.hotel_box').remove();
  sort_num = $(this).attr('data-value');
  $('.cate').addClass('display_none');
  $('.page1').addClass('display_none');
  $('.cate2').addClass('display_none');
  count = 0;
  count1 = 0;
  getHotels();
  setTimeout("aaaaa()", 2000);  
})

$('.sort2').on('click', function(){
  //clicknum = 1;
  $('.hotel_box').remove();
  small_cd = $(this).attr('data-value');
  console.log(small_cd);
  $('.cate').addClass('display_none');
  $('.page1').addClass('display_none');
  $('.cate2').addClass('display_none'); 
  // count = 0;
  // count1 = 0;
  getHotels();  
  setTimeout("aaaaa()", 2000);  

})



function  getHotels(pageValue){
  
  console.log(keyword);
  var large_cd = 'japan',
      mid_cd = 'kagoshima';
      hits = 10,
      page = 1;

  if( pageValue !== undefined ){
    page = pageValue;
  }
  // データを引っ張る
  $.ajax({
    url: 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?format=json&applicationId=1020173082905393111&keyword=' + keyword +"&largeClassCode=" + large_cd + '&middleClassCode=' + mid_cd + '&smallClassCode=' + small_cd  + '&page=' + page +'&hits=' + hits +'&sort='+ sort_num, 
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
  
};

getHotels();
setTimeout("aaaaa()", 2000);

//-----------------------------------------
//ジャンルボタンクリック
//-----------------------------------------
$('.gener').on('click', function(){
  if(count === 0 ){
      count = 1;
      $('.cate').removeClass('display_none');
          }
 else{
     count = 0;
      $('.cate').addClass('display_none');    
 }
})

//-----------------------------------------
//エリアボタンクリック
//-----------------------------------------
$('.gener2').on('click', function(){
  if(count1 === 0 ){
      count1 = 1;
      $('.cate2').removeClass('display_none');

          }
 else{
     count1 = 0;
      $('.cate2').addClass('display_none');    
 }
})



//-----------------------------------------
//次ページへ
//-----------------------------------------
$('body').on('click', '#next_page', function() {
  $('.hotel_box').remove();
  back_page.removeClass('display_none');
  clicknum += 1;
  getHotels(clicknum);
  let max_page = Math.floor( pageCount / 10 + 1 );
  if(clicknum === max_page){
    next_page.toggleClass('display_none');
    $('#back_page').click(function() {
      next_page.removeClass('display_none');
    });
  }
})

//-----------------------------------------
//前ページへ
//-----------------------------------------
$('body').on('click', '#back_page', function() {
  $('.hotel_box').remove();
  clicknum -= 1;
  getHotels(clicknum);
  if(clicknum === 1){
    back_page.toggleClass('display_none');
  }
});

//--------------
// 番号のページへ
//--------------
function aaaaa(){
  // var page_nam  = $('#page_nam');
  let contents1 ="";
  let page = Math.floor( pageCount / 10  + 2 );
  
  // ページ数
  for(var i = 1; i < page; i++){
    contents1 += '<button  class = "page1" value = "' +i+' "> ' +i+'</button>';
    $('#page_nam').append(contents1);
    contents1  = "";
  }
  
  //ページングの番号を押したとき
  $(".page1").on('click', function(){ 
    index = 0
    clicknum = 2;
    var index = $('button.page1').not('.display_none').index(this) + 1;
    $('button.page1').css('background','white');
    $(this).css('background','#f582ae');
    clicknum = index;
    getHotels(clicknum);
    console.log(index);
    $('.hotel_box').remove();
    let max_page = Math.floor( pageCount / 10 + 1 );
    console.log("aaaaaaaaa");
    if(clicknum === max_page){
      next_page.toggleClass('display_none');
      $('#back_page').click(function() {
        next_page.removeClass('display_none');
      });
    }
    // pagination();
  });  
  // pagination();
}
var startPos = 1000,winScrollTop = 0;
$(window).on('scroll',function(){
  
    winScrollTop = $(this).scrollTop();
    if(winScrollTop >= 100) {
        $('.navi').removeClass('hide');
    }

    if(winScrollTop <= 100){
      $('.navi').toggleClass('hide');
    }
    startPos = winScrollTop;
});

 



