
(function (angular) {

    'use strict';

    angular.module('ngwidget', []).directive('theNgWidget', ['$compile',
        function ($compile) {

            var _link = function (scope, element, attr) {

                var appendedIconElement = angular.element('<i class="fa fa-{{ngWidgetSmallIcon}}"></i>');

                for (var i = 0; i <= scope.ngWidgetSmallIconsNumber - 1; i++) {
                    angular.element(element[0].querySelector('.bottom-icons')).append(appendedIconElement.clone());
                }

                $compile(angular.element(element[0].querySelector('.bottom-icons')))(scope);


                // Colors set
                angular.element(element[0].querySelector('.main-icon')).css({'color': scope.ngWidgetMainIconColor, 'backgroundColor': scope.ngWidgetMainIconBackgroundColor});
                angular.element(element[0].querySelector('.bottom-icons')).css({'color': scope.ngWidgetSmallIconsColor});


                scope.toggleWidgetBody = function () {

                    var toggleButton = angular.element(element[0].querySelector('.hide-body')).find('i');
                    var widgetBody = angular.element(element[0].querySelector('.ng-widget-body'));

                    if (widgetBody.hasClass('hidden-widget')) {
                        widgetBody.removeClass('hidden-widget');
                        toggleButton.removeClass('fa-plus');
                        toggleButton.addClass('fa-minus');
                    }
                    else {
                        widgetBody.addClass('hidden-widget');
                        toggleButton.removeClass('fa-minus');
                        toggleButton.addClass('fa-plus');
                    }
                };

            };

            return {
                restrict: 'E',
                link: _link,
                scope: {
                    ngWidgetTitle: '@',
                    ngWidgetPrimaryContent: '@',
                    ngWidgetSecondaryContent: '@',
                    ngWidgetMainIcon: '@',
                    ngWidgetMainIconColor: '@',
                    ngWidgetMainIconBackgroundColor: '@',
                    ngWidgetSmallIcon: '@',
                    ngWidgetSmallIconsNumber: '@',
                    ngWidgetSmallIconsColor: '@'
                },
                templateUrl: 'js/ngwidget/views/ngwidget.html',
                replace: true
            };
        }]);

})(angular);