const typewriterContainer = document.getElementById("letter-container")
const myName = "Hello world!"
let time = 200
let i = 0
let forward = true

function typewriter() {
    let letters = document.createElement("span")
    if (forward == true){
        if(i < myName.length) {
            letters.innerHTML = myName.charAt(i)
            typewriterContainer.appendChild(letters)
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
    setTimeout(typewriter, time)
}

typewriter()