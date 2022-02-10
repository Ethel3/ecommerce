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

// js for product gallery//
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function()
{
    ProductImg.src = SmallImg[0].getAttribute("src");
}
SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].getAttribute("src");
}
SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].getAttribute("src");
}
SmallImg[3].onclick = function()
{
    ProductImg.src = SmallImg[3].getAttribute("src");
}