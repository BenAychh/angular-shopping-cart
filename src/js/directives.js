app.directive('caffeineMeter', function () {
  return {
    templateUrl: 'directives/caffeineScale.html',
    scope: {
      caffeine: '=caffeine',
    },
  };
});
