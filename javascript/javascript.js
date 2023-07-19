const changeThemeBtn = document.querySelector("#change-theme");


function toggleDarkmode(){
    document.body.classList.toggle("dark");
}

function loadtheme(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){
        toggleDarkmode();
    }
}

loadtheme();

changeThemeBtn = addEventListener("change", function() {
    toggleDarkmode();

    this.localStorage.removeItem("dark");

if(document.body.classList.contains("dark")){
    localStorage.setItem("ark", 1);
}

});