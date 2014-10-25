var application = angular.module('JSChess', []);

application.controller('IndexController', function($scope) {
    $scope.greeting = 'hello';
    $scope.game = new Chess.Game();

});
