(function()
{
    "use strict";
    
    let productImg = document.getElementById("productImg");
    const smallImg = document.getElementsByClassName("small-img");
    
    smallImg[0].onclick = function()
    {
        productImg.src = smallImg[0].src;
    }
    
    smallImg[1].onclick = function()
    {
        productImg.src = smallImg[1].src;
    }
    
    smallImg[2].onclick = function()
    {
        productImg.src = smallImg[2].src;
    }
    
    smallImg[3].onclick = function()
    {
        productImg.src = smallImg[3].src;
    }
}());