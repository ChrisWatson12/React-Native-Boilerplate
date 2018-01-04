"use strict";
function idx(input, accessor) {
  try {
    return accessor(input);
  } catch (error) {
    if (error instanceof TypeError) {
      if (isNullPropertyAccessError(error)) {
        return null;
      } else if (isUndefinedPropertyAccessError(error)) {
        return undefined;
      }
    }
    throw error;
  }
}
var nullPattern = void 0;
function isNullPropertyAccessError(_ref) {
  var message = _ref.message;
  if (!nullPattern) {
    nullPattern = getInvalidPropertyAccessErrorPattern(null);
  }
  return nullPattern.test(message);
}
var undefinedPattern = void 0;
function isUndefinedPropertyAccessError(_ref2) {
  var message = _ref2.message;
  if (!undefinedPattern) {
    undefinedPattern = getInvalidPropertyAccessErrorPattern(undefined);
  }
  return undefinedPattern.test(message);
}
var getInvalidPropertyAccessErrorPattern = new Function(
  "$object$",
  "\n  try {\n    $object$.$property$;\n  } catch (error) {\n    return new RegExp(\n      error.message\n        .replace(/[-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, '\\\\$&')\n        .replace('\\\\$object\\\\$', '.+')\n        .replace('\\\\$property\\\\$', '.+')\n    );\n  }\n  throw new Error('Expected property access on ' + $object$ + ' to throw.');\n"
);
module.exports = idx;
