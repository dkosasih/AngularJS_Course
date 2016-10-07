(function(){
"use strict";

angular.module('app', [])
.controller('module1', ['$scope', function($scope){
	$scope.foods = "";
	$scope.checkFood = function(foodText){
		if(!foodText){
			$scope.message = 'Please enter the data first!';
			return;
		}
		var foodArray = foodText.split(/[,]+/);
		if(foodArray.length > 3)
			$scope.message = 'Too Much!';
		else
			$scope.message = 'Enjoy!';		
	}
}]);

})();