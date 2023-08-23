//your JS code here. If required.
function changeOtherSquaresColor(square) {
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] !== square) {
      squares[i].classList.add('highlight');
    }
  }
}

function changeColorOnClick(square) {
  var squares = document.getElementsByClassName('square');
  if (square === squares[0] || square === squares[2]) {
    for (var i = 0; i < squares.length; i++) {
      if (squares[i] !== square) {
        squares[i].classList.add('highlight');
      }
    }
  }
}

function resetSquaresColor() {
  var squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove('highlight');
  }
}