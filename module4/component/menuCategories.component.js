(function(){
"use strict";

angular.module('app')
.component('menuCategories', 
	{
		templateUrl: 'templates/menuCategories.directive.template.html',
		bindings: {
			menuData: '<',
			linkToDetail: '@'
		},
		controller: foundItemsDirectiveController,
		controllerAs: 'vm',
		bindToController: true
	}
);

function foundItemsDirectiveController() {
	var vm = this;
}

})();