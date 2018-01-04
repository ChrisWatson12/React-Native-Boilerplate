"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleDetails = exports.uploadFiles = exports.pendingProfile = exports.newInstall = exports.logout = exports.updateProfile = exports.setUserData = exports.setDeviceToken = undefined;
var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
exports.default = reducer;
var _reactNative = require("react-native");
var _lodash = require("lodash");
var _lodash2 = _interopRequireDefault(_lodash);
var _app = require("./app");
var _nav = require("./nav");
var _RestClient = require("../../utilities/RestClient");
var _RestClient2 = _interopRequireDefault(_RestClient);
var _reactNativeReduxToast = require("react-native-redux-toast");
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
var _Actions = require("../Actions");
var Actions = _interopRequireWildcard(_Actions);
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
var setDeviceToken = (exports.setDeviceToken = function setDeviceToken(data) {
  return { type: Actions.DEVICE_TOKEN, data: data };
});
var setUserData = (exports.setUserData = function setUserData(data) {
  return { type: Actions.USER_PROFILE, data: data };
});
var updateProfile = (exports.updateProfile = function updateProfile(data) {
  return { type: Actions.UPDATE_PROFILE, data: data };
});
var logout = (exports.logout = function logout() {
  return { type: Actions.LOGOUT };
});
var newInstall = (exports.newInstall = function newInstall() {
  return { type: Actions.NEW_INSTALL };
});
var pendingProfile = (exports.pendingProfile = function pendingProfile(data) {
  return { type: Actions.PENDING_PROFILE_UPDATE, data: data };
});
var uploadFiles = (exports.uploadFiles = function uploadFiles(data, callBack) {
  var requestObject = new FormData();
  _lodash2.default.each(data, function(file, i) {
    if (file.isPDF) {
      var pdf = {
        uri: file.path,
        type: "application/pdf",
        name: "vehicle.pdf"
      };
      requestObject.append("pdf" + i, pdf);
    } else {
      var photo = {
        uri: file.path,
        type: "image/jpeg",
        name: "user photo.png"
      };
      requestObject.append("image" + i, photo);
    }
  });
  return function(dispatch) {
    dispatch((0, _app.handleLoader)());
    _RestClient2.default
      .imageUpload("upload", requestObject)
      .then(function(result) {
        if (result.success) {
          callBack({ _id: result.data[0].fileId });
        } else {
          dispatch(
            _reactNativeReduxToast.ToastActionsCreators.displayInfo(
              result.message
            )
          );
        }
        dispatch((0, _app.handleLoader)());
      })
      .catch(function(error) {
        dispatch((0, _app.handleLoader)());
      });
  };
});
var getVehicleDetails = (exports.getVehicleDetails = function getVehicleDetails(
  data,
  callBack
) {
  return function(dispatch) {
    dispatch((0, _app.handleLoader)());
    var requestObject = {
      apikey: _constants2.default.VehicleAPIKey,
      licencePlate: data
    };
    _RestClient2.default
      .getVehicle(requestObject)
      .then(function(result) {
        if (result.error !== 1 && result.message != "No vehicle found") {
          callBack(result);
        }
        dispatch(
          _reactNativeReduxToast.ToastActionsCreators.displayInfo(
            result.message
          )
        );
        dispatch((0, _app.handleLoader)());
      })
      .catch(function(error) {
        dispatch((0, _app.handleLoader)());
      });
  };
});
var initialState = {
  userDetails: null,
  deviceToken: "test",
  reviews: [],
  newInstall: true,
  isUpdatePending: false
};
function reducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];
  switch (action.type) {
    case Actions.DEVICE_TOKEN:
      return _extends({}, state, { deviceToken: action.data });
    case Actions.USER_PROFILE:
      return _extends({}, state, { userDetails: action.data });
    case Actions.UPDATE_PROFILE:
      return _extends({}, state, {
        userDetails: _extends({}, state.userDetails, action.data)
      });
    case Actions.NEW_INSTALL:
      return _extends({}, state, { newInstall: false });
    case Actions.PENDING_PROFILE_UPDATE:
      return _extends({}, state, { isUpdatePending: action.data });
    case Actions.LOGOUT:
      var data = _extends({}, initialState, {
        newInstall: state.newInstall,
        deviceToken: state.deviceToken
      });
      console.log("MY DAT ", data);
      return data;
    default:
      return state;
  }
}
