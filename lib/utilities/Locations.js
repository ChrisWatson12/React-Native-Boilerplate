"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermissions = checkPermissions;
exports.requestPermissions = requestPermissions;
exports.errorPopUp = errorPopUp;
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactNativePermissions = require("react-native-permissions");
var _reactNativePermissions2 = _interopRequireDefault(_reactNativePermissions);
var _constants = require("../constants");
var _constants2 = _interopRequireDefault(_constants);
var _reactNativeGeocoder = require("react-native-geocoder");
var _reactNativeGeocoder2 = _interopRequireDefault(_reactNativeGeocoder);
var _location = require("../redux/modules/location");
var LocationActions = _interopRequireWildcard(_location);
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
_reactNativeGeocoder2.default.fallbackToGoogle(
  _constants2.default.GoogleAPIKey
);
function checkPermissions(store) {}
function requestPermissions(store) {}
function errorPopUp(title, msg) {
  _reactNative.Alert.alert(
    title,
    msg,
    [
      {
        text: "Enable",
        onPress: function onPress() {
          _reactNativePermissions2.default.openSettings();
        }
      },
      { text: "Cancel" }
    ],
    { cancelable: false }
  );
}
