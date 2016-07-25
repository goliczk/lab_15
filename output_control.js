// JavaScript Document
var app = angular.module('madLibsApp');

app.controller('outputController', function($scope, madLibsFactory){
	//creating an object on the scope, returnObject returns the info from the emptyObject
	$scope.madLibObject = madLibsFactory.returnObject();
	
});
