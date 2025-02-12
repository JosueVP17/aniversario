var i = 0;

function accept(){
    document.getElementById("title").innerHTML = "MUCHAS GRACIAS MI VIDA TE AMOOO";
    document.getElementById("image").src = "https://i.pinimg.com/736x/69/76/66/697666542be2b4b1274ffd5f70fb6165.jpg";
    document.getElementById("accept").style.cursor = "not-allowed";
    document.getElementById("accept").disabled = true;
    document.getElementById("decline").style.cursor = "not-allowed";
    document.getElementById("decline").disabled = true;
}

function decline(){
    i++;
    const message = document.getElementById("title");
    const image = document.getElementById("image");
    const accept = document.getElementById("accept");
    const decline = document.getElementById("decline");
    if(i == 1){
        message.innerHTML = "¿QUEEEEEEEEEEEEEEEEEEEEEE? 😮🙀";
        image.src = "https://i.pinimg.com/736x/3b/15/fb/3b15fbf80929b2093d60b595264bdbec.jpg";   
        accept.style.fontSize = 300;
    }
    if(i == 2){
        message.innerHTML = "YA ME ENOJE 😠😠";
        image.src = "https://i.pinimg.com/736x/52/42/1b/52421b602018654a1bc97eaab97c0174.jpg";
    }
    if(i == 3){
        message.innerHTML = "Me pondré tiste 🥺🙁";
        image.src = "https://i.pinimg.com/736x/cd/85/09/cd850925e1a5ecd76af5c8be7998cc7c.jpg";
        decline.style.cursor = "not-allowed";
        decline.disabled = true;
    }
}