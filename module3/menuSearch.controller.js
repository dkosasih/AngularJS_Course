(function(){
"use strict";

angular.module('app')
.controller('menuSearch.Controller', ['dataService', function (dataService){
	var vm = this;
	
	var preLoadedData;
	
	vm.searchMenu = function() {
		resetFilteredData();
		if(preLoadedData && vm.searchTerm){			
			filterData(vm.searchTerm);
		}else{
			vm.filteredData.message = "Nothing is found!";
		}
		
		return vm.filteredData;
	}
	
	vm.removeFromIndex = function(indexToRemove){
			vm.filteredData.menu_items.splice(indexToRemove, 1);
	}
	
	var filterData = function(searchTerm){
		for(var i = 0; i < preLoadedData.menu_items.length; i++){
			if(preLoadedData.menu_items[i].description.indexOf(searchTerm) != -1){
				vm.filteredData.menu_items.push(preLoadedData.menu_items[i]);
			}
		}
		if (vm.filteredData.menu_items.length == 0){
			vm.filteredData.message = "Nothing is found!";
		}
	}
	
	var init = function (){
		if(!preLoadedData){
			var promise = dataService.getMenuItems();
			promise.then(function (result){
				preLoadedData = result.data;
			});
		}
		
		resetFilteredData();
	}
	
	var resetFilteredData = function() {
		vm.filteredData = {
							menu_items: [],
							message: undefined
						};
	}

	init();
}]);

})();