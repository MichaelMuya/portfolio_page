function alt() {
    const menu_link = document.querySelector(".menu_links");
    const icon = document.querySelector(".icon_click");

    menu_link.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollToSection(about){
    const section = document.getElementById(action);
    if(section){
        section.scrollIntoView({behavior: 'smooth'})
    }
}