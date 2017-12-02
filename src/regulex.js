define(['./Kit','./NFA','./RegExp','./parse','./visualize'],
function (Kit,NFA,RegExp,parse,visualize) {
  return { // I hate require.js
    Kit:Kit,
    NFA:NFA,
    RegExp:RegExp,
    parse:parse,
    visualize:visualize
  };
});
