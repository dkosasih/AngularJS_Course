(function(){
"use strict";

angular.module('app')
.controller('menuItemsController', ['menuItems', function(menuItems){
	var vm = this;
	vm.menuItems = menuItems.data;
	vm.linkToDetail = 'items';
}]);

})();