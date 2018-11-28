function validateUser(decoded, request, callback) {
  // This is a simple check that the `sub` claim
  // exists in the Access Token. Modify it to suit
  // the needs of your application
  console.log("validate user: ", JSON.stringify(decoded)); // eslint-disable-line

  if (decoded && decoded.sub) {
    if (decoded.scope) {
      return callback(null, true, {
        scope: decoded.scope.split(" ")
      });
    }

    return callback(null, true);
  }

  return callback(null, false);
}

module.exports = validateUser;
