var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var title = document.getElementByName('addTitle');

var seconds = 0, minutes = 0, hours = 0;

function makeStation() {
  for (var i = 0, length = primaryTheme.length; i < length; i++) {
    if(!(title === "")) {

      //add the thematic customizations too
      var newDiv = document.createElement(title);
      newDiv.id = title;
      newDiv.className = stationsBox;

      document.body.appendChild(newDiv);
      document.getElementById("dropdownStuff").innerHTML += "<a href=#'" + title + "'>" + title + "</a>"; 

      if (primaryTheme[i].checked) {
        //forward pomodoro
        if (i === 0) {
          
          //STOPWATCH
          document.getElementById(title).innerHTML += "
            <div id='stopwatch'>00:00:00</div> 
              <ul id='stopwatchButtons'> 
                <li><button onclick='startStopwatch()'>Start</button></li> 
                <li><button onclick='stopStopwatch()'>Stop</button></li> 
                <li><button onclick='resetStopwatch()'>Reset</button></li> 
              </ul>"
            
            
            
            
            //1) mod 60 the time   2) onclick"startTimer" = call setTimer: at 1000 ms, function calls the displayChanger, which calls setTimer again if stopStopwatch=false
          //LATER: add randomized array of encouraging comments, time milestones
            
        }

        break;
      }
    }
  }
}

function add() {
}

function stopStopwatch() {
}

function resetStopwatch() {
}

function startStopwatch() {
  //setInterval(function(){ alert("Hello"); }, 3000);
  setTimeout(add, 1000);
}

setTimeout(add, 1000) {
  
}
  
  //jump to place: document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  //add a SUBMIT button to know when to collect information
