//ROUTING

var stub = function () { 
  
};

var allroutes = function() {
  var route = location.pathname.slice(1);

  console.log(route);

  var sections = $('section');
  var section;

  section = sections.filter('[data-route=' + route + ']');

  console.log(sections.length);
  console.log(section.length);

  if (section.length) {
    sections.hide(50);
    section.show(50);
  }
};

var routes = {
  '/login': stub,
  '/register': stub,
};

var options = {
  html5history : true,
  on: allroutes
}

var router = Router(routes).configure(options);

router.init();