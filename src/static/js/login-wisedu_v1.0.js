// 这个是设计到登陆操作的统一js

(function ($) {
    $(document).ready(function () {

        // 绑定帐号登录页面 用户名输入框修改事件，判断是否已经填写
        var casLogin_username = $("#casLoginForm").find("#username");
        casLogin_username.bind("change", function () {
            checkRequired($(this), "usernameError");
        });
        // 绑定帐号登录页面 密码输入框修改事件，判断是否已经填写
        var casLogin_password = $("#casLoginForm").find("#password");
        casLogin_password.bind("change", function () {
            checkRequired($(this), "passwordError");
        });

        // 元素聚焦
        if ($("#username").val() != "") {
            $("#password").focus();
        } else {
            $("#username").focus();
        }
    });
})(jQuery);



// 统一校验必填和展示错误信息的方法
function checkRequired(obj, msgId) {
    if (obj.length == 0) {
        return true;
    }

    if (obj.val() == "") {
        $("#" + msgId).show();
        return false;
    } else {
        $("#" + msgId).hide();
        return true;
    }
}
