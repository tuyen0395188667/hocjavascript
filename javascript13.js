// 1/ setTimreout()
// 2/ setInterval(Tham so chuyen vao, thoi gian minh dat)

// function showMassage()
// {
//     alert("Thong bao!");
//     setTimeout(showMassage, 3000);
// }


// setInterval(showMassage, 3000);

function counter()
{
    var e = document.getElementById('counter');
    // e.innerHTML: Lấy giá trị bên trong thẻ/ sau đó parseInt chuyển sang dạng số Nguyên
    var value = parseInt(e.innerHTML);
    var new_value = value + 1;
    e.innerHTML = new_value;
}
var counter_interval = setInterval(counter, 1000);

function stopcounter(){
    // Dừng đếm
    clearInterval(counter_interval);
}

function startcounter(){
    counter_interval = setInterval(counter, 1000);
}
