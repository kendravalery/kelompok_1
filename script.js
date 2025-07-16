let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.foreach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classlist.add('active');
            })
        }
    })
}
menuicon.onclink = () => {
    menuicon.classlist.toggle('bx-x');
    navbar.classList.toggle('active');
}