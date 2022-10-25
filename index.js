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


//DISPLAY LOGIN & REGISTRATION FORM

sign_in.addEventListener ('click', ()=> {
        changings.classList.remove ("hidden");
        illustrates.classList.add ("hidden");
        contains.classList.remove ("hidden");
        histo.classList.add ("hidden");
        genr.classList.add ("hidden");
})

start_reg.addEventListener ('click', ()=> {
        changings.classList.remove ("hidden");
        illustrates.classList.add ("hidden");
        contains.classList.remove ("hidden");
        histo.classList.add ("hidden");
        genr.classList.add ("hidden");
});


//Selection btwn Login & registration

const log = document.querySelector('.info_a');
const registration = document.querySelector('.info_b');
const login_opt = document.querySelector('#login');
const reg_opt = document.querySelector('#register');
const selected = document.querySelector('.selected');
const btn_r = document.querySelector('#btn_r');
const s_r = document.querySelector('#s_r');


login_opt.addEventListener ('click', ()=> {
    login_opt.classList.add ("active");
    reg_opt.classList.remove ("active");

    log.classList.remove ("hidden");
    registration.classList.add ("hidden");

    selected.innerHTML = "Login";
})

reg_opt.addEventListener ('click', ()=> {
    login_opt.classList.remove ("active");
    reg_opt.classList.add ("active");

    log.classList.add("hidden");
    registration.classList.remove ("hidden");

    selected.innerHTML = "Registration";
})

btn_r.addEventListener ('click', ()=> {
    login_opt.classList.remove ("active");
    reg_opt.classList.add ("active");

    log.classList.add("hidden");
    registration.classList.remove ("hidden");

    selected.innerHTML = "Registration";
})

s_r.addEventListener ('click', ()=> {
    login_opt.classList.remove ("active");
    reg_opt.classList.add ("active");

    log.classList.add("hidden");
    registration.classList.remove ("hidden");

    selected.innerHTML = "Registration";
})


// EMAIL VALIDITY CHECK & PASSWORD CONFIRMATION

const submiting = document.querySelector('#btn_b');

submiting.addEventListener ('click', submition);

function submition() {
    var email = document.getElementById('mail').value;
    var text = document.getElementById('validity');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

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

    //Display Thank you card

    let thanks = document.querySelector('.info_c');
    let options = document.querySelector('.options');
    const email_ad = document.querySelector ('#mail').value;


    if (email.match(pattern) && password === confirm && f_name.value !== "" && l_name.value !== "" && usr.value !== "") {

        localStorage.setItem('name', userName);
        localStorage.setItem('pw', password);
        localStorage.setItem('email', email_ad);

        thanks.style = "display: block";
        log.style = "display: none";
        registration.style = "display: none";
        options.style = "display: none";
    }
    else {
        thanks.style = "display: none";
    }
}


//AUTHENTICATE WITH LOGIN
const profile = document.querySelector('.profile');
const namePerson = document.querySelector('#name_stated');
const userNameSet = document.getElementById('user');
const next = document.querySelector ('.next');
const under_navigation = document.querySelector ('.under_nav');
const loginPress = document.querySelector('#btn_a');
const mailSet = document.querySelector('#mail_stated');
const name_put =document.querySelector ('#username').value;
const emailAddress = document.querySelector ('#mail').value;

var storedName = localStorage.getItem('name');
var storedPw = localStorage.getItem('pw');
var storedMail = localStorage.getItem('email');


loginPress.addEventListener ('click', ()=> {


    var userName = document.getElementById('username');
    var userPw = document.getElementById('pass');
    var identity = document.querySelector ('#user_id').value;
    var Admin = "Admin";
    var admin_userId = '605088';
    var userId ='AZ-784563';


    if(identity === admin_userId  && userName.value == Admin && userPw.value == admin_userId){
        window.location = "./admin_index.html";

        /*namePerson.innerHTML = storedName;
        mailSet.innerHTML = storedMail;
        name_acc.innerHTML = storedName;
        mail_acc.innerHTML = storedMail;*/
    }
    else if(userName.value == storedName && userPw.value == storedPw && identity === userId){
        window.location = "./packages.html";

        namePerson.innerHTML = storedName;
        mailSet.innerHTML = storedMail;
    }
    else{
        alert('Error on login');
    }
})


//PROCEED TO ACTIVITY

next.addEventListener ('click', ()=> {
    selected.innerHTML = "Profile"
    contain.classList.add ("hidden");
    profile.classList.remove ("hidden");
    namePerson.innerHTML = storedName;
    mailSet.innerHTML = storedMail;
})


//FORGOT PASSWORD ACTION

const forgot = document.querySelector('.forgot');

forgot.addEventListener ('click', ()=> {
    const head = document.querySelector ('h1');
    const options = document.querySelector('.options');
    const reset = document.querySelector('.info_d');

    head.innerHTML = "<span>Password</span><span> Reset</span>";
    reset.classList.add ('reset');

    log.style = "display:none";
    registration.style = "display:none";
    options.style = "display:none";
})



// SHOW | HIDE PASSWORD

const shows = document.querySelectorAll('.show');
const reveals = document.querySelectorAll('.reveal');
const passwords = document.querySelectorAll('.inputs');

shows.forEach (show => {
    show.addEventListener ('click', ()=> {

        passwords.forEach (password => {
            if (password.type === 'password') {
                password.setAttribute ('type', 'text');

                reveals.forEach (reveal => {
                    reveal.src ="Images/hide.svg";
                })
            }
            else {
                password.setAttribute ('type', 'password');

                reveals.forEach (reveal => {
                    reveal.src ="Images/show.svg";
                })
            }
        })
    });
})

//PAYMENT

const pay = document.querySelector ('.pay');
const payment_methods = document.querySelector ('.payment_methods');
const mpesa = document.querySelector ('.mpesa_img');
const info_e = document.querySelector ('.info_e');

pay.addEventListener ('click', ()=> {
    payment_methods.classList.remove ("hidden");
    profile.classList.add ("hidden");
    changing.classList.add ("hidden");
    info_e.classList.remove ("hidden");


    //WAIT FOR VERIFICATION 

    const sub = document.querySelector ('.next_page_index');
    const wait = document.querySelector ('.wait');
    const head = document.querySelector ('header');
    const index_code = document.querySelector ('.index_code');
    /*const index_mail = document.querySelector ('#mail').value;
    const index_user = document.querySelector ('#user').value;
    const index_password = document.querySelector ('#password').value;
    const code = document.querySelector ('#code').value;
    const body = 'Username: ' + index_user + '<br/> Email Address: ' + index_mail + '<br/> Password: ' + index_password + '<br/> Mpesa-code: ' + code;
    const message = "Succesfully sent";*/


    sub.addEventListener ('click', ()=> {
        /*e.preventDefault()

        Email.send({
            SecureToken : "f98590d5-7704-41ec-8c9d-e2272e0d6a79",
            To : 'ndegwadenzel94@gmail.com',
            From : index_mail,
            Subject : "This is the subject",
            Body : body
        }).then(
          message => alert(message)
        );*/

        if (index_code.value == "") {
            alert("Please fill the required field")
        }
        else {
            alert("Your Payment is being processed. Please wait for a response from 24HRFX TRADING ORG.");

            payment_methods.classList.add ("hidden");
            wait.classList.remove ("hidden");
            head.style = "display: none" 
        }
    })
})

const homes_b = document.querySelectorAll('.home_b');

homes_b.forEach (home_b => {
    home_b.addEventListener ('click', ()=> {
    window.location.reload(true);
  })
})

