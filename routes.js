/**
 * Created by Edison D'souza on 08-10-2016.
 */
var route = angular.module('route', ['ngRoute']);

route.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/home", {
            templateUrl: "templates/home.html"
        })
        .when("/about", {
            templateUrl: "templates/about.html"
        })
        .when("/services", {
            templateUrl: "templates/corporateCatering.html"
        })
        .when("/corporateCatering", {
            templateUrl: "templates/corporateCatering.html"
        })
        .when("/corporateEvents", {
            templateUrl: "templates/corporateEvents.html"
        })
        .when("/weddingEvents", {
            templateUrl: "templates/weddingEvents.html"
        })
        .when("/specialEvents", {
            templateUrl: "templates/specialEvents.html"
        })
        .when("/allServices", {
            templateUrl: "templates/allServices.html"
        })
        .when("/menu", {
            templateUrl: "templates/menu.html"
        })
        .when("/About", {
            templateUrl: "templates/about.html"
        })
        .otherwise({redirectTo :'/home'});
});