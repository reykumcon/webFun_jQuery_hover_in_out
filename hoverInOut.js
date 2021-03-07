$(document).ready(function() {
    
    var swapImage = function() {
        var altImg = $(this).attr("data-alt-src");
        $(this).attr("data-alt-src", $(this).attr("src"));
        $(this).attr("src", altImg);
    }

    $("img").hover(swapImage, swapImage);

})