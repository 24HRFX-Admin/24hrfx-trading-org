
const changing = document.querySelector ('.changing');
const contain = document.querySelector ('.container');
const illustrate = document.querySelector('.illustrate');
const sign_in = document.querySelector ('.sign_in');
const logout = document.querySelector ('.logout');
const changings = document.querySelector ('.changing');
const contains = document.querySelector ('.container');
const illustrates = document.querySelector('.illustrate');
const start_reg = document.querySelector('.get_started');
const histo = document.querySelector ('.history');
const genr = document.querySelector ('.history_general');

//Selection btwn Login & registration
/*
const log = document.querySelector('.info_a');
const registration = document.querySelector('.info_b');
const login_opt = document.querySelector('#login');
const reg_opt = document.querySelector('#register');
const selected = document.querySelector('.selected');
*/
// EMAIL VALIDITY CHECK & PASSWORD CONFIRMATION



const check_box = document.querySelector ('.check-box');

check_box.addEventListener ('click', ()=> {
    const over_btn = document.querySelector ('.over_btn');

    over_btn.classList.add ('hidden');
    check_box.classList.add ('checked');
})


const submiting = document.querySelector('#btn_b');

submiting.addEventListener ('click', submition);

function submition() {
    const email = document.getElementById('mail').value;
    const text = document.getElementById('validity');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const password = document.querySelector('#password').value;
    const confirm = document.querySelector('#confirm').value;
    const confirmation = document.querySelector('.confirmation');
    const userName = document.querySelector ('#user').value;


    if (email.match(pattern)) {
        text.innerHTML ="";
        text.style ="padding: 0; width: 100%; border-top: none";
    }
    else if (email == "") {
        text.innerHTML ="Required <span><img src='Images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 92%";
    }
    else {
        text.innerHTML ="Invalid <span><img src='Images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 92%";
    }

    
    if (password === confirm) {
        confirmation.innerHTML ="";
        confirmation.style ="padding: 0; width: 100%; border-top: none";
    }
    else if (password !== confirm) {
        confirmation.innerHTML ="passwords don't match <span><img src='Images/icon-error.svg' alt='error'></span>";
        confirmation.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%"
    }
    else{
        confirmation.innerHTML ="Required <span><img src='Images/icon-error.svg' alt='error'></span>";
        confirmation.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%";
    }

    const f_name = document.querySelector ('#f_name')
    const l_name = document.querySelector ('#l_name')
    const err_msg = document.querySelector ('#err_msg')
    const err_msg_b = document.querySelector ('#err_msg_b')
    const usr = document.querySelector ('#user')


    if (f_name.value == "" || l_name.value == "") {
        err_msg.innerHTML ="Fill in both names <span><img src='Images/icon-error.svg' alt='error'></span>";
        err_msg.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%";
    }
    else {
        err_msg.innerHTML = "";
    }

    if (usr.value == "") {
        err_msg_b.innerHTML ="Set preferred username <span><img src='Images/icon-error.svg' alt='error'></span>";
        err_msg_b.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%";
    }
    else {
        err_msg_b.innerHTML = "";
    }


    const num_warn = document.querySelector ('.num_warn');
    const p_no = document.querySelector ('.p_no');

    if (p_no.value == "") {
        num_warn.innerHTML ="Enter phone number <span><img src='Images/icon-error.svg' alt='error'></span>";
        num_warn.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px; width: 86%";
    }
    else {
        num_warn.innerHTML = "";
    }

    const email_ad = document.querySelector ('#mail').value;


    if (email.match(pattern) && password === confirm && f_name.value !== "" && l_name.value !== "" && usr.value !== "" && p_no.value !== "") {

        localStorage.setItem('name', userName);
        localStorage.setItem('pw', password);
        localStorage.setItem('email', email_ad);
       // localStorage.setItem('user_ID', Date.now());
    }
}

