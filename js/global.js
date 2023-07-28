const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) {

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff < 0) {
                document.getElementById('swipeButton').dispatchEvent(new Event('click'));
            }
        }

        xDown = null;
        yDown = null;
    }
};

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})