//ROUTING

var login = function () { console.log("login"); };
var register = function () { console.log("register"); };

var routes = {
  '/login': login,
  '/register': [register, function() {
    console.log("An inline route handler.");
  }],
};

var options = {
  html5history : true
}

var router = Router(routes).configure(options);

router.init();