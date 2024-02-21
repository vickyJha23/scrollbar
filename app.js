const navToggle = document.querySelector(".toggle-btn");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
// creating toggle effects.....
navToggle.addEventListener("click", () => {
     const containerHeight = linksContainer.getBoundingClientRect().height;
        //  console.log(`container Height ${containerHeight}`);
     const linksHeight = links.getBoundingClientRect().height;
    //  console.log(`links height is ${linksHeight}`);
     if(containerHeight === 0){
         linksContainer.style.height = `${linksHeight}px`;
     }
     else{
        linksContainer.style.height = '0px';
     }
 });
 //*************fixed nav bar ************************/
 const navBar = document.querySelector("#nav");
 const topLink = document.querySelector(".top-link");
 window.addEventListener("scroll", ()=>{
     const scrollHeight = window.pageYOffset;
     const navBarHeight = navBar.getBoundingClientRect().height;
     if(scrollHeight > navBarHeight){
        navBar.classList.add("fixed-nav");
     }
     else{
        navBar.classList.remove("fixed-nav");
     }
     // to show the top link
     if(scrollHeight > 500){
          topLink.classList.add("show-link");
     }
     else{
        topLink.classList.remove("show-link");
     }
 });
 const scrollLinks = document.querySelectorAll(".scroll-link");
 scrollLinks.forEach((link) => {
     link.addEventListener("click", (e) => {
        e.preventDefault();  
        let id = e.currentTarget.getAttribute("href").slice(1);
        let element = document.getElementById(id);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navBarHeight = navBar.getBoundingClientRect().height;
        let position = element.offsetTop - navBarHeight;
        console.log(`Position is ${position}`);
        if(!navBar.classList.contains("fixed-nav")){
              position = position - navBarHeight;
        }
        if(navBarHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,

        });
        linksContainer.style.height = "0px";
0     });
 });


