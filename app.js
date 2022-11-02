let str = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (evt) => {
        if(evt.target.innerHTML === "="){
            str = eval(str);
            document.querySelector(".input").value = str;
        }else if(evt.target.innerHTML === "C"){
            str = "";
            document.querySelector(".input").value = str;
        } else{
            // console.log(evt.target);
            str += evt.target.innerHTML;
            document.querySelector(".input").value = str;
        }
    })
})