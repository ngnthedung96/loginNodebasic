$(document).ready(function () {
    $('.form-submit').click(function (e) {
        e.preventDefault();
        const userName = document.querySelector("#fullname")
        const password = document.querySelector("#password")
        if (userName.value && password.value) {
            $.ajax({
                url: 'http://localhost:3000/message',
                dataType: 'json',
                type: "GET"
            })
                .done(function (data, textStatus, jqXHR) {
                    successFunction(data)
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    errorFunction(jqXHR, textStatus, errorThrown)
                })
        }
    });
});
// ------toast---------------
import toast from "./toast.js"
function successFunction(data) {
    if (data.check) {
        toast({
            title: 'Success',
            message: 'Đăng nhập tài khoản thành công',
            type: 'success'
        })
        // setTimeout(function () {
        //     location.reload()
        // }, 2000)
    }
    else {
        toast({
            title: 'Error',
            message: 'Sai tên tài khoản hoặc mật khẩu',
            type: 'error'
        })
    }
}
function errorFunction(jqXHR, textStatus, errorThrown) {
    toast({
        title: 'Error',
        message: 'Xảy ra lỗi ' + textStatus + errorThrown,
        type: 'error'
    })
}

