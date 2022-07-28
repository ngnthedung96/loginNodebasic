import toast from "./toast.js"
$(document).ready(function () {
    $('.form-submit').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:3000/message',
            dataType: 'json',
            type: "POST",
            data: {
                "username": $('#fullname').val(),
                "password": $('#password').val(),
            },
            success: function (data) {
                console.log(data);
                // e.preventDefault();
                // if (data.check == true) {
                //     toast({
                //         title: 'Success',
                //         message: 'Đăng nhập tài khoản thành công',
                //         type: 'success'
                //     })
                // } else {
                //     toast({
                //         title: 'Error',
                //         message: 'Sai tên tài khoản hoặc mật khẩu',
                //         type: 'error'
                //     })
                // }
            }

        })
    });
});
// ------toast---------------




