app.service('itemsAndCart', function () {
  var itemsAndCart = {};
  var cart = {};
  teaItems.forEach((teaItem) => {
    cart[teaItem._id] = 0;
  });
  itemsAndCart.getItems = function () {
    return teaItems.map(function (teaItem) {
      var teaItem = JSON.parse(JSON.stringify(teaItem));
      teaItem.price = teaItem.price / 100;
      if (teaItem.inStock) {
        teaItem.inStock = 'Yes';
      } else {
        teaItem.inStock = 'No';
      }

      return teaItem;
    });
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
    });
  };

  itemsAndCart.addToCart = function (id, quantity) {
    cart[id] += Number(quantity);
  };

  return itemsAndCart;
});
