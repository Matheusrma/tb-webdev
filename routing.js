//ROUTING

var login = function () { 
  
};

var register = function () { 
  
};

var allroutes = function() {
  var route = window.location.hash.slice(2);
  console.log(route);
  var sections = $('section');
  var section;

  section = sections.filter('[data-route=' + route + ']');

  if (section.length) {
    sections.hide(250);
    section.show(250);
  }
};

var routes = {
  '/login': login,
  '/register': register,
};

var options = {
  html5history : true,
  on: allroutes
}

var router = Router(routes).configure(options);

router.init();