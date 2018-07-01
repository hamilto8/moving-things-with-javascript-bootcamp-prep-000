const app = "I don't do much."
var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = '#FF69B4';

dodger.style.left = '180px';
dodger.style.bottom = '0px';

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  } else if(e.which === 39 ) {
    moveDodgerRight();
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)

  if (right >= 180) {
    dodger.style.right = `${right - 1}px`
  }
}
