// ba bước - Vanilajs DOM

//tìm

//let html = document.getElementsByTagName('')
// let html = document.getElementById('ok');

//truy xuất làm gì đó...
let html = document.getElementsByClassName("mauCoral");
html[0].innerText = "Hello headding";
html[0].innerHTML = "<a href='http://google.com'>Google</a>";
for(let i = 0; i < html.length; i++){
    html[i].style.backgroundColor="blue";
}

//xử lý 

