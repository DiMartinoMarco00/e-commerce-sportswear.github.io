(function()
{
    "use strict";

    const login = document.getElementById("login");
    const register = document.getElementById("register");
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let indicator = document.getElementById("indicator");
    
    function loginFunction()
    {
        registerForm.style.transform = "translateX(300px)";
        loginForm.style.transform = "translateX(300px)";
        indicator.style.transform = "translateX(0px)";
    }
    
    function registerFunction()
    {
        registerForm.style.transform = "translateX(0px)";
        loginForm.style.transform = "translateX(0px)";
        indicator.style.transform = "translateX(100px)";
    }

    login.addEventListener('click', loginFunction);
    register.addEventListener('click', registerFunction);
}());