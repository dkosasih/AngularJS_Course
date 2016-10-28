(function(){
"use strict";

var serv = angular.module('app')
.service('dataService', ['$http', function($http){
	var service = this;
	var apiEndPointBase = "https://davids-restaurant.herokuapp.com";
	
	service.getMenuItems = function() {
		var response = $http({
		  method: "GET",
		  url: (apiEndPointBase + "/categories.json")
		});

		return response;
	};
	
	service.getMenuItemsByCategory = function(category) {
		var response = $http({
		  method: "GET",
		  url: (apiEndPointBase + "/menu_items.json?category="+category)
		});

		return response;
	};
}]);

return serv;

})();