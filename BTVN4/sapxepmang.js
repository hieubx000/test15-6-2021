var A = [4,6,2,20,31]
 var MAX = []
// let n = prompt("nhập số phần từ của mảng:")
// console.log("số phần tử của mảng là: ",n);
// for(let i = 0;i<n;++i){
//     A[i] = prompt("nhập giá trị A[",i,"]")
//     console.log("A[",i,"] = ",A[i]);
// }
// console.log(A);
let m 

// for(let i = 0;i<A.length-1;++i){
//     var min = A[0]
//     for(let j = 0;j<A.length-1;++j){
//         if(A[j]<=min){
//             min=A[j]      
//         }
//     }  
//     // console.log(min);
//     // console.log(A);

//     if(A[i]===min){
//         // console.log(i);
//         MAX.push(A[i])
//         A.splice(i,1) 
           
//     }
//    }
//hihiiih
for(let i = 0;i<A.length-1;++i){
    for(let j = 0;j<A.length-1;++j){
        if(A[i]<A[j]){
            m = A[i];
            A[i]=A[j];
            A[j]=m;
        }
    }
}
    
        
console.log("mảng sau khi sắp xếp tăng dần là: ",A);