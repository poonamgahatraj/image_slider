let imageList=["./assets/profile pic.jpg",
"./assets/mark-zuckerberg_576b7edc53d0b.jpg",
"./assets/Mukesh-Ambani.jpg"
]

let imgsrc="./assets/profile pic.jpg";

var x=document.getElementById("img")
x.src=imageList[1];

var current=0;

let btn=document.getElementById("btn1")
btn.addEventListener("click",backImage)

let btnn=document.getElementById("btn2")
btnn.addEventListener("click",nextImage)

function backImage()
{
    x.src=imageList[0];

}


function nextImage()
{
    x.src=imageList[2];

}

