(function (angular) {
    'use strict';

    angular.module('myApp', ['ngwidget'])
            .factory('widgetDataService', [function () {

                    var widgetsData = [
                        {
                            mainIcon: 'plane',
                            mainIconColor: '#cc0000',
                            mainIconBackgroundColor: '#f0f0f0',
                            widgetTitle: 'Traveling by Plane',
                            primaryData: 'Some primary data for the widget',
                            secondaryData: 'Just a secondary data for the primary content',
                            smallIconsNumber: 5,
                            smallIcon: 'star',
                            smallIconColor: 'darkred'
                        },
                        {
                            mainIcon: 'car',
                            mainIconColor: '#ffffff',
                            mainIconBackgroundColor: '#aaa',
                            widgetTitle: 'Traveling by car',
                            primaryData: 'Some primary data for the widget',
                            secondaryData: 'Just a secondary data for the primary content',
                            smallIconsNumber: 2,
                            smallIcon: 'star',
                            smallIconColor: 'orange'
                        },
                        {
                            mainIcon: 'pencil',
                            mainIconColor: 'green',
                            mainIconBackgroundColor: '#f9f9f9',
                            widgetTitle: 'Using a pencil',
                            primaryData: 'Some primary data for the widget',
                            secondaryData: 'Just a secondary data for the primary content',
                            smallIconsNumber: 4,
                            smallIcon: 'star',
                            smallIconColor: 'orange'
                        }

                    ];


                    return widgetsData;
                }])
            .controller('widgetDataController', ['$scope', 'widgetDataService', function ($scope, widgetDataService) {

                    $scope.widgetsData = widgetDataService;

                }]);

})(angular);