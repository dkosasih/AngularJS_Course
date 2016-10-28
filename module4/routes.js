(function(){
"use strict";

angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
	controller: 'categoriesController as vm',
	resolve:{
		filteredData: ['dataService', function (dataService) {
			return dataService.getMenuItems();
		}]	
	}
  })
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'templates/items.template.html',
	controller: 'menuItemsController as vm',
	resolve:{
		menuItems: ['dataService','$stateParams', function (dataService, $stateParams) {
			return dataService.getMenuItemsByCategory($stateParams.categoryId);
		}]	
	}
  });
}
})();