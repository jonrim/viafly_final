window.app = angular.module('FullstackGeneratedApp', ['ui.router']);

app.controller('itemsCtrl', function ($scope, $http, $stateParams) {
  $http.get('/data')
  .then(res => res.data)
  .then(items => {
      items.splice(0, 1);
      $scope.items = [];
      items.forEach(item => {
        let itemObj = {};
        itemObj.system_id = +item[0];
        itemObj.upc = +item[1];
        itemObj.name = item[2];
        itemObj.qty = +item[3];
        itemObj.price = parseFloat(item[4].slice(1));
        itemObj.category = item[5];
        $scope.items.push(itemObj);
      })
      console.log($scope.items)
  });
  $scope.searchText = $stateParams.searchText;
  $scope.orderProperty = "+price";
  $scope.sortProperty = function(col) {
    let currentColumn = $scope.orderProperty.slice(1);
    let currentDirection = $scope.orderProperty.slice(0, 1);
    let dir = '+';

    if (col === currentColumn) {
        dir = currentDirection === '+' ? '-' : '+';
    }
    $scope.orderProperty = dir + col;
  };

});