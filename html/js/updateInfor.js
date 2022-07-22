$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/message",// route render infor
        type: "GET",
        dataType: 'json',
    })
        .done(function (data, textStatus, jqXHR) {
            renderInfor(data)
        })
    $(".updateBtn").click(function (e) {
        e.preventDefault();
        updateInfor()
    });
});

function renderInfor(data) {
    const name = document.querySelector('#name')
    name.innerText = `${data.username}` //sửa thành data.dataUser.username
    const password = document.querySelector('#password')
    password.innerText = `${data.password}` //sửa thành data.dataUser.password
}

function updateInfor() {
    const newName = document.querySelector('#new-name input').value
    const newPassword = document.querySelector('#new-password input').value
        .ajax({
            url: "http://localhost:3000/message",// route update infor
            type: "POST",
            dataType: 'json',
            data: {
                newName,
                newPassword
            }
        })
        .done(function (data, textStatus, jqXHR) {
            console.log(data)
        })
}