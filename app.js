const typewriterContainer = document.getElementById("letter-container")
const myName = "hey, its daniel!"
let forward = true
let i = 0

function typewriter() {
    let letters = document.createElement("span")
    if (forward == true){
        if(i < myName.length) {
            letters.innerHTML = myName.charAt(i)
            letters.style.color = "#CCD6F6"
            typewriterContainer.appendChild(letters)
            if(i >= 9 && i < myName.length-1) {
                letters.style.color = "#64FFDA"
                typewriterContainer.appendChild(letters)
            }
            i++
        }else{
            forward = false
        }

    }else{
        if(i > 0) {
            typewriterContainer.lastChild.remove()
            i--
        }else{
            forward = true
        }
    }
    setTimeout(typewriter, 200)
}

typewriter()

let sliderBtns = ["btn-1","btn-2","btn-3","btn-4"]

function changeImage (x) {
    let activeBtn = document.getElementById("btn-"+x)

    for(let i = 0; i < sliderBtns.length; i++) {
        document.getElementById(sliderBtns[i]).classList.add("inactive-btn")
    }
    activeBtn.classList.remove("inactive-btn")
    document.getElementById("img-slide").src =`./assets/slider/Image${x}.jpg`
}