// helpers
function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}
/*
// example
addEvent(
  document.getElementById('myElement'),
  'click',
  function () { alert('hi!'); }
);
*/

// hamburger menu
addEvent(
  document.querySelector("[data-menu='button']"),
  'click',
  function () { 
    let menu = this.parentElement.parentElement.querySelector("[data-menu='menu']");
    this.toggleAttribute("disabled");
    menu.toggleAttribute("disabled");
  }
);


