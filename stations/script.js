var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var stationName = document.getElementById('addTitle').value;

var seconds = 0, minutes = 0, hours = 0, timerOn = false;
var stations = [];
var noRepeats = true;

function makeStation() {

console.log("station make entered!");
  
  var length = primaryTheme.length;
    if(stations.length >= 2) {
    for (var i = 0; i < stations.length; i++) {
      for (var k = 1; k < stations.length; k++) {
        if (stations[i]===stations[k]) {
          console.log("error!!"); //make it more fancy later!!
          noRepeats = false;
        }
      }
    }
  }
  
  for (var i = 0; i < length; i++) {
    
    if(stationName !== '' && noRepeats === true) {
      
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
          getTime("Stop");
          var time = document.getElementById('timerTime').value;
          document.getElementById(stationName).innerHTML += "<div class='timerBox'> \
            <div id='timeDisplay'>00:00:00</div> \
                <button onclick='startStopwatch()' class='start'>Start</button> \
                <button onclick='stopStopwatch()' class='stop'>Stop</button> \
                <button onclick='resetStopwatch()' class='reset'>Reset</button> \
           </div>"
            
        }
        
        else if (i===1) {
          //COUNTDOWN
          //WIP
          getTime("Start");
          var time = document.getElementById('timerTime').value;
          document.getElementById(stationName).innerHTML += "<div class='timerBox'> \
            <div id='timeDisplay'>00:00:00</div> \
                <button onclick='startCountdown()' class='start'>Start</button> \
                <button onclick='stopTimer()' class='stop'>Stop</button> \
                <button onclick='resetTimer()' class='reset'>Reset</button> \
           </div>"
        }

        break;
      }
    }
  }
}

function getTime(stopOrStartAt) {
  document.getElementById('pomodoroBackward').innerHTML += '<label for="timerTime" class="bodyText">' + stopOrStartAt + ' at: &nbsp;&nbsp;&nbsp;&nbsp;</label> \
         <input type="text" id="timerTime"> <br>'
}

function addTimer() {
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
  if(timerOn) { //WIP: and if time is less than set time
    setTimeout(addTimer, 995);
  }
}
//WIP - for the countdown
subtractTimer() {
  
}



function stopTimer() {
  timerOn = false;
}

function resetStopwatch() {
  timerOn = false;
  document.getElementById('timeDisplay').innerHTML = "00:00:00";
  hours = 0;
  minutes = 0;
  seconds = 0;
}

function startStopwatch() {
  timerOn = true;
  setTimeout(addTimer, 1000);
}
  
  //jump to place: document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  //add a SUBMIT button to know when to collect information
