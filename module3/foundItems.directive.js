(function(){
"use strict";

angular.module('app')
.directive('foundItems', function(){
	return {
		templateUrl: 'foundItems.template.html',
		scope: {
			filteredData: '<',
			onRemove: '&'
		},
		controller: foundItemsDirectiveController,
		controllerAs: 'vm',
		bindToController: true
	}
});

function foundItemsDirectiveController() {
	var vm = this;
}

})();