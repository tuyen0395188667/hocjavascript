


// //Cách viết: function namefunction (Tham số truyền vào của function)
// function showStudent(std){
//     console.log(std.name);
//     console.log(std.age);
// }
// // Có 1 Object sv
// var student = {
//     name : "Tuyen",
//     age : "22",
// };

// showStudent (student);

// function có giá trị trả về và o có giá trị trả về

//Viết function tìm giá trị lớn nhất trong mảng

var arr1 = [12,3,32,23,2656,232,2659,66,22];

function findMax(arr1){

    var max = arr1[0];

    for (var i = 1; i < arr1.length; i++){

        if (max < arr1[i]){
            max = arr1[i];
        }
    }
    return max;

}

var solonnhat = findMax(arr1);

console.log(solonnhat);
