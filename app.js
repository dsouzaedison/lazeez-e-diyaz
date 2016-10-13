/**
 * Created by Edison D'souza on 03-10-2016.
 */
var app = angular.module('lazeez-e-diyaaz', ['route']);

app.controller('mainCtrl', function ($scope, $http) {
    $scope.items = [];
    $scope.modalHeader = 'Loading..';
    $scope.servicemenu = [];

    $scope.services = [{name: 'corporateCateringCrystal', menu : ''},
        {name: 'corporateCateringSilver', menu : ''},
        {name: 'corporateCateringGold', menu : ''},
        {name: 'corporateEventsCrystal', menu : ''},
        {name: 'corporateEventsSilver', menu : ''},
        {name: 'corporateEventsGold', menu : ''},
        {name: 'corporateEventsDiamond', menu : ''},
        {name: 'weddingEventsCrystal', menu : ''},
        {name: 'weddingEventsSilver', menu : ''},
        {name: 'weddingEventsGold', menu : ''},
        {name: 'weddingEventsDiamond', menu : ''},
        {name: 'specialEventsCrystal', menu : ''},
        {name: 'specialEventsSilver', menu : ''},
        {name: 'specialEventsGold', menu : ''},
        {name: 'specialEventsDiamond', menu : ''}];

    $scope.showMenuModal = function (name, header) {
        $scope.modalHeader = header;
        $http.get('data/' + name + '.json')
            .then(function (data) {
                $scope.items = data.data;
            });
    };

    for (var i = 0; i < 15; i++) {
        $.get('data/' + $scope.services[i].name + '.json', function (data) {
            $scope.servicemenu.push(data);
        });
    }

    //setTimeout(function(){
    //    console.log($scope.servicemenu);
    //}, 4000);


});