// tìm số lớn nhất trong 3 số

var a =5
var b =8
var c =9


if(a>b && a>c){
    console.log("max là ",a);
}else if(b>a && b>c){
    console.log("max là ",b);
}else{
    console.log("max là ",c);
}


//function
function max(){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

//gọi hàm
console.log(max()*2);

var a =50
var b =18
var c =49
max()

function hello(name){
    console.log("xin chào", name);
}

//param (parameter) -- truyển 1 tham số
hello("Hiếu")
hello()
hello()

// truyền nhiều tham số 
function info(name, address, sdt){
    console.log("xin chào",name,address,sdt);
}
info("Hiếu","Thái Nguyên",123)

//function scopes, các biến trong function thì bên ngoài k dùng đc
//closure, các biến khia báo bên ngoài thì bên trong dùng đc

//hoisting
let x = 8;
console.log(x);

if(true){
    var y=7;
}

function add(a,b){
    let c=a+b;
    return c;
}
let total = add(5,6);
console.log(total);

function light(x){
    if(x=="hỏng"){
        console.log("bóng đèn hỏng");
        return "5";
    }
    if(x==true){
        console.log("bóng đèn bật");
    }else{
        console.log("bóng đèn tắt");
    }
}
light("hỏng")

//return undifined = return;
//truyền tham số mặc định

let sum = function(a, b){
    return a+b;
}
console.log(sum(5, 6));