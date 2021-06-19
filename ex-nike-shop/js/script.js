

window.onload = ()=>{
   
    // debugger
    const menuBar = document.querySelector("#menu-bar");
    const navBar = document.querySelector(".navbar")

    menuBar.addEventListener('click', (e)=>{
        menuBar.classList.toggle('fa-times')
        navBar.classList.toggle('active')
        menuBar.classList.toggle('fa-bars')
    }, false)
    window.onscroll = () =>{
        menuBar.classList.remove('fa-times');
        navBar.classList.remove('active');
        menuBar.classList.add('fa-bars')
    }

    const slides = document.querySelectorAll('.slider-container');
    let index = 0;
    const pre = ()=>{
        slides[index].classList.remove('active')
        index = (index-1+slides.length) % slides.length
        slides[index].classList.add('active')
    }
    const next = ()=>{
        // debugger
        slides[index].classList.remove('active')
        index = (index+1+slides.length) % slides.length
        slides[index].classList.add('active')
    }
    const preBtn = document.getElementById('pre')
    const nextBtn = document.getElementById('next')
    preBtn.addEventListener('click', pre, false)
    nextBtn.addEventListener('click', next, false)

}

