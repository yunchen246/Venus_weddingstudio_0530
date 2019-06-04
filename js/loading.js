window.onload = function() {
    $(".loading-anime").fadeOut("slow", function () {
        //$('#loading-page').css("display", "none");
        $('#loading-page').remove();
        $('.loading-anime').remove();
    });
};