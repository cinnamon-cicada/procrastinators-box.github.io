var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var stationName = document.getElementById('addTitle').value;
var timeTheme = document.getElementsByName('time_theme');
var addedStations = [];
var addedStationsList = [];
//oh dear is the array recursive? it will be blanked out every time the page reloads, but every time the page reloads, the web api depends on - WHAT IS ALREADY STORED IN THE API, NVM

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
     var stationName = document.getElementById('addTitle').value;
     var pLength = primaryTheme.length;
     var tLength = timeTheme.length;
     for (var i = 0; i < stations.length; i++) {
          for (var k = 1; k < stations.length; k++) {
               if (stations[i]===stations[k]) {
               console.log("error!! repeated name"); //WIP: make it more fancy later!!
               noRepeats = false;
               }
          }
     }
     
     if(noRepeats === true) {
     
          if(stationName !== '') {

               //create a blank station box
               var newDiv = document.createElement(stationName);
               newDiv.id = stationName;
               newDiv.className = 'stationsBox';
               stations.push(newDiv);
               document.body.appendChild(newDiv);
               document.getElementById("dropdownStuff").innerHTML += "<a href=#\'" + stationName + "\'>" + stationName + "</a>"; 
          }

          var mainTimer = false;

          //CONT THIS LOOP

          //loop through main theme
            for (var i = 0; i < pLength; i++) {
               if (primaryTheme[i].checked) {
                    //forward pomodoro
                    if (i == 0) {
                         //List
                         document.getElementById(stationName).innerHTML += "<div id='listBox'> \
                         <textarea rows='20' cols='80' id='list'> </textarea> \
                         </div>"
                    }
                    else if (i == 1) {
                         //add a fullscreen image
                    }
                    else if (i == 2) {
                         //text box
                    }
                    else if (i == 3) {
                         console.log("1");
                         mainTimer = true;
                    } 
                    break;
               }
          }

            //loop through timer selections
          for (var i = 0; i < tLength; i++) {
               var toInsert = ''; 
               console.log("2");
               if (timeTheme[i].checked) {
                    document.getElementById(stationName).innerHTML += "<label class='bodyText' for='inputHours'>Hours: </label> \
                         <input type='text' id='inputHours' name='inputTime'> <br> \
                         <label class='bodyText' for='inputMinutes'>Minutes: </label> \
                         <input type='text' id='inputMinutes' name='inputTime'> <br>"

                    if(mainTimer) {
                         toInsert = "class='bigTimeBox'";
                    }
                    else toInsert = "class='smallTimeBox'";
                    //forward pomodoro
                    if (i == 0) {
                         console.log("3");
                         //Stopwatch
                         //var time = document.getElementById('timerTime').value;
                         document.getElementById(stationName).innerHTML += "<div " + toInsert + "> \
                         <div id='timeDisplay'>00:00:00</div> \
                         <button onclick='startStopwatch()' class='start'>Start</button> \
                         <button onclick='stopTimer()' class='stop'>Stop</button> \
                         <button onclick='resetTimer()' class='reset'>Reset</button> \
                         </div>"

                    } else if (i == 1) {
                         //Countdown
                         var min = document.getElementById('inputMinutes').value || "00";
                         var h = document.getElementById('inputHours').value || "00";
                         if(min == 0) {
                              min = "00";
                         }
                         if(h == 0) {
                              h = "00";
                         }
                         document.getElementById(stationName).innerHTML += "<div " + toInsert + "> \
                         <div id='timeDisplay'>" + h + ":" + min + ":00" + "</div> \
                         <button onclick='startCountdown()' class='start'>Start</button> \
                         <button onclick='stopTimer()' class='stop'>Stop</button> \
                         <button onclick='resetTimer()' class='reset'>Reset</button> \
                         </div>"
                    }

                    break;
               }
          }

          var listInput = "<a href=#\'" + stationName + "\'>" + stationName + "</a>"
          if (storageAvailable('localStorage')) {
               addCustomizedStations(document.getElementById(stationName).value, listInput);
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
     if(timerOn == false) {
          timerOn = true;
          setTimeout(addTimer, 995);
     }
}

function startCountdown() {
     if(timerOn == false) {
          timerOn = true;
          setTimeout(subtractTimer, 995);
     }
}

//make some more avatars
function loadAvatar() {
  
  console.log("entered loadAvatar");
  
  var images = [];
  images.push('/Visuals/cow.png');
  images.push('/Visuals/gecko.png');
  images.push('/Visuals/owl.png');
  images.push('/Visuals/pumpkin.png');
  
  console.log(images[1]);
  
  var quotes = [
    "Did you know whales have the highest calcium content of any animal? Neither do I. I'm not entirely sure it's true.",
    "What's your favorite type of tree?",
    "FOCUS! YOU GOT THIS!",
    "What are you working on?",
    "Did you brush your teeth today?",
    "My favorite apples are Cameo apples. Just in case you were wondering."
    ];
  
  var cowQuotes = [
    "MOOO!",
    "Nothing beats dewy morning grass."
    ];
  
  var owlQuotes = [
    "Hoot!"
    ];
  
  var pumpkinQuotes = [
    "Happy Halloween!",
    "I love October :)",
    "🎃"
    ];
  
  var one = Math.floor(Math.random()*4);
  var two;
  var combo;
  
  if (one == 0) {
    combo = quotes.concat(cowQuotes);
  }
  else if (one == 2) {
    combo = quotes.concat(owlQuotes);
  }
  else if (one == 3) {
    combo = quotes.concat(pumpkinQuotes);
  }
  else combo = quotes;
  
  two = Math.floor(Math.random()*combo.length);
  var quote = combo[two];
  
  //insert image after profile image in html code
  document.getElementById("avatarBox").innerHTML += 
    "<img id='avatar' src='" + images[one] + "'> </img> \
     <div id='avatarTextBox' class='paragraphText'>" + quote + "</div>";
  
}

//*** FIREBASE STUFF ***

function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(email);

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
     if (!localStorage.getItem('addedStations')) {
     } 
     else {
          setHtml();
     } 
}

function addCustomizedStations(box, list) {
     //input: string
     addedStations += box;
     addedStationsList += list;
     localStorage.setItem("addedStations", box);
     localStorage.setItem("addedStationsList", list);
}

function setHtml() {
     document.body.appendChild(localStorage.getItem('addedStations'));
     document.getElementById("dropdownStuff").innerHTML += localStorage.getItem('addedStationsList'); 
}

  
  //jump to place: document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  //add a SUBMIT button to know when to collect information
