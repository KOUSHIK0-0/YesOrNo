BASE_URL = 'https://yesno.wtf/api'
const input = document.querySelector('.input input')
const btn = document.querySelector('button')
const IMAGE = document.querySelector('.result-img img')
const message = document.querySelector('.result-img p')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(input.value === '' || !isNaN(input.value))
    {
        const p = document.createElement('p')
        p.innerText = 'Enter a Valid Comment'
        input.parentElement.appendChild(p)
        setTimeout(()=>{
            input.value = ''
            p.remove()
        },2000)
    }
    else{
        fetchData()
        btn.disabled = true
        setTimeout(()=>{
            input.value = ''
            IMAGE.src = ''
            message.innerText = ''
            btn.disabled = false
        },9000)
    }
})

const fetchData = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    IMAGE.src = data["image"]
    message.innerText = data["answer"]
}
