const mobileNavElement = document.getElementById("menu");
const mainElement = document.getElementsByTagName("main")[0];
const mobileNavigationChildren = mobileNavElement.children;
const mobileNavigationLength = mobileNavigationChildren.length;
const mobileShareButton = document.getElementById("mobileShareButton");
let oldScrollPositionY, oldScrollPositionX;

if (navigator.share){
    mobileShareButton.style.display = "grid";
}

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
        if (mobileNavElement.style.display === ""){
            mobileNavElement.style.display = "grid";
        }
        setZIndex(mobileNavElement, "10");
    }
    else {
        if (mobileNavElement.style.display === "grid"){
            window.scrollTo(oldScrollPositionX, oldScrollPositionY);
            mobileNavElement.style.display = "";
        }
        setZIndex(mobileNavElement, "-10");
    }
}

function resetMainClass() {
    if (mainElement.classList.contains("menu-transform-body")){
        mobileNavElement.style.display = "";
        toggleClass(mainElement, "menu-transform-body");
        setZIndex(mobileNavElement, "-10");
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