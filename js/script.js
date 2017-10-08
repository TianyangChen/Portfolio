function equalHeight() {
    var nameHeight = $(".name").height();
    $(".logo").height(nameHeight);
}
equalHeight();
$(window).resize(equalHeight);