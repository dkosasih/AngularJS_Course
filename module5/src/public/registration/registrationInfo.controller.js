(function () {
"use strict";

angular.module('public')
.controller('registrationInfoController',['registrationInfo', 'MenuService', '$q', '$scope', 'ApiPath', regInfoController]);

function regInfoController(data, menuService, $q, $scope, apiPath) {
  var regInfoCtrl = this;
  regInfoCtrl.data = data;
  regInfoCtrl.basePath = apiPath;
  
  var menuPromise = $q.defer();
  
  var loadSingleItem = function(menuCode){
	menuPromise = $q.defer();
	$scope.$broadcast('loadBegin');
	menuService.getSingleMenu(menuCode)
	.then(function(response){
	  $scope.$broadcast('loadComplete');
	  if(response.data){
		regInfoCtrl.menuItem = response.data;
	  }
	  menuPromise.resolve();
	})
	.catch(function(error){
	  menuPromise.reject();
	});	
  }
  
  
  var init = function(){
	if (regInfoCtrl.data){
		loadSingleItem(regInfoCtrl.data.menuCode);
	}
	
	$q.all([menuPromise.promise]).then(function(){
		$scope.$broadcast('loadComplete');
	});
  }
  
  
  $scope.$on('loadBegin', function(){
	 regInfoCtrl.loading = true; 
  });
  $scope.$on('loadComplete', function(){
	 regInfoCtrl.loading = false; 
  });
  
  init();
}


})();
