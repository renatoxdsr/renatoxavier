var toggle_btn;
var big_wrapper;
var hamburger_menu;


function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");
declare();

let dark = false;
function toggleAnimation(){
    //Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    let brand = document.getElementsByClassName("logo");
    
    
    if(dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
        brand.src="img/logo2w.png";
        
    }

    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
        brand.src="img/logo2.png";
    }
    clone.classList.add("copy");
    main.appendChild(clone);
    

    clone.addEventListener("animationend", () => {
        big_wrapper.remove();
        clone.classList.remove("copy");

        //reset variables
        declare();
        events();
    });
}

function events(){
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", ()=>{
        big_wrapper.classList.toggle("active");
    });
}

events();
