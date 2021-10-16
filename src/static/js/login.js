$(function () {
    // 初始化checkbox事件
    $('#rememberMe').iCheck({
        checkboxClass: 'icheckbox_square-green',
        increaseArea: '20%' // optional
    });

});

function selectLi(obj) {
    $(obj).siblings().removeClass("selected");
    $(obj).addClass("selected");
    var tabid = $(obj).attr("tabid");
    $(".auth_tab_content_item").hide();
    $(".auth_tab_content_item[tabid=" + tabid + "]").show();
}