document.querySelector('.nav-btn').addEventListener('click',() => {
    document.querySelector('.nav-btn').classList.toggle('active')
    document.querySelector('.nav').classList.toggle('active')
})
document.querySelectorAll('.nav__item').forEach((oneLink) =>{
    oneLink.addEventListener('click',() => {
        document.querySelector('.nav-btn').classList.toggle('active')
        document.querySelector('.nav').classList.toggle('active')
    })
})
