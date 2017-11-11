$(document).ready(function() {
    const clockModule = $('#watch-time');
    const tempDate = $('.date').html(moment().format('MMMM Do YYYY'));
    const tempTime =  $('.time').html(moment().format('H:mm'));

    function update() {
        $('.time').html(moment().format('H:mm'));
    }

    setInterval(update, 60000);

    // const hexArray = ['#EEC25E','#F79D84','#59CD90','#39A0ED','#EE6352'];
    // const randBg = Math.floor(Math.random()*hexArray.length);


    // $('.header').css('background', hexArray[randBg]);
});