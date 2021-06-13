// aray là 1 chuổi các giá trị liên tiếp trong bộ nhớ

var a = [5,"hello", "Hạnh", true, false, 55555]
// console.log(a[0]);
// console.log(a);
// console.log(a.length);
for(var i=0; i <= a.length-1; ++i){
    console.log(a[i]);
}

// cách 2:
var i = 0;
while(i<a.length){
    console.log(a[i]);
    ++i;
}

//callback
// function x(a){
//     a()
// }
// x(function(){
//     console.log("helloo");
// })
// function x(){

// }
console.log("==================================");
a.forEach(function(x){
    console.log(x);
})

//search tuyến tính
for(let i=0;i<a.length;++i){
    if("Hạnh"==a[i]){
        console.log("tìm thấy chữ Hạnh ở vị trí",i);
    }
}

// min - max
let num = [7,6,8,55,9,1,11]
//kỹ thuật cắm cờ
let max = num[0];
for(let i=1;i<num.length;++i){
    if(max < num[i]){
        max = num[i]
    }
}
// max = 55
for(let i=1;i<num.length;++i){
    if(num[i]==max){
        console.log("vị trí của người có điểm cao nhất",i);
    }
}
console.log(max);

let mang = [];
for(let i=0;i<10;i++){
    mang[i]= 5000
}
console.log(mang);
mang.push(5)    //thêm vào cuối mảng
console.log(mang);
let ccuoiMang = mang.pop()      //lấy ra phần tử ở cuối mảng
console.log(mang);
mang.unshift(55);           //thêm vào đầu mảng
console.log(mang);      
mang.shift();        //lấy ra giá trị ở đầu


let mangSort = [4,67,78,5,4,322]
mangSort.sort()
console.log(mangSort);

//gộp 2 mảng
let k = mang.concat(mangSort);
console.log(k);


