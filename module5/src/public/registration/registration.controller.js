(function () {
"use strict";

angular.module('public')
.controller('registerController',['MenuService', '$filter', '$scope', 'RegisterService', '$timeout', regController]);

function regController(menuService, $filter, $scope, regService, $timeout) {
  var regCtrl = this;
  
  regCtrl.loading = false;
  regCtrl.menuAvail = true;
  
  regCtrl.checkCode = function(){
	  if(regCtrl.data && regCtrl.data.menuCode){
		regCtrl.regForm.menuCode.$setValidity("menuAvail", false);
		regCtrl.menuAvail = true;
		regCtrl.data.menuCode = $filter('uppercase')(regCtrl.data.menuCode);
	  }
	  if(regCtrl.data && regCtrl.data.menuCode && regCtrl.data.menuCode.length >= 2){
		  var result;
		  if (!regCtrl.keyNow || regCtrl.keyNow !== regCtrl.data.menuCode){
		    $scope.$broadcast('loadBegin');
			menuService.getSingleMenu(regCtrl.data.menuCode).then(function(response){
			  $scope.$broadcast('loadComplete');
			  if(response.data){
				regCtrl.regForm.menuCode.$setValidity("menuAvail",  true); 
			  }else{
				regCtrl.menuAvail = false;				
			  }
			})
			.catch(function(error){
				$scope.$broadcast('loadComplete');
				regCtrl.menuAvail = false;		
			});
		  }
		  regCtrl.keyNow = regCtrl.menuCode;		  
	  }else{
		return;
	  }
  }
  
  $scope.$on('loadBegin', function(){
	 regCtrl.loading = true; 
  });
  $scope.$on('loadComplete', function(){
	 regCtrl.loading = false; 
  });
  
  regCtrl.save = function(){
	regService.save(regCtrl.data).then(function(result){
		if (result){
			regCtrl.saveSuccess = true;
			resetForm();
			$timeout(function(){regCtrl.saveSuccess = false }, 3000);
		}
	});
	
	
  }
  
  var resetForm = function(){
		regCtrl.data = {};
		
		regCtrl.regForm.$setPristine();
		regCtrl.regForm.$setUntouched();
		regCtrl.regForm.$setValidity(false);
		
  }
}


})();
