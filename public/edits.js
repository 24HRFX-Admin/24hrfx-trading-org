const depos = [];
const withdrawals = [];

/*

const inv_name_a = document.querySelector ('#inv_name_a').value;
const inv_am_a = document.querySelector ('#inv_am_a').value;
const inv_name_b = document.querySelector ('#inv_name_b').value;
const inv_am_b = document.querySelector ('#inv_am_b').value;
const inv_name_c = document.querySelector ('#inv_name_c').value;
const inv_am_c = document.querySelector ('#inv_am_c').value;
const inv_name_d = document.querySelector ('#inv_name_d').value;
const inv_am_d = document.querySelector ('#inv_am_d').value;
const inv_name_e = document.querySelector ('#inv_name_e').value;
const inv_am_e = document.querySelector ('#inv_am_e').value;
const inv_name_f = document.querySelector ('#inv_name_f').value;
const inv_am_f = document.querySelector ('#inv_am_f').value;


const with_name_a = document.querySelector ('#with_name_a').value;
const with_am_a = document.querySelector ('#with_am_a').value;
const with_name_b = document.querySelector ('#with_name_b').value;
const with_am_b = document.querySelector ('#with_am_b').value;
const with_name_c = document.querySelector ('#with_name_c').value;
const with_am_c = document.querySelector ('#with_am_c').value;
const with_name_d = document.querySelector ('#with_name_d').value;
const with_am_d = document.querySelector ('#with_am_d').value;
const with_name_e = document.querySelector ('#with_name_e').value;
const with_am_e = document.querySelector ('#with_am_e').value;
const with_name_f = document.querySelector ('#with_name_f').value;
const with_am_f = document.querySelector ('#with_am_f').value;

*/

const pushinvs = document.querySelector ('#pushinvs');
const pushwiths = document.querySelector ('#pushwiths');
//const out_withs = document.querySelector ('#output_withs');
//const out_invs = document.querySelector ('#output_invs');


pushinvs.addEventListener ('click', ()=> {
    const newdepos = [
        {
            id : 1,
            name : document.querySelector ('#inv_name_a').value,
            amount: document.querySelector ('#inv_am_a').value
        },
        {
            id : 2,
            name : document.querySelector ('#inv_name_b').value,
            amount: document.querySelector ('#inv_am_b').value
        },
        {
            id : 3,
            name : document.querySelector ('#inv_name_c').value,
            amount: document.querySelector ('#inv_am_c').value
        },
        {
            id : 4,
            name : document.querySelector ('#inv_name_d').value,
            amount: document.querySelector ('#inv_am_d').value
        },
        {
            id : 5,
            name : document.querySelector ('#inv_name_e').value,
            amount: document.querySelector ('#inv_am_e').value
        },
        {
            id : 6,
            name : document.querySelector ('#inv_name_f').value,
            amount: document.querySelector ('#inv_am_f').value
        }
    ]

    const hist_invs = document.querySelector (".deposits");

    //depos.push (newdepos);
    //console.log (depos);

    let output = "";

    output += `
        <div>
            <h2>Current Investments</h2>
        </div>

        <div class="depo_under">
            <div>${newdepos[0].name}</div>
            <div>${newdepos[0].amount}</div>
        </div>
    
        <div class="depo_under">
            <div>${newdepos[1].name}</div>
            <div>${newdepos[1].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newdepos[2].name}</div>
            <div>${newdepos[2].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newdepos[3].name}</div>
            <div>${newdepos[3].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newdepos[4].name}</div>
            <div>${newdepos[4].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newdepos[5].name}</div>
            <div>${newdepos[5].amount}</div>
        </div>
    `;

    hist_invs.innerHTML = output;


/*
    newdepos.forEach (depo => {

        out += `
            <tr>
                <td>${depo.id}</td>
                <td>${depo.name}</td>
                <td>${depo.amount}</td>
            </tr>
        `;
    })
*/
    //out_invs.innerHTML = out;
    console.log(output);

})

pushwiths.addEventListener ('click', ()=> {
    const newwithdrawals= [
        {
            id : 1,
            name : document.querySelector ('#with_name_a').value,
            amount: document.querySelector ('#with_am_a').value
        },
        {
            id : 2,
            name : document.querySelector ('#with_name_b').value,
            amount: document.querySelector ('#with_am_b').value
        },
        {
            id : 3,
            name : document.querySelector ('#with_name_c').value,
            amount: document.querySelector ('#with_am_c').value
        },
        {
            id : 4,
            name : document.querySelector ('#with_name_d').value,
            amount: document.querySelector ('#with_am_d').value
        },
        {
            id : 5,
            name : document.querySelector ('#with_name_e').value,
            amount: document.querySelector ('#with_am_e').value
        },
        {
            id : 6,
            name : document.querySelector ('#with_name_f').value,
            amount: document.querySelector ('#with_am_f').value
        }
    ]

    const hist_withs = document.querySelector (".withdrawals");

    //withdrawals.push (newwithdrawals);
    //console.log (withdrawals);

    let output = "";

    output += `
        <div>
            <h2>Current Investments</h2>
        </div>

        <div class="depo_under">
            <div>${newwithdrawals[0].name}</div>
            <div>${newwithdrawals[0].amount}</div>
        </div>
    
        <div class="depo_under">
            <div>${newwithdrawals[1].name}</div>
            <div>${newwithdrawals[1].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newwithdrawals[2].name}</div>
            <div>${newwithdrawals[2].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newwithdrawals[3].name}</div>
            <div>${newwithdrawals[3].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newwithdrawals[4].name}</div>
            <div>${newwithdrawals[4].amount}</div>
        </div>

        <div class="depo_under">
            <div>${newwithdrawals[5].name}</div>
            <div>${newwithdrawals[5].amount}</div>
        </div>
    `;

    hist_withs.innerHTML = output;


/*
    let out = "";

    newwithdrawals.forEach (withdrawal => {

        out += `
            <tr>
                <td>${withdrawal.id}</td>
                <td>${withdrawal.name}</td>
                <td>${withdrawal.amount}</td>
            </tr>
        `;
    })
*/
    //out_withs.innerHTML = out;

    console.log(output);
})


