
window.addEventListener("load", function(){
    if (localStorage.userdata){
        console.log("user is logged")
    }else{
        window.location.href = "login.html"
        console.log("you need to login to access the home page")
    }
});
