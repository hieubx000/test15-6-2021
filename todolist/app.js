let lists = document.getElementsByTagName("li")
let fm = document.getElementById("fm");
let ulTodo = document.getElementById("ulTodo")
let btndel = document.getElementsByClassName('del')
//khởi tạo event vào các thẻ li đã có
for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function(e){
        if(e.target.style.textDecoration == "line-through"){
            e.target.style.textDecoration = "none";
            return;
        }
        e.target.style.textDecoration = "line-through";
    })  

}

for (let i = 0; i < lists.length; i++) {
    btndel[i].addEventListener("click", function(e){
        e.target.parentNode.remove();
    })    
}

//submit là sự kiện chỉ dành cho form
fm.addEventListener("submit", function (e) {
    e.preventDefault(); //giúp k bị load lại trang
    
    //truy cấp đến iput có name là dl
    if(fm.dl.value.trim()===""){
        return;
    }
    
    //khởi tạo cặp thẻ <li></li>
     let li = document.createElement('li');
     //thêm dữ liệu text vào <li></li>
     li.innerText = fm.dl.value.trim();
     //thêm sự kiện Click vào thẻ li mới tạo ra
     li.addEventListener("click", function(e){
        if(e.target.style.textDecoration == "line-through"){
            e.target.style.textDecoration = "none";
            return;
        }
        e.target.style.textDecoration = "line-through";
    });
    let btn = document.createElement("button")
    btn.classList.add("del");
    btn.innerText = "X"
    li.appendChild(btn);
    btn.addEventListener("click", function(e){
        e.target.parentNode.remove();
    }) 

    //thêm thẻ li vào cuối ul có id là #ulTodo
     ulTodo.appendChild(li);
     fm.dl.value= "";
})

async function fecthData() {
    let res = await fetch("https://news-ncov-api.herokuapp.com/new?_page=1")
    let data = await res.json();
    console.log(data);
    let html = "";
    data.array.forEach(function(e){
        html += `<li>${e.title}</li>`
    });
    ulTodo.innerHTML = html;
}

fecthData()
