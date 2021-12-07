// const btn = document.querySelector('.form__btn');
// const email = document.querySelector('#email')

// btn.addEventListener('click', (e)=>{
// e.preventDefault();
// })

const errorMsg = document.querySelector(".err-msg")
const email = document.querySelector('#email')
const submitBtn = document.querySelector('.form__btn')

submitBtn.addEventListener('click', (e) => {
    
    if (!ValidateEmail(email)){
        errorMsg.classList.add('err')
        e.preventDefault()
    }
})

email.addEventListener('focus', () =>{
    errorMsg.classList.remove('err')
})


function ValidateEmail(inputText){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}