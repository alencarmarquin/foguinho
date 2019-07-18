console.log('Foguinho started!')

var grid = []
var width = 10
var height = 8

function gridComputation() {
  const total = width * height

  for (var i = 0; i < total; i++) {
    grid[i] = 0
  }
}

function renderFire() {
  var table = '<table>'
  for (var i = 0; i < width; i++) {
    table += '<tr>'
    for (var j = 0; j < height; j++) {
      table += '<td>'
      table += i + ' '+j
      table += '</td>'
    }
    table += '</tr>'
  }
  table += '</table>'

  document.getElementById('content').innerHTML = table
}

renderFire()
console.log('Foguinho loaded')
