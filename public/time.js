function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById('time').innerHTML =  strTime;
  return strTime;
}

// Call formatAMPM initially to display the time immediately
formatAMPM(new Date());

// Call formatAMPM every second to update the time
setInterval(function() {
  formatAMPM(new Date());
}, 1000);