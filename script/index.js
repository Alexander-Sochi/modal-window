const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn")
const span = document.querySelector(".btn-close")
const close = document.querySelector('.btn-secondary')
const modalContents = document.querySelector('.modal-contents')
btn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "block"
});
function btnLeft (evt){
    evt.preventDefault()
    setTimeout(function (){
        modalContents.style.left = '10%';
    },500)
}
btn.addEventListener('click',btnLeft)
close.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "none"
    document.removeEventListener('click',btnLeft)
});

span.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "none"
    document.removeEventListener('click',btnLeft)
});

window.addEventListener('click',(evt)=>{
    evt.preventDefault()
    if(evt.target == modal){
        modal.style.display = "none"
        document.removeEventListener('click',btnLeft)
    }
})