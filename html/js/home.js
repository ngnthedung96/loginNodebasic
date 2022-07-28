$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/message",
        type: "GET",
        dataType: 'json',
    })
        .done(function (data, textStatus, jqXHR) {
            if (data.status) {
                haveUserLogin(data)
                postProductTocart(data)
            }

        })
});

function haveUserLogin(data) {
    const user = document.querySelector('.nav-item.dropdown')
    user.classList.toggle('hide')
    const name = user.querySelector('a')
    name.innerText = `${data.username}` //sửa thành data.dataUser.username
}

function postProductTocart(data) {
    $(".btn__buy").click(function (e) {
        e.preventDefault();
        const parentDiv = e.target.parentElement
        const nameProduct = parentDiv.querySelector(".name-product").innerText
        const priceProduct = parentDiv.querySelector(".price-product").innerText
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/post",
            data: {
                "user_id": data.id,
                "name": `${nameProduct}`,
                "price": `${priceProduct}`,
            },
            dataType: "json",
            success: function (response) {
                console.log('success')
            }
        });
    });
}