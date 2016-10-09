/**
 * Created by Edison D'souza on 03-10-2016.
 */
var app = angular.module('lazeez-e-diyaaz', ['route']);

app.controller('mainCtrl', function($scope){
    $scope.navlinks = [{name : 'HOME', link : '#/home'},
        {name : 'ABOUT', link : '#/about'},
        {name : 'SERVICES', link : '#/services'},
        {name : 'MENU', link : '#'},
        {name : 'GALLERY', link : '#'},
        {name : 'TESTIMONIALS', link : '#'},
        {name : 'CONTACT', link : '#'}];
});