

angular.module('demo', [])
   .controller('MyCtrl', function($scope) {
        $scope.lista = localStorage.data ?
            JSON.parse(localStorage.data) : [];

        $scope.add = function() {
            $scope.lista.push({
                nome: $scope.nome
            });
            $scope.nome = '';
        };

        $scope.$watch('lista', function() {
            localStorage.data = JSON.stringify($scope.lista);
        }, true);
    });


