/**
 * Created by Edison D'souza on 03-10-2016.
 */
var app = angular.module('lazeez-e-diyaaz', ['route']);

app.controller('mainCtrl', function ($scope, $http) {
    $scope.currentTab = 0;
    $scope.items = [];
    $scope.modalHeader = 'Loading..';
    $scope.servicemenu = [];
    $scope.menulist = [];

    $scope.services = [{name: 'corporateCateringCrystal', menu: ''},
        {name: 'corporateCateringSilver', menu: ''},
        {name: 'corporateCateringGold', menu: ''},
        {name: 'corporateEventsCrystal', menu: ''},
        {name: 'corporateEventsSilver', menu: ''},
        {name: 'corporateEventsGold', menu: ''},
        {name: 'corporateEventsDiamond', menu: ''},
        {name: 'weddingEventsCrystal', menu: ''},
        {name: 'weddingEventsSilver', menu: ''},
        {name: 'weddingEventsGold', menu: ''},
        {name: 'weddingEventsDiamond', menu: ''},
        {name: 'specialEventsCrystal', menu: ''},
        {name: 'specialEventsSilver', menu: ''},
        {name: 'specialEventsGold', menu: ''},
        {name: 'specialEventsDiamond', menu: ''}];

    $scope.modalbg = ['bg-gray', 'bg-coral', 'bg-bisque', 'bg-cornflower'];
    $scope.modalColor = '';

    $scope.setTab = function (x) {
        $scope.currentTab = x;
    };

    $scope.showMenuModal = function (name, header) {
        $scope.modalHeader = header;
        $http.get('data/' + name + '.json')
            .then(function (data) {
                $scope.items = data.data;
            });
        $scope.setModalColor(header);
    };

    for (var i = 0; i < 15; i++) {
        $.get('data/' + $scope.services[i].name + '.json', function (data) {
            $scope.servicemenu.push(data);
        });
    }

    $.get('data/menu.json', function (data) {
        $scope.menulist = data;
    });

    $scope.setModalColor = function (name) {
        var colors = {Crystal : 0, Silver : 1, Gold : 2, Diamond : 3};
        var color = colors[name];
        $scope.modalColor = $scope.modalbg[color];
    };

});