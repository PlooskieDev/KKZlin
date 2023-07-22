const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

let touchstartX = 0
let touchendX = 0

function swipe() {
    if (touchendX > touchstartX) {
        if (touchendX > -1200 && touchstartX < -1350) {
            document.getElementById('swipeButton').dispatchEvent(new Event('click'));
        }
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    swipe()
})

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})