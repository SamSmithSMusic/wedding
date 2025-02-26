const lid = document.querySelector('.envTopIMG');
const lidCont = document.querySelector('.envFold');
const env = document.querySelector('.env');
const invite = document.querySelector('.inv-flip');
const body = document.querySelector('.ecard');
const invFront = document.querySelector('.inv-front');
const invBack = document.querySelector('.inv-back');

env.addEventListener('click', runAnim);


async function runAnim() {
    openLid();

    setTimeout(() => {
        console.log('lid done')
        moveInvite();
    }, 1000)

    setTimeout(() => {
        console.log('anime done')
        spawnButton()
    }, 2500)

}



function flipInv() {
    // invFront.classList.toggle('straight')
    // invBack.classList.toggle('straight')
    invBack.classList.toggle('flip');
    invFront.classList.toggle('flip');
}

function spawnButton() {
    let flipBut = document.createElement('button');
    flipBut.innerText = 'Flip Invite';
    flipBut.addEventListener('click', flipInv);
    body.append(flipBut);

    invFront.classList.add('straight')
    invBack.classList.add('straight')
}

// moving invite
function moveInvite() {
    invite.classList.add('move');
}

// opening lid 
function openLid() {
    env.classList.remove('wiggle');
    lid.classList.add('openTop');
    lidCont.classList.add('openTop');
}

