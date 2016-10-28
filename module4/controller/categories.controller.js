(function(){
"use strict";

angular.module('app')
.controller('categoriesController', ['filteredData', function(filteredData){
	var vm = this;
	vm.filteredData = filteredData.data;
	vm.linkToDetail = 'items';
}]);

})();