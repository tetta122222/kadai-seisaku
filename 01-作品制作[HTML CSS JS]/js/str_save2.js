// 表示させる件数total_hit_countを変える
//市別に表示させるようにする
//11/16代替画像を表示させたい
var clicknum = 1;
var back_page = $('#back_page');
var next_page = $('#next_page');
var a = $(".page1");
let pageCount;
var ajax = new XMLHttpRequest();
var total_hit_count;
let page;
let paeg2;
let i = 0;
let j;
let k;
let count = 0;
let count1 = 0;
let category_l = "RSFST01000";
var areacodeL = sessionStorage.getItem('value1');
let name = "";

$('#search-buttom').on('click', function(){
    index = 0;
    i = index * 10;
    name =  $("#search-input").val();
    food();
    getfood();
});


function food(){
    console.log( i );
    $('.page1').remove();
    $('.hotel_box').remove();
    //let hit_per_page = 100;
    console.log(name);
    console.log(areacodeL);
    console.log(category_l);
    ajax.open("get", "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=5aca6cc18a0f24786df3e9e16531427e&pref=PREF46&hit_per_page=100&id&areacode_l="+ areacodeL + "&category_l="+ category_l + "&name=" + name   );
    ajax.responseType = 'json';
    ajax.send(null);
}

function  getfood() {
    const htmlList = document.querySelector("#list");
    ajax.onload = function (e) {
        
        let array = "";
        array = e.target.response.rest;
        total_hit_count ="";
        let textcontent;

        total_hit_count = e.target.response.total_hit_count;
        j = i + 10;
        console.log( i,j );
        k = i;
        for(  i; i < j; i++ ){
            let shop_image = array[i].image_url.shop_image1;
            console.log(shop_image);
            if(shop_image == ""){
                shop_image = "../img/no_image.png";
            }
            textcontent =
            '<div class="hotel_box">'+ '<img src ="' + shop_image + ' " >'+  
            '<ul><li>' + array[i].name + '</li>' + 
            '<li>' + array[i].name_kana + '</li>' + 
            '<li>' + array[i].address + '</li>' + 
            '<li>' + array[i].tel + '</li>'+'</ul>' + 
            '<div class = "hotel_child">' + '<p>予算￥'+array[i].budget +'～</p><a href ="' + array[i].url + '"> 詳細情報へ</a></div>'+
            '</div></div>';
            htmlList.innerHTML += textcontent;

        };

        back_page.toggleClass('display_none');
        
        $(".page1").eq(0).on('click', function(){
            back_page.addClass("display_none");
        });
        
        $(".page1").eq(-1).on('click', function(){
            next_page.addClass("display_none");
        });
    };
    setTimeout("button()", 2000);
}

var index;

function button(){
    page =  Math.floor(total_hit_count/10 + 1);
    page2 = Math.floor(total_hit_count/10);
    let contents = "";
    
    for(let kkk = 1; kkk < page; kkk++){
        contents += '<button  class="page1 notranslate" translate: no; value="' +kkk+' "> ' +kkk+'</button>';
        $('#page_nam').append(contents);
        contents = "";
    }
    $(".page1").on('click', function(){
        index = $('button.page1').index(this);
        i = index * 10;
        food();
        getfood();
        a();
    })
    pagination();
}



function pagination(){
    $(".page1").eq(index).css('background','#f582ae');
    var cnt = $(".page1").length;
    if(cnt > 7){   
     $(".page1").slice(7,cnt).addClass('display_none');
     if(i > 40){
        $(".page1").addClass('display_none');
        $(".page1").slice(i/10-4,i/10+3).removeClass("display_none");
    }
    }
}
    

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
//----------------------------------------
//場所ボタンクリック
//-----------------------------------
$('.area').on('click', function(){
    if(count1 === 0 ){
        count1 = 1;
        $('.cate2').removeClass('display_none');
            }
   else{
       count1 = 0;
        $('.cate2').addClass('display_none');    
   }
})
//---------------
//ジャンル切り替え
//-------------
$('.sort').on('click', function(){
    index = 0;
    i = index * 10;
    $('.hotel_box').remove();
    category_l = $(this).attr('data-value');
    let category_l_2 = $(this).val();
    console.log(category_l_2);
    $('.cate').addClass('display_none');
    $('.gener').val(category_l_2);
    count = 0;
    count1 = 0;
    food();
    getfood();
})
//--------------------
//場所切り替え
//---------------
$('.area1').on('click', function(){
    index = 0;
    i = index * 10;
    $('.hotel_box').remove();
    areacodeL = $(this).attr('data-value');
    let category_l_2 = $(this).val();
    $('.cate2').addClass('display_none');
    $('.area').val(category_l_2);
    count = 0;
    count1 = 0;
    food();
    getfood();
})






food();
getfood();

var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop <= 1) {
        $('.form').addClass('hide');
    } 
    else {
        $('.form').removeClass('hide');
    }
    startPos = winScrollTop;
});

$("#search-input").on('click', function(){
    $('.navi').addClass('hide2');
  }); 

  
  $("#google_translate_element").on('click', function(){
    console.log("aaaaaa");
    $("iframe").addClass('width');
    $('td').addClass('none');
});


$("iframe").on("load",function(){
    console.log("こんにちは");
   });
   