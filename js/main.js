$(function() {
    // 首頁的圖片 hover
    var hoverAction = function(event, theString, replaceString){
        var hoverSrc, originalSrc;
        event.hover(function() {
            originalSrc = $(this).find('img').attr('src');
            hoverSrc = originalSrc.replace(theString, replaceString);
            $(this).find('img').attr('src', hoverSrc);
        }, function() {
            $(this).find('img').attr('src', originalSrc);
        });
      };
    hoverAction($('.title-page'), 'title-page', 'title-page-mask');
    hoverAction($('.product-box'), '-img.png', '-img-mask.png');
});
