const mobileNavigationElement = document.getElementById("menu")
const mainElement = document.getElementsByTagName("main")[0];
const mobileNavigationChildren = mobileNavigationElement.children;
const mobileNavigationLength = mobileNavigationChildren.length;

function toggleClass(element, classToToggle){
    element.classList.toggle(classToToggle);
}

function setZIndex(element, zIndex){
    element.style.zIndex = zIndex;
}

function delayBackground(backgroundStyle){
    setTimeout(() => {
        for (let increment = 0; increment < mobileNavigationLength; increment++){
            mobileNavigationChildren[increment].style.backgroundColor = backgroundStyle;
        }
    }, 400);
}
var toggleNavigationMenu = () => {
    toggleClass(mainElement, "menu-transform-body");
    if (mainElement.classList.contains("menu-transform-body")){
        setZIndex(mobileNavigationElement, "10");
        delayBackground("var(--primaryColorLighter)");
    }
    else {
        setZIndex(mobileNavigationElement, "-10");
        delayBackground("");
    }
};