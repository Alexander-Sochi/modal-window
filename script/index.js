const modal = document.querySelector("#PayReqModal ");
const btn = document.querySelector("#myBtn")
const span = document.querySelector(".btn-close")
const close = document.querySelector('.btn-secondary')
const modalContents = document.querySelector('.modal-contents')


btn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "block"
    modalContents.style.left = '102%';
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
    const modalNone = modal.style.display = "none"
    modalContents.style.left = '102%';

   
});

span.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "none"
    const modalNone = modal.style.display = "none"
    modalContents.style.left = '102%';
   
});

window.addEventListener('click',(evt)=>{
    evt.preventDefault()
    if(evt.target == modal){
        modal.style.display = "none"
        modalContents.style.left = '102%';
    } 
})
document.addEventListener('keydown',(evt)=>{
    evt.preventDefault()
    if (evt.key === 'Escape') {
        modal.style.display = "none"
      }
})