//DROP NAVBAR

const icons_menu = document.querySelectorAll ('.icon_menu');
const icons_close_menu = document.querySelectorAll ('.icon_close_menu');
const navbars = document.querySelectorAll ('nav');
const under_nav = document.querySelectorAll ('.under_nav');

icons_menu.forEach (icon_menu => {
    icon_menu.addEventListener ('click', ()=> {
        navbars.forEach (navbar => {
            navbar.classList.add ('drop');
        })
        icons_close_menu.forEach (icon_close_menu => {
            icon_close_menu.classList.remove ('disappear');
        })
        icons_menu.forEach (icon_menu => {
            icon_menu.classList.add ('disappear');
        })
    
        under_nav.forEach (under => {
            under.addEventListener ('click', ()=> {
                navbars.forEach (navbar => {
                    navbar.classList.remove('drop')
                });
                icons_close_menu.forEach (icon_close_menu => {
                    icon_close_menu.classList.add ('disappear');
                })
                icons_menu.forEach (icon_menu => {
                    icon_menu.classList.remove ('disappear');
                })
            })
        })


        icons_close_menu.forEach (icon_close_menu => {
            icon_close_menu.addEventListener ('click', ()=> {
                navbars.forEach (navbar => {
                    navbar.classList.remove('drop')
                });
            
                icons_close_menu.forEach (icon_close_menu => {
                    icon_close_menu.classList.add ('disappear');
                })
                icons_menu.forEach (icon_menu => {
                    icon_menu.classList.remove ('disappear');
                })
            })
        })
    })
})
