$(document).ready(function () {
    $(".hide").click(() => {
        $("#title").hide();
    });
    $(".show").click(() => {
        $("#title").show();
    });
    $(".hide-slow").click(() => {
        $("#title").hide(2000);
    });
    $(".show-slow").click(() => {
        $("#title").show(2000);
    });
    $(".chance-color-blue").click(() => {
        $("#title").css('color', 'blue');
    });
    $(".chance-color-red").click(() => {
        $("#title").css('color', 'red');
    });
    $(".double-click").dblclick(() => {
        $("#title").css('font-style', 'normal');
    });
});