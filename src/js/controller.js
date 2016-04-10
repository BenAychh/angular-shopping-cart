app.controller('cartControl', function ($scope, itemsAndCart) {
  $scope.categories = itemsAndCart.getCategories();
  $scope.cartStatus = itemsAndCart.getCartCount();
  $scope.getTeas = function () {
    $scope.teas = itemsAndCart.getItems();
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

app.controller('checkoutControl', function ($scope, itemsAndCart, $location) {
  $scope.updateCart = function (id, quantity) {
    if (quantity != undefined && quantity != '' && quantity !== '0') {
      itemsAndCart.updateQuantity(id, quantity);
      refreshCart();
    }
  };

  $scope.removeItem = function (id) {
    itemsAndCart.updateQuantity(id, 0);
    if (itemsAndCart.getCartCount() === 0) {
      $location.url('/cart');
    } else {
      refreshCart();
    }
  };

  function refreshCart() {
    $scope.cart = itemsAndCart.getCart();
    $scope.cartTotal = itemsAndCart.getCartTotals();
  }

  refreshCart();
});
