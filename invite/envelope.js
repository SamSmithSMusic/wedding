const lid = document.querySelector('.envTopIMG');
const env = document.querySelector('.env');
const invite = document.querySelector('.inv-flip');
const body = document.querySelector('.ecard');
const invFront = document.querySelector('.inv-front');
const invBack = document.querySelector('.inv-back');

env.addEventListener('click', runAnim);


async function runAnim() {
    openLid();
    moveInvite();

    setTimeout(() => {
        console.log('anime done')
        spawnButton()
    }, 2500)

}



function flipInv() {
    invBack.classList.toggle('flip');
    invFront.classList.toggle('flip');
}

function spawnButton() {
    let flipBut = document.createElement('button');
    flipBut.innerText = 'Flip Invite';
    flipBut.addEventListener('click', flipInv);
    body.append(flipBut);
}

// moving invite
function moveInvite() {
    invite.classList.add('move');
}

// opening lid 
function openLid() {
    lid.classList.add('openTop');
}

