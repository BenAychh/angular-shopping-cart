app.config(function ($routeProvider) {
  $routeProvider.

    // when('/about', {
    //   templateUrl: 'partials/about.html',
    //   controller: 'aboutControl',
    // })
    // .when('/contact', {
    //   templateUrl: 'partials/contact.html',
    //   controller: 'contactControl',
    // })
    when('/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'cartControl',
    })
    .when('/checkout', {
      templateUrl: 'partials/checkout.html',
      controller: 'checkoutControl',
    })
    .otherwise({
      redirectTo: '/cart',
    });
});
