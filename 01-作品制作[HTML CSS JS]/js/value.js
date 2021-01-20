$(".radio").on('click', function(){
    
    sessionStorage.setItem('value',$(this).val());
    sessionStorage.setItem('value1',$(this).data('value'));
})