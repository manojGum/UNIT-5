import "./index.css";

import ima from "../image/pineapple_PNG2756.png"



// import image1 from "../image/picture.jpg"

let image = document.createElement("img")
image.setAttribute("id", "picture")
image.src = ima;
document.getElementById("manoj").append(image);


document.querySelector("form",addEventListener("submit",todofun))
function todofun(event){
    event.preventDefault();
 
    var data=document.querySelector("#todo").value;
    // data.setAttribute("class","red");
   
    // console.log(data);
    dataappend(data);
}

function dataappend(data){
    var dekbhi=data;
//   dekbhi.setAttribute("id","red");
    const root=document.getElementById("root");
    // dekbhi.setAttribute("class","redtext");
    root.setAttribute("class","redtext");
    root.append(dekbhi);
}



// const root=document.getElementById("root");
// const h1=document.createElement("h1");
// h1.innerHTML="Hello world";
// h1.setAttribute("class","redtext")
// root.append(h1);