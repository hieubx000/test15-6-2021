var a = prompt("nhập số A: ")
var b = prompt("nhập số B: ")
var U = 0

if(a==0||b==0){
    U=parseInt(a+b)
}
for(var i=1;i<=a && i<=b;i++){
    if(a%i==0&&b%i==0){
        U=i
    }
}
console.log("UCLN = "+U);
console.log("BCNN = "+a*b/U);