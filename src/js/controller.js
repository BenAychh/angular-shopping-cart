app.controller('cartControl', function ($scope, itemsAndCart) {
  $scope.categories = itemsAndCart.getCategories();
  $scope.cartStatus = itemsAndCart.getCartCount();
  $scope.getTeas = function () {
    if ($scope.priceSorter != 'ignore' && $scope.priceSorter != undefined) {
      console.log($scope.priceSorter);
      $scope.teas = itemsAndCart.getItems().sort(function (a, b) {
        if ($scope.priceSorter == 'true') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    } else {
      console.log('hello?');
      $scope.teas = itemsAndCart.getItems();
    }
  };

  $scope.getTeas();

  $scope.addToCart = function (id, quantity) {
    if (quantity == undefined || quantity == '') {
      quantity = 1;
    }

    itemsAndCart.addToCart(id, quantity);
    $scope.cartStatus = itemsAndCart.getCartCount();
  };
});

app.controller('checkoutControl', function ($scope, itemsAndCart) {
  $scope.updateCart = function (id, quantity) {
    if (quantity != undefined && quantity != '' && quantity !== '0') {
      itemsAndCart.updateQuantity(id, quantity);
      refreshCart();
    }
  };

  $scope.removeItem = function (id) {
    itemsAndCart.updateQuantity(id, 0);
    refreshCart();
  };

  function refreshCart() {
    $scope.cart = itemsAndCart.getCart();
    $scope.cartTotal = itemsAndCart.getCartTotals();
  }

  refreshCart();
});
