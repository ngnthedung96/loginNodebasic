$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/notice",
        dataType: "json",
        success: function (data) {
            if (data.status) {
                renderProducts(data)
            }
        }
    });
});

function renderProducts(data) {
    const row = document.querySelector("table tbody")
    var htmls = ''
    var count = 1
    for (var i of data.products) {
        htmls += `
        <tr>
                    <th>${count}</th>
                    <th>${i.name}</th>
                    <th>${i.price}</th>
                </tr>
        
        `
        count++
    }
    console.log(htmls)
    row.innerHTML = htmls
}