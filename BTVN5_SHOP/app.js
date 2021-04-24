let products = [{
    id : 1,
    name : "Banh Mi Nho", 
    Price : 20000
},{
    id : 2,
    name : "Trung Vo Xanh", 
    Price : 80000
},{
    id : 3,
    name : "Xuc Xich", 
    Price : 30000
},{
    id : 4,
    name : "Kem", 
    Price : 10000
}]

let carts = [{
    SoLuongMua : 2,
    id : 3
},{
    SoLuongMua : 5,
    id : 1
}];


let total = 0;

let thanhtien = carts.reduce(function(total, carts){
    let findedproduct =  products.find(function(value){
        return value.id ==carts.id;
    })
    return  total + carts.SoLuongMua * findedproduct.Price;
    
},0)
console.log(thanhtien);

let num = [2,3,5,7,8];
//dùng hàm reduce để tính tích tất cả số này
//reduce: giá trị thứ nhất để lưu kết quả, giá trị thứ 2 để lưu value
// let Tich = 1;
// let TinhTich = num.reduce(function(Tich,value){
//     return Tich * value;
// },1)
// console.log(TinhTich);

//DOM
let a = [1,2,3,4];
console.log(a);
let b = [10,2000, ...a]; // [10, 2000, 1, 2, 3, 4]
// let b = Array.from(a)
b[0] = 10
console.log(a);

let x = {
    id : 100
}

let y = Object.assign({},x);
let k = y
k.id = 1000;
console.log(x);

