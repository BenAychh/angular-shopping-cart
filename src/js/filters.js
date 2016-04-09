app.filter('centsToDollars', function () {
  return function (input) {
    return input / 100;
  };
});

app.filter('trueToYes', function () {
  return function (input) {
    return input ? 'Yes' : 'No';
  };
});

app.filter('Capitalize', function () {
  return function (input) {
    return input[0].toUpperCase() + input.substring(1);
  };
});
