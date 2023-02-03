const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlink');
    const navlink=document.querySelectorAll('.navlinks li');
    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
    
    navlink.forEach((link, index)=>{
        if (link.style.animation) {
            link.style.animation='';
        } else {
            link.style.animation=`navlinkFade 0.5s ease forwards ${index/7 + 2}s`;
        }
        
    });
    burger.classList.toggle('toggle')
});
}

navSlide();
