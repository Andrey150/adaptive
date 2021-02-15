$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active'); //добавляет и убивает класс актив
        $('body').toggleClass('lock');   //запрещает скролить контент при открытом бургерменю, добавляет класс лок
    });
});