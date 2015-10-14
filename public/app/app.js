var myApp = angular.module("myApp", ["ngRoute"]);

myApp
.constant("VIEWS", {
		"home": "index.html",
        "grid": "app/view/grid.html",
        "create": "app/view/create.html",
		"detail": "app/view/detail.html",
    })
	.value("characters", [{name:'Jon Snow',deadseason:'1',deadchapter:'2'}])
	.value("chapters", ['1','2','3','4','5','6','7','8','9','10'])
	.value("seasons", ['1','2','3', '4', '5']);