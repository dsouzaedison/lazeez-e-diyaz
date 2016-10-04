/**
 * Created by Edison D'souza on 03-10-2016.
 */
var app = angular.module('lazeez-e-diyaaz', []);

app.controller('mainCtrl', function($scope){
    $scope.navlinks = [{name : 'HOME', link : '#'},
        {name : 'ABOUT', link : '#'},
        {name : 'SERVICES', link : '#'},
        {name : 'MENU', link : '#'},
        {name : 'GALLERY', link : '#'},
        {name : 'TESTIMONIALS', link : '#'},
        {name : 'CONTACT', link : '#'}];
});