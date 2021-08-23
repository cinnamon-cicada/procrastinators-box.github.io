var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var title = document.getElementByName('addTitle');

for (var i = 0, length = primaryTheme.length; i < length; i++) {
  if(!(title === "")) {
    
    var newDiv = document.createElement(title);
    newDiv.id = title;
    
    document.body.appendChild(newDiv);
    document.getElementById("dropdownStuff").innerHTML += "<a href=#'" + title + "'>" + title + "</a>"; 
    
    if (primaryTheme[i].checked) {
      //forward pomodoro
      if (i === 0) {
        document.getElementById(title).innerHTML += "
        
        
        
        "
      }

      break;
    }
  }
}

function startTimer {
  //setInterval(function(){ alert("Hello"); }, 3000);
}
  
  //jump to place: document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
  //add a SUBMIT button to know when to collect information
