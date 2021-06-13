let html = document.getElementById('section-sergettion')

let posts = [
    {
        title : "Bài 1",
        content: "Hello"
    },
    {
        title : "Bài 2",
        content: "Hello"
    },
    {
        title : "Bài 3",
        content: "Hello"
    },
    {
        title : "Bài 4",
        content: "Hello"
    },
    {
        title : "Bài 5 ",
        content: "Hello"
    },
]

let textHTML = "";
for(let i=0;i<5;i++){
    //template string
    //innerText và innerHTML nó đều reset code HTML bên trong về rỗng sau đó mới gán giá trị mới
    textHTML += `
    <div class="suggestion">
        <img class="img-suggestion" src="https://cdn.luxstay.com/home/suggestion/location_6_1572858402.png" alt="Homestay">
        <div>
            <a class="act" href="http://"><h3>${posts[i].title } Vé tham quan</h3></a>
            <p>${posts[i].content}</p>
        </div>
    </div> `;
}

html.innerHTML = textHTML;