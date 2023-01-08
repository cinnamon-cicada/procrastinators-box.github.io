var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var stationName = document.getElementById('addTitle').value;

var seconds = 0, minutes = 0, hours = 0, timerOn = false;
var stations = [];
var noRepeats = true;

function insertAfter(referenceNode, newNode) {
     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function getTime(stopOrStartAt, which) {
     console.log("getTime entered!! :D");
     if(which === 1) {
          console.log("which: " + which);
          let elem = document.createElement("inputTimeSpecs");
          elem.innerHTML = '<p class="bodyText">' + stopOrStartAt + ' at: &nbsp;&nbsp;&nbsp;&nbsp;</p> \
          <label class="bodyText" for="inputHours">Hours: </label> \
          <input type="text" id="inputHours" name="inputTime"> <br> \
          <label class="bodyText" for="inputMinutes">Minutes: </label> \
          <input type="text" id="inputMinutes" name="inputTime"> <br>'
          let div = document.getElementById("inputA");
          insertAfter(div, elem);
          
     }
}

function makeStation() {

console.log("station make entered!");
  
  //check if there is a repeat station name
   var pLength = primaryTheme.length;
    for (var i = 0; i < stations.length; i++) {
      for (var k = 1; k < stations.length; k++) {
        if (stations[i]===stations[k]) {
          console.log("error!! repeated name"); //WIP: make it more fancy later!!
          noRepeats = false;
        }
      }
    }
  
     //CONT THIS LOOP
  for (var i = 0; i < pLength; i++) {
    
     if(stationName !== '' && noRepeats === true) {

          //create a blank station box
          var newDiv = document.createElement(stationName);
          newDiv.id = stationName;
          newDiv.className = 'stationsBox';
          stations.push(newDiv);
          document.body.appendChild(newDiv);
          document.getElementById("dropdownStuff").innerHTML += "<a href=#\'" + stationName + "\'>" + stationName + "</a>"; 
          
     if (primaryTheme[i].checked) {
          
          //forward pomodoro
          if (i == 3) {

               //STOPWATCH
               var time = document.getElementById('timerTime').value;
               document.getElementById(stationName).innerHTML += "<div class='timerBox'> \
               <div id='timeDisplay'>00:00:00</div> \
               <button onclick='startStopwatch()' class='start'>Start</button> \
               <button onclick='stopTimer()' class='stop'>Stop</button> \
               <button onclick='resetTimer()' class='reset'>Reset</button> \
               </div>"

     }
        
     else if (i == 4) {
          var min = document.getElementById('inputMinutes').value || "00";
          var h = document.getElementById('inputHours').value || "00";
          if(min == 0) {
               min = "00";
          }
          if(h == 0) {
               h = "00";
          }
          document.getElementById(stationName).innerHTML += "<div class='timerBox'> \
          <div id='timeDisplay'>" + h + ":" + min + ":00" + "</div> \
          <button onclick='startCountdown()' class='start'>Start</button> \
          <button onclick='stopTimer()' class='stop'>Stop</button> \
          <button onclick='resetTimer()' class='reset'>Reset</button> \
          </div>"
     }
        
     else if (i == 0) {
          
          //now it's a list!
          document.getElementById(stationName).innerHTML += "<div class='timerBox'> \
          <textarea rows='20' cols='80' id='list'> </textarea> \
          </div>"
     }

          break;
               }
          }
     }
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
  if(timerOn) {
    setTimeout(addTimer, 995);
  }
}

function subtractTimer() {
  seconds--;
  if(seconds <= -1) {
    seconds = 60 + seconds;
    minutes--;
  }
  if(minutes <= -1) {
    minutes = 60 + minutes;
    hours--;
  }
  document.getElementById('timeDisplay').innerHTML = (hours <= 9 ? "0" + hours : hours) + ":" + (minutes <= 9 ? "0" + minutes : minutes) + ":" + (seconds <= 9 ? "0" + seconds : seconds);
  if(timerOn && (hours > 0 || minutes > 0 || seconds > 0)) { 
    setTimeout(subtractTimer, 1005);
  }
}



function stopTimer() {
  timerOn = false;
}

function resetTimer() {
  timerOn = false;
  document.getElementById('timeDisplay').innerHTML = "00:00:00";
  hours = 0;
  minutes = 0;
  seconds = 0;
}

function startStopwatch() {
  timerOn = true;
  setTimeout(addTimer, 995);
}

function startCountdown() {
  timerOn = true;
  setTimeout(subtractTimer, 995);
}
  
  //jump to place: document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  //add a SUBMIT button to know when to collect information
