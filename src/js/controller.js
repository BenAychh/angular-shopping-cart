app.controller('cartControl', function ($scope, itemsAndCart) {
  $scope.categories = itemsAndCart.getCategories();
  $scope.getTeas = function () {
    if ($scope.priceSorter != undefined && $scope.priceSorter != '') {
      $scope.teas = itemsAndCart.getItems().sort(function (a, b) {
        if ($scope.priceSorter == 'true') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    } else {
      $scope.teas = itemsAndCart.getItems();
    }
  };

  $scope.getTeas();

  $scope.addToCart = function (id, quantity) {
    console.log(id, quantity);
  }


});
