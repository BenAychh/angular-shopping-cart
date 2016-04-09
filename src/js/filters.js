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

app.filter('split', function () {
  return function (input, delimiter) {
    delimiter = delimiter || ',';
    return input.split(delimiter);
  };
});
