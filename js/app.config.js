'use strict';

angular.module('gridix').
	config(function($routeProvide){
		$routeProvide.
			when('/', {
				template: "Hello"
			})
	});