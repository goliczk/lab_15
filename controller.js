// JavaScript Document

var app = angular.module('madLibsApp', []);

app.controller('inputController', function($scope, madLibsFactory){
	$scope.ourFunction = function(madLib) {
		madLibsFactory.saveObject(madLib);
	};
});