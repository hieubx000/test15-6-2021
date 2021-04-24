//body
console.log("hello object");


//khai báo object
//cap key : value
let Vit = {
    mausac : ["den", "xanh"],
    tuoi : 5,
    isFly: false,
    speak: function() {
        console.log("quac quac");
        return "keu"
    },
    introduce: function() {
        console.log("tôi có rất nhiều màu sắc",this.mausac.join("+"));
} 
}

for (const keyVit in Vit) {
    if(typeof Vit[keyVit]=="function"){
        console.log(keyVit,Vit[keyVit]());}
        console.log(keyVit,Vit[keyVit]);
}