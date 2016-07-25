// JavaScript Document
var app = angular.module('madLibsApp');

app.controller('inputController', function($scope, madLibsFactory, $location){
	$scope.ourFunction = function(madLib) {
		madLibsFactory.saveObject(madLib);
		$location.path("view");
		
	};
});

