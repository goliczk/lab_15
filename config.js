// JavaScript Document
var app = angular.module('madLibsApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when ('/form', {
		controller: 'inputController',
		templateUrl: 'partials/form.html'
		})
	.when('/view', {
		controller: 'outputController',
		templateUrl:'partials/view.html'
	})
	.otherwise({ redirectTo: '/'});
});