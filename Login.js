// /^[a-zA-Z0-9]+$/.test(username) Ký tự bị so sánh bắt buộc có ít nhất 1 ký tự
// Hàm lấy giá trị nhập vào từ người dùng 

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(key, mess) {
    document.getElementById(key + "_error").innerHTML = mess;
}

// Hàm xuất thông báo cảnh báo cho người dùng

function validate() {
    flag = true;

    var username = getValue("username");
    var password = getValue("password");
    var reusername = "Tuyen";
    var repassword = "0344014411";
    
    document.getElementById("username").addEventListener('input', function(){
        showError("username", "");
    });
       
    if (username == "") {
        flag = false;
        showError("username", "Username not Logged in.");
    }
    else if (username.length < 4) {
        flag = false;
        showError("username", "Username must be greater than five.");
    }
    else if (!/^[a-zA-Z0-9]+$/img.test(username)) {
        flag = false;
        showError("username", "Username entered is incorrect.");
    }
    else if (username != reusername) {
        flag = false;
        showError("username", "Username entered is error.");
    }
    else if (password == "") {
        showError("username", "");
        flag = false;
        showError("password", "Password not Logged in.");
    }
    else if (password.length < 8) {
        flag = false;
        showError("password", "Password entered is incorrect.");
    }
    else if (password != repassword) {
        flag = false;
        showError("password", "Password entered is error.");
    } else {
        flag = true;
        showError("password", "");
        document.getElementById("username_error").innerHTML = "";
        alert("Bạn đã đăng nhập thành công!");
    }
    return flag;
}

