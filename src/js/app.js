

angular.module('demo', [])
   .controller('MyCtrl', function($scope) {
        $scope.lista = localStorage.data ?
            JSON.parse(localStorage.data) : [];
        console.log($scope.lista);

        function nextId() {
            var id = localStorage.seq ? +localStorage.seq : 1;
            localStorage.seq = '' + (id + 1)
            return id
        }

        $scope.add = function() {
            $scope.lista.push({
                id: nextId(),
                nome: $scope.nome
            });
            $scope.nome = '';
        };

        $scope.limpar = function() {
            $scope.lista = $scope.lista.filter(function(todo) { return !todo.completada; })
        };

        $scope.$watch('lista', function() {
            localStorage.data = JSON.stringify($scope.lista);
        }, true);
    });


