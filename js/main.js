$(function() {
    // $('.title-page').
    var hoverSrc, originalSrc;
    $('.title-page').hover(function() {
        originalSrc = $(this).find('img').attr('src');
        hoverSrc = originalSrc.replace('title-page', 'title-page-mask');
        $(this).find('img').attr('src', hoverSrc);
    }, function() {
        $(this).find('img').attr('src', originalSrc);
    });
});
