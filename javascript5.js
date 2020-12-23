
// switch (variable)
// {
//     case value_1 : {

//         break;
//     }
//     case value_2 : {

//         break;
//     } 
//     default : {

//     }
// }

var number = 20;
var mod = number % 3;
// if (number % 2 == 0){
//     alert('Đây là số chẵn');
// }

switch (mod){
    case 0 : {
        alert('Chia hết cho 3');
        break;
    }
    default : {
        alert('Không Chia hết cho 3');
    }

}