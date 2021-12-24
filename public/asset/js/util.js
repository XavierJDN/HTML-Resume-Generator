let counterFiredClickEvent = 0
function scrollFunction() {
    const footerOffset = document.getElementsByTagName(`footer`)[0].clientHeight;
    const topLink = document.getElementsByClassName(`top-of-site-link`)[0];
    const top = document.documentElement.scrollTop;
    const clientHeight = document.body.clientHeight;
    console.log()
    if (clientHeight - top < 900){
        topLink.style.bottom = `${footerOffset}px`;
        topLink.style.transition = `${0}`;
    }else{
        topLink.style.transition = `${0.2}`;
        topLink.style.bottom = `${0}`;
    }
    topLink.style.opacity = 1.5 * top/clientHeight;
}
document.addEventListener("scroll", scrollFunction);
document.getElementsByClassName(`mobile-menu-toogle`)[0].addEventListener("click", event => {
    counterFiredClickEvent++;
    if (counterFiredClickEvent%2 != 0){
        document.getElementsByTagName(`nav`)[0].style.visibility = `visible`;
        event.target.style.color = `#509e98`;
    }
    else{
        document.getElementsByTagName(`nav`)[0].style.visibility = `hidden`;
        event.target.style.color = `white`;
    }
})
        