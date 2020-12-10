let imageOne = "url(/images/img-1.jpg)"
let imageTwo = "url(/images/img-2.jpg)"
let imageThree = "url(/images/img-3.jpg)"
let imageFour = "url(/images/img-4.jpg)"
let imageFive ="url(/images/img-5.jpg)"

let images = [
    `${imageOne}`,
    `{imageTwo}`,
    `${imageThree}`,
    `${imageFour}`,
    `${imageFive}`
]

let  setImage = document.querySelector(".frame").style.backgroundImage = `${imageOne}`

let right = document.querySelector(".right")
let left = document.querySelector(".left")



right.addEventListener('click', function(e){
    console.log("***goRight***")
    
    if (setImage == `${imageOne}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageTwo}`
    } else if (setImage == `${imageTwo}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageThree}`
    } else if (setImage == `${imageThree}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageFour}`
    } else if (setImage == `${imageFour}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageFive}`
    } else if (setImage == `${imageFive}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageOne}`
    }
    
})


left.addEventListener('click', function(goLeft){
    console.log("***goLeft***")

    if (setImage == `${imageOne}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageFive}`
    } else if (setImage == `${imageTwo}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageOne}`
    } else if (setImage == `${imageThree}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageTwo}`
    } else if (setImage == `${imageFour}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageThree}`
    } else if (setImage == `${imageFive}`) {
        setImage = document.querySelector(".frame").style.backgroundImage = `${imageFour}`
    }
})