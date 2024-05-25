const leftEye = document.querySelector('.lefteye')
const rightEye = document.querySelector('.righteye')

const userInput = document.querySelector('#userInput')
const passInput = document.querySelector('#passInput')


const resetEyeLocations = () => {
    leftEye.style.top = '75px'
    leftEye.style.left = '110px'

    rightEye.style.top = '75px'
    rightEye.style.left = '173px'
}


// user name events

userInput.addEventListener('focus', () => {

    if (+userInput.value.length < 30) {
        leftEye.style.top = '85px'
        leftEye.style.left = 105 + +userInput.value.length / 2 + 'px'

        rightEye.style.top = '85px'
        rightEye.style.left = 168 + +userInput.value.length / 2 + 'px'
    }else{
        leftEye.style.top = '85px'
        leftEye.style.left = '120px'

        rightEye.style.top = '85px'
        rightEye.style.left = '185px'
    }
})

userInput.addEventListener('blur', () => {
    resetEyeLocations()
})

userInput.addEventListener('input', event => {
    console.log(event);
    console.log(leftEye.style.left.substring(0, leftEye.style.left.length - 2));

    if (+userInput.value.length < 30) {
        leftEye.style.left = 105 + +userInput.value.length / 2 + 'px'
        rightEye.style.left = 168 + +userInput.value.length / 2 + 'px'
    }
})

// password events

passInput.addEventListener('focus', () => {
    leftEye.style.top = '60px'
    leftEye.style.left = '120px'

    rightEye.style.top = '60px'
    rightEye.style.left = '160px'
})
passInput.addEventListener('blur', () => {
    resetEyeLocations()
})