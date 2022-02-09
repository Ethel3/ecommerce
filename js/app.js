var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px"

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight ="200px";
    }
    else{
        MenuItems.style.maxHeight = "0px"
    }
}

var today =new Date();
var year =today.getFullYear();
var yearSpan = document.getElementById("year");
yearSpan.innerText = year;