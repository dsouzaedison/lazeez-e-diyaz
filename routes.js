/**
 * Created by dsouz on 08-10-2016.
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
        .when("/Portfolio", {
            templateUrl: "templates/gallery.html"
        })
        .when("/Contact Us", {
            templateUrl: "templates/contactus.html"
        })
        .when("/About", {
            templateUrl: "templates/about.html"
        })
        .otherwise({redirectTo :'/home'});
});