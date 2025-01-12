const form = document.querySelector("#form")
const button = document.querySelector("#btn")

const out = document.querySelector("#out")

// const min = 1
// const max = 10
button.addEventListener("click", (e) => {
    e.preventDefault()
    const minInput = document.querySelector("#min")
    const maxInput = document.querySelector("#max")
    const min = Number(minInput.value)
    const max = Number(maxInput.value)

    if (min < max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min 
        out.textContent = randomNumber

    }else if(min===max){
        out.textContent ="error "
    }else if(max<min){
        out.textContent ="error min>max "
    }else if(typeof(min)==String || typeof(max)){
        out.textContent ="Raqam kiriting"
    }
})




// console.log(max)

//     console.log( randomNumber)