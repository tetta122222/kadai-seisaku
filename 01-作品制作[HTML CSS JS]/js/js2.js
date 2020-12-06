var ajax = new XMLHttpRequest();
var total_hit_count;
let i = 0;
let j;
let category_l = "RSFST01000";
let areacodeL = "AREAL5406";

function score(){
    console.log( i );
    ajax.open("get", "https://api.gnavi.co.jp/PhotoSearchAPI/v3/?keyid=5aca6cc18a0f24786df3e9e16531427e&shop_name=IZAKAYA 熊七"   );
    ajax.responseType = 'json';
    ajax.send(null);
}

function  score_view() {
    const htmlList = document.querySelector("#list");
    ajax.onload = function (e) {
        
        let array = "";
        array = e.target.response;
        total_hit_count = e.target.response.total_hit_count;
        console.log(array[0].total_score);
    };
 
}
score();
score_view();