var mobileNavigationElement = document.getElementById("menu")
var mainElement = document.getElementsByTagName("main")[0];

function toggleClass(element, classToToggle){
    element.classList.toggle(classToToggle);
}

function setZIndex(element, zIndex){
    element.style.zIndex = zIndex;
}

var toggleNavigationMenu = () => {
    toggleClass(mainElement, "menu-transform-body");
    if (mainElement.classList.contains("menu-transform-body")){
        setZIndex(mobileNavigationElement, "10");
    }
    else {
        setZIndex(mobileNavigationElement, "-10");
    }
};