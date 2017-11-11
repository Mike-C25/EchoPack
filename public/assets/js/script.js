$(document).ready(function() {
    const clockModule = $('#watch-time');
    const tempDate = $('.date').html(moment().format('MMMM Do YYYY'));
    const tempTime =  $('.time').html(moment().format('H:mm'));

    function update() {
        $('.time').html(moment().format('H:mm'));
    }

    setInterval(update, 60000);
});