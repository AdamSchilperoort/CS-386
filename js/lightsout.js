import Timer from './timer.js'

const height = 5
const width = 5
let timerText = document.getElementById("lightsout-timer")
let time = new Timer()
let isRunning = false

function setupGrid () {
  const squares = document.querySelectorAll('.lightsout-square')
  for (let i = 0; i < squares.length; i++) {
    const row = Math.floor(i / height)
    const col = i % height
    squares[i].style.gridRowStart = row + 1
    squares[i].style.gridColumnStart = col + 1
  }
}

// row and col are 1-5
function getSquare (row, col) {
  return document.querySelector(".lightsout-square" +
                                `[style*="grid-row-start: ${row}"]` +
                                `[style*="grid-column-start: ${col}"]`)
}

function getAdjacentSquares (row, col) {
  return [
    getSquare(row, col),
    getSquare(row-1, col),
    getSquare(row+1, col),
    getSquare(row, col-1),
    getSquare(row, col+1)
  ].filter((sqr) => sqr !== null)
}

function toggleSquare (row, col) {
  getSquare(row, col).classList.toggle('js-lightsout-square-on')
}

setupGrid()

//console.log(getSquare(3, 2))
//toggleSquare(3, 2)

 function setup () {
    document.getElementById("lightsout-newgame-btn").addEventListener("click", function(){startGame()})
    document.getElementById("11").addEventListener("click", function(){buttonClick(1,1)})
    document.getElementById("12").addEventListener("click", function(){buttonClick(1,2)})
    document.getElementById("13").addEventListener("click", function(){buttonClick(1,3)})
    document.getElementById("14").addEventListener("click", function(){buttonClick(1,4)})
    document.getElementById("15").addEventListener("click", function(){buttonClick(1,5)})
    document.getElementById("21").addEventListener("click", function(){buttonClick(2,1)})
    document.getElementById("22").addEventListener("click", function(){buttonClick(2,2)})
    document.getElementById("23").addEventListener("click", function(){buttonClick(2,3)})
    document.getElementById("24").addEventListener("click", function(){buttonClick(2,4)})
    document.getElementById("25").addEventListener("click", function(){buttonClick(2,5)})
    document.getElementById("31").addEventListener("click", function(){buttonClick(3,1)})
    document.getElementById("32").addEventListener("click", function(){buttonClick(3,2)})
    document.getElementById("33").addEventListener("click", function(){buttonClick(3,3)})
    document.getElementById("34").addEventListener("click", function(){buttonClick(3,4)})
    document.getElementById("35").addEventListener("click", function(){buttonClick(3,5)})
    document.getElementById("41").addEventListener("click", function(){buttonClick(4,1)})
    document.getElementById("42").addEventListener("click", function(){buttonClick(4,2)})
    document.getElementById("43").addEventListener("click", function(){buttonClick(4,3)})
    document.getElementById("44").addEventListener("click", function(){buttonClick(4,4)})
    document.getElementById("45").addEventListener("click", function(){buttonClick(4,5)})
    document.getElementById("51").addEventListener("click", function(){buttonClick(5,1)})
    document.getElementById("52").addEventListener("click", function(){buttonClick(5,2)})
    document.getElementById("53").addEventListener("click", function(){buttonClick(5,3)})
    document.getElementById("54").addEventListener("click", function(){buttonClick(5,4)})
    document.getElementById("55").addEventListener("click", function(){buttonClick(5,5)})
}

function startGame()
   {
    isRunning = true;
    time.reset()
    randomizeSquares()
    time.start()
    setInterval(function(){setTime(); }, 100);
   }

function randomizeSquares()
   {
    for( var i = 1; i< 6; i++ )
      {
        for( var j = 1; j < 6; j++ )
          {
            if ( getRandomInt(2) == 1 )
              {
                toggleSquare(i, j)
              }
          }
      }
   }

function checkWin()
    {
      var hasWon = true;
      for( var i = 1; i< 6; i++ )
        {
          for( var j = 1; j < 6; j++ )
            {
             if(getSquare(i,j).classList.contains("js-lightsout-square-on"))
                {
                  hasWon = false;
                }
            }
        }
        if(hasWon === true)
           {
            setTimeout(onWin, 100)
           }
    }

function onWin()
    {
     var timeVar = time.getElapsedTime()
     time.stop()
     alert("Congrats, you win! \nYour time was " + timeVar[0] + " minutes, " +timeVar[1] +" seconds!");
     time.reset()
     isRunning = false
    }

function setTime()
    {
     var timeVar = time.getElapsedTime()
     timerText.innerHTML= timeVar[0] + ":" + timeVar[1]
    }

function buttonClick(row,col)
    {
      var timeVar = time.getElapsedTime()
      if( isRunning === true )
         {
         toggleSquareAndAdjacentSquares(row,col)
         checkWin()
         }
    }

function toggleSquareAndAdjacentSquares(row,col)
   {
    toggleSquare(row, col)
    if( (row-1) !== 0 )
       {
        toggleSquare(row-1, col)
       }
    if( (row+1) !== 6 )
       {
        toggleSquare(row+1, col)
       }
    if( (col-1) !== 0 )
       {
        toggleSquare(row, col-1)
       }
    if( (col+1) !== 6 )
        {
        toggleSquare(row, col+1)
        }
   }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setup()
setTime()
