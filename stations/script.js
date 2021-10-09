var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var stationName = document.getElementById('addTitle').value;

var seconds = 0, minutes = 0, hours = 0, stopwatchOn = false;
var stations = [];

function makeStation() {

console.log("station make entered!");
  
  var length = primaryTheme.length;
  
  for (var i = 0; i < length; i++) {
    
console.log("loop entered, length: " + length);
    
    if(stationName !== '') {

console.log("we have a station name!: " + stationName);      
      
      var newDiv = document.createElement(stationName);
      newDiv.id = stationName;
      newDiv.className = 'stationsBox';
      stations.push(newDiv);
      

      document.body.appendChild(newDiv);
      document.getElementById("dropdownStuff").innerHTML += "<a href=#\'" + stationName + "\'>" + stationName + "</a>"; 

      if (primaryTheme[i].checked) {
        //forward pomodoro
        if (i === 0) {
          
          //STOPWATCH
          document.getElementById(stationName).innerHTML += "<div class='timerBox'> \
            <div id='timeDisplay'>00:00:00</div> \
              <ul id='stopwatchButtons'> \
                <li><button onclick='startStopwatch()' class='start'>Start</button></li> \
                <li><button onclick='stopStopwatch()' class='stop'>Stop</button></li> \
                <li><button onclick='resetStopwatch()' class='reset'>Reset</button></li> \
              </ul> \
           </div>"
            
        }

        break;
      }
    }
  }
}

function add() {
  seconds++;
  if(seconds >= 60) {
    seconds = seconds % 60;
    minutes++;
  }
  if(minutes >= 60) {
    minutes = minutes % 60;
    hours++;
  }
  document.getElementById('timeDisplay').innerHTML = (hours <= 9 ? "0" + hours : hours) + ":" + (minutes <= 9 ? "0" + minutes : minutes) + ":" + (seconds <= 9 ? "0" + seconds : seconds);
  if(stopwatchOn) {
    setTimeout(add, 1000);
  }
}

function stopStopwatch() {
  stopwatchOn = false;
}

function resetStopwatch() {
  stopwatchOn = false;
  document.getElementById('timeDisplay').innerHTML = "00:00:00";
  hours = 0;
  minutes = 0;
  seconds = 0;
}

function startStopwatch() {
  stopwatchOn = true;
  setTimeout(add, 1000);
}
  
  //jump to place: document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  //add a SUBMIT button to know when to collect information
