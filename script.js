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


const withdraw = document.querySelector ('.withdraw');
const nxt_msg = document.querySelector ('.nxt_msg');
const exit = document.querySelector ('.exit');
const pay_fee = document.querySelector ('.pay_fee');
const msg = document.querySelector ('.msg');
const main = document.querySelector ('main');
const head_pack = document.querySelector ('header');
const foot_pack = document.querySelector ('footer');
const h_pack = document.querySelector ('.h_pack');
const grid_pack = document.querySelector ('.grid');
const inst_p = document.querySelector ('.pay_inst');
const inst_b = document.querySelector ('.pay_inst_b');
const drop_down = document.querySelector ('.dropdown');
const nxt_package = document.querySelector ('.nxt_pack');
const enter_fields = document.querySelector ('.enter_fields');
const ins_p = document.querySelector ('.p_ins');
const pcb = document.querySelector ('.pack_code_b')



withdraw.addEventListener ('click', ()=> {
    //msg.classList.remove ('hidden');
    head_pack.classList.add ('hidden');
    foot_pack.classList.add ('hidden');
    h_pack.classList.add ('hidden');
    grid_pack.classList.add ('hidden');
    inst_p.classList.add ('hidden');
    ins_p.classList.add ('hidden');
    drop_down.classList.add ('hidden');
    enter_fields.classList.remove('hidden');

    nxt_msg.addEventListener ('click', ()=> {
        const fname = document.querySelector ('.fullName');
        const mnum = document.querySelector ('.mobileNumber');

        if (fname.value == "" && mnum.value == "") {
            alert ("Fill in the required fields !")
        }
        else if (fname.value == "" || mnum.value == "") {
            alert ("Fill in the remaining required field !")
        }
        else {
            msg.classList.remove ('hidden');
            enter_fields.classList.add('hidden');
        }
    })

    main.style = "padding: 40px 12px";

    exit.addEventListener ('click', ()=> {
        window.location = "./packages.html"
    })

    pay_fee.addEventListener ('click', ()=> {
        inst_b.classList.remove ('hidden');
        msg.classList.add ('hidden');

        nxt_package.addEventListener ('click', ()=> {
            if (pcb.value == "") {
                alert("Fill in the required field !")
            }
            else {
                alert("Your Payment is being processed. Please wait for a response from 24HRFX TRADING ORG.");

                window.location = "./packages.html";
            }
        })
    })
})


