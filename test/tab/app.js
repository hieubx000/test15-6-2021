    html = document.getElementsByClassName('imgpc')
    var buttons = document.getElementsByClassName('tablinks');
    var contents = document.getElementsByClassName('tabcontent');
    function showContent(id){
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            var id = this.textContent;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }
            this.className += " active";
            showContent(id);
        });
    }
    showContent('PHP');

    let anh = [ruong1,ruong2,ruong3,ruong4]
    
    let textHTML = "";
    for(let i=0;i<anh.length;i++){
        textHTML += `<div class="imgpc"><img width="400" src="photo/ ${anh[i]}.jpg" alt=""></div>`;
    }
    html.innerHTML = textHTML;