let button = document.querySelector(".button");
let inp = document.querySelector(".inp");
let redText = document.querySelector (".redtext");

button.addEventListener("click", function(){
    if (inp.value.indexOf("@") == -1 || inp.value.indexOf(".") == -1  ){
        redText.style.display = "inherit";
        inp.style.border = "1px solid red";
    }else{
        inp.style.border = "1px solid black";
        redText.style.display = "none";

    }

    }  )


    let but = document.querySelector(".but");
    let inp2 = document.querySelector(".inp2");
    let whiteText = document.querySelector(".whitetext")


    but.addEventListener ("click", function(){
        if (inp2.value.indexOf("@") == -1 || inp2.value.indexOf(".") == -1){
            whiteText.style.display = "inherit";
            inp2.style.border = "1px solid red";
        }else{
            inp2.style.border = "1px solid black";
            whiteText.style.display = "none";
        }
    })