$(".radio").on('click', function(){
    
    sessionStorage.setItem('value',$(this).val());
    sessionStorage.setItem('value1',$(this).data('value'));
})

let valu1;
let value2;
$(".search").on('click', function(){
    value1 = sessionStorage.getItem('value');
    value2 = sessionStorage.getItem('value1');
    if(value1 === "" || value2 === ""){
        alert("aaaa");
    }
})
