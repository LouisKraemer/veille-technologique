$(document).ready(_ => {
    if ($(window).scrollTop() != 0) {
        $('.navbar-perso').css('visibility', 'visible');
    }

    $(document).scroll(_ => {
        if ($(window).scrollTop() >= 1) {
            $('.navbar-perso').css('visibility', 'visible');
        } else {
            $('.navbar-perso').css('visibility', 'hidden');
        }
    })

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
})
