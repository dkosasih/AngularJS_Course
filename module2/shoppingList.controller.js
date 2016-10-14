(function(){
"use strict";

var ctrl = angular.module('app')
.controller('shoppingList', function(dataService){
	var vm = this;
	vm.selectedShopItem = [];
		vm.selectedBoughtItem = [];
	
	var init = function(){
		vm.shopItems = dataService.getShopItems();
		vm.boughtList =  dataService.getBoughtList();
	}
	
	vm.shopItemChecked = function (isChecked, item){
		if(isChecked){
			vm.selectedShopItem.push(item);
		}else{
			vm.selectedShopItem.splice(vm.selectedShopItem.indexOf(item), 1);
		}
	}
	
	vm.boughtItemChecked = function (isChecked, item){
		if(isChecked){
			vm.selectedBoughtItem.push(item);
		}else{
			vm.selectedBoughtItem.splice(vm.selectedShopItem.indexOf(item), 1);
		}
	}
	
	vm.moveRight = function(){
		for (var i = 0; i < vm.selectedShopItem.length; i++){
				dataService.addBoughtItem(vm.selectedShopItem[i]);
				dataService.removeShopItem(vm.selectedShopItem[i]);
		}
		vm.selectedShopItem = [];
		vm.btnGrpShop = {};
		vm.btnGrpBought = {};
	}
	
	vm.moveLeft = function(){
		for (var i = 0; i < vm.selectedBoughtItem.length; i++){
				dataService.addShopItem(vm.selectedBoughtItem[i]);
				dataService.removeBoughtItem(vm.selectedBoughtItem[i]);
		}
		vm.selectedBoughtItem = [];		
		vm.btnGrpShop = {};
		vm.btnGrpBought = {};
	}

	init();
});

ctrl.$inject = ['dataService'];

return ctrl;

})();