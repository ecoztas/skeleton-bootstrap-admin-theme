$(document).ready(function () {
    the_sidebar_launcher();
});

var the_sidebar_launcher = function () {
    $('#launcher').click(function () {
        $('#layout-page-sidebar').toggleClass('launch');
    });
};