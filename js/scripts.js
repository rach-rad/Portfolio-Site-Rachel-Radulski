console.log("Hello world");                 // prints the given text to the console

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
    x.className = 'navtoggle';
    }
}
  