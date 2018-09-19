var firstModule = angular.module("firstModule",[]);
var modeCntrol=function($scope,$http){
	$scope.uid="";
	var idVerify=function(){
		$http({
	        method : "GET",
	        url : 'register',
	        params:{'id':$scope.uid}	
	    }).then(function mySuccess(response) {
	       console.log("hi");
	    }, function myError(response) {
	        $scope.myWelcome = response.statusText;
	    });
	}
}
firstModule.controller("modeCntrl",modeCntrol);
