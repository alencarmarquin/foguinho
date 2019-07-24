console.log('Foguinho started!')

var grid = []
var width = 10
var height = 8

function initializeGrid() {
  const total = width * height

  console.log(total)

  for (var i = 0; i < total; i++) {
    grid[i] = 0
  }
}

function gridComputation() {

}

function renderFire() {
  var table = '<table>'
  for (var row = 0; row < height; row++) {
    table += '<tr>'
    for (var column = 0; column < width; column++) {
      table += '<td>'
      table += grid[column + row * width]
      table += '</td>'
    }
    table += '</tr>'
  }
  table += '</table>'

  document.getElementById('content').innerHTML = table
}

initializeGrid()
renderFire()
console.log('Foguinho loaded')
