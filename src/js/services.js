app.service('itemsAndCart', function () {
  var itemsAndCart = {};
  var cart = {};
  teaItems.forEach((teaItem) => {
    cart[teaItem._id] = 0;
  });

  itemsAndCart.getItems = function () {
    return teaItems;
  };

  itemsAndCart.getCategories = function () {
    return Object.keys(teaItems.reduce(function (object, current) {
      current.categories.forEach(function (category) {
        object[category] = 1;
      });

      return object;
    }, {}));
  };

  itemsAndCart.getItem = function (id) {
    return getItem().filter(function (teaItem) {
      return teaItem.id == id;
    })[0];
  };

  itemsAndCart.getCart = function () {
    return teaItems.filter((teaItem) => cart[teaItem._id] != 0)
    .map((teaItem) => {
      teaItem.quantity = cart[teaItem._id];
      return teaItem;
    });
  };

  itemsAndCart.getCartTotals = function () {
    return teaItems.filter((teaItem) => cart[teaItem._id] != 0)
    .reduce((previous, teaItem) =>
      previous += cart[teaItem._id] * teaItem.price, 0);
  };

  itemsAndCart.getCartCount = function () {
    return Object.keys(cart).reduce(
      (sum, current) => sum += cart[current], 0);
  };

  itemsAndCart.addToCart = function (id, quantity) {
    cart[id] += Number(quantity);
  };

  itemsAndCart.updateQuantity = function (id, quantity) {
    cart[id] = Number(quantity);
  };

  return itemsAndCart;
});
