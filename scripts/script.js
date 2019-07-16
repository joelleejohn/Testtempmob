const mobileNavigationElement = document.getElementById("menu")
const mainElement = document.getElementsByTagName("main")[0];
const mobileNavigationChildren = mobileNavigationElement.children;
const mobileNavigationLength = mobileNavigationChildren.length;
let oldScrollPositionY, oldScrollPositionX;

function toggleClass(element, classToToggle){
    element.classList.toggle(classToToggle);
}

function setZIndex(element, zIndex){
    element.style.zIndex = zIndex;
}

function setXyScroll() {
    oldScrollPositionX = window.pageXOffset;
    oldScrollPositionY = window.pageYOffset;
    window.scrollTo(0, 0);
}

function toggleNavigationMenu() {
    toggleClass(mainElement, "menu-transform-body");
    setXyScroll();
    if (mainElement.classList.contains("menu-transform-body")){
        if (mobileNavigationElement.style.display === ""){
            mobileNavigationElement.style.display = "grid";
        }
        setZIndex(mobileNavigationElement, "10");
    }
    else {
        if (mobileNavigationElement.style.display === "grid"){
            window.scrollTo(oldScrollPositionX, oldScrollPositionY);
            mobileNavigationElement.style.display = "";
        }
        setZIndex(mobileNavigationElement, "-10");
    }
}

function resetMainClass() {
    if (mainElement.classList.contains("menu-transform-body")){
        mobileNavigationElement.style.display = "";
        toggleClass(mainElement, "menu-transform-body");
        setZIndex(mobileNavigationElement, "-10");
        window.scrollTo(oldScrollPositionX, oldScrollPositionY);
    }
}

function mobileShareDialog() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: document.documentURI,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}