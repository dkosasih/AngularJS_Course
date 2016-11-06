(function () {
"use strict";

angular.module('common')
.service('RegisterService', registerService);


registerService.$inject = ['$http', 'ApiPath', '$timeout'];
function registerService($http, ApiPath, $timeout) {
  var service = this;
  
  service.save = function (data) {
	console.log(data);
	return $timeout(function(){
		service.registrationData = data;
		return true; 
	}, 1000);
  };
  
  service.getRegistered = function () {
	return service.registrationData; 
  };


}

})();
