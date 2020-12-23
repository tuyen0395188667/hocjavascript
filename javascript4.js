

// var fruit = 'Nho';
// if (fruit == 'Táo'){
//     alert('Ban an táo');
// }
    // if trong else
// else if (fruit == 'Nho'){
//     alert('Ban an qua nho');
// }
// else {
//     alert('Ban an qua khac');
// }

    // if else lồng nhau    
// var fruit = 'Nho';
// if (fruit = 'Nho'){
//     var flag = confirm("Bạn có muốn đổi quả khác không");
//     if (flag){
//         alert("Bạn đã chọn quả khác");
//     }
//     else{
//         alert("Bạn vẫn ăn táo");
//     }
// }

// Nhóm lệnh "kiem_tra_so_chan_le()""
function kiem_tra_so_chan_le(){

    var value = document.getElementById('fullname').value;

    if (value % 2 == 0){
        alert("Đây là số chẵn");
    }

    else {
        alert("Đây là số lẻ");
    }
     
}
