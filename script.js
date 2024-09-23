const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}


const modalBtn = document.querySelector('#modalBtn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#closeBtn')

modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}

closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {
    // modal.classList.remove('open-modal')
    console.log(e.target);
    
    if(e.target.closest('.modal__box')) {
        modal.classList.remove('open-model')
    }
}