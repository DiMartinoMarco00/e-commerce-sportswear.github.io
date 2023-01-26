(function()
{
    "use strict";

    let menuItems = document.getElementById("menuItems");
    const menuIcon = document.querySelector('.menu-icon');

    menuItems.style.maxHeight = "0px";
    
    function menuToggle()
    {
        if(menuItems.style.maxHeight == "0px")
        {
            menuItems.style.maxHeight = "200px";
        }
        else 
        {
            menuItems.style.maxHeight = "0";
        }
    }

    menuIcon.addEventListener('click', menuToggle);
}());