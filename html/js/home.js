$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/message",
        type: "GET",
        dataType: 'json',
    })
        .done(function (data, textStatus, jqXHR) {
            console.log(typeof data.check)
            if (data.check) {
                haveUserLogin(data)
            }

        })
});

function haveUserLogin(data) {
    const user = document.querySelector('.nav-item.dropdown')
    user.classList.toggle('hide')
    const name = user.querySelector('a')
    name.innerText = `${data.username}` //sửa thành data.dataUser.username

}