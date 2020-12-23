

// function showMessage(){

//     alert('Clicked');

// }
// // obj chính là thẻ input có this
// function showContent(obj){

//     alert(document.getElementById('name').value);
//     // alert(obj.value);

// }



// Tham số chuyền vào của sự kiện muốn lấy vào function Thay vì chọn document.getElementById('name') ta đặt this trong thẻ input
// Khi đó this chính là thẻ HTML đó

window.onload = function(){

    var input = document.getElementById('name');
    var p = document.getElementById('show');

    input.addEventListener('change', function(){
        p.innerHTML = input.value;
        // p.innerHTML = "hello";
    });
// Khi có sự kiện change hàm function sẽ chạy
// Cú pháp nameThe.addEventListener('nameSuKien', function(){});

};

