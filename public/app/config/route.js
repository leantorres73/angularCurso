myApp.config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
  $routeProvider.when("/", {
	controller: "ListController",
	templateUrl: VIEWS.home
  }).when("/list", {
	controller: "ListController",
	templateUrl: VIEWS.grid
  }).when("/create", {
	controller: "CreateController",
	templateUrl: VIEWS.create
  }).when("/detail/:name", {
	controller: "DetailController",
	templateUrl: VIEWS.detail
  }).otherwise({
	templateUrl: "/"
  });
}]);