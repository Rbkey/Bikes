$(document).ready(function () {
    $('.top__burger').click(function (event) {
        $('.top__burger,.nav__row').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
