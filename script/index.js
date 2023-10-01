const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn")
const span = document.querySelector(".btn-close")
const close = document.querySelector('.btn-secondary')

btn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "block"

});
close.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "none"
});

span.addEventListener('click',(evt)=>{
    evt.preventDefault()
    modal.style.display = "none"
});

window.addEventListener('click',(evt)=>{
    evt.preventDefault()
    if(evt.target == modal){
        modal.style.display = "none"
    }
})