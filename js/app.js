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
//js for toggle Form//
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

        function register(){
            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translateX(0px)";
            Indicator.style.transform = "translateX(100px)";
        }

        function login(){
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(0px)";
        }




