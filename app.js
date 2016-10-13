/**
 * Created by Edison D'souza on 03-10-2016.
 */
var app = angular.module('lazeez-e-diyaaz', ['route']);

app.controller('mainCtrl', function ($scope, $http) {
    $scope.items = [];
    $scope.modalHeader = 'Loading..';

    var services = [{name: 'corporateCateringCrystal', menu : ''},
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

    $scope.menu = [];
    //console.log($scope.services);

    $scope.showMenuModal = function (name, header) {
        $scope.modalHeader = header;
        $http.get('data/' + name + '.json')
            .then(function (data) {
                $scope.items = data.data;
            });
    };

    //var i = 0;
    //$scope.services.forEach(function(service){
    //    $http.get('data/' + service.name + '.json')
    //        .then(function(data){
    //            console.log(i);
    //            console.log($scope.services[Number(i)]);
    //            $scope.services[i].menu = data.data;
    //            //console.log(data.data);
    //        });
    //    i++;
    //});
    //
    $scope.servicedata = [];
    for (var i = 0; i < services.length; i++) {
        $.get('data/' + services[i].name + '.json', function (data) {
            //console.log(i);
            //console.log($scope.services[Number(i)]);
            var temp = {name : services[i].name, menu : data};
            $scope.servicedata[i] = temp;
            //console.log(data.data);
        });
    }

    setTimeout(function(){
        console.log($scope.servicedata);
    }, 4000);


});