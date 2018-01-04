"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goTo = exports.resetToDashboard = exports.reset = exports.goBack = undefined;
exports.default = reducer;
var _Idx = require("../../utilities/Idx");
var _Idx2 = _interopRequireDefault(_Idx);
var _reactNavigation = require("react-navigation");
var _navigator = require("../../config/navigator");
var _reduxPersist = require("redux-persist");
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
var goBack = (exports.goBack = function goBack() {
  return { type: Actions.GOBACK };
});
var reset = (exports.reset = function reset(data) {
  return { type: Actions.ResetNavigator, data: data };
});
var resetToDashboard = (exports.resetToDashboard = function resetToDashboard(
  data
) {
  return { type: Actions.ResetDashboard, data: data };
});
var goTo = (exports.goTo = function goTo(data) {
  return { type: Actions.GOTO, data: data };
});
var initialState = _navigator.AppNavigator.router.getStateForAction(
  _reactNavigation.NavigationActions.reset({
    index: 0,
    actions: [
      _reactNavigation.NavigationActions.navigate({ routeName: "Loader" })
    ]
  })
);
function reducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];
  var firstState = "Demo";
  if (action.payload && action.payload.user) {
    firstState = action.payload.user.newInstall ? "Walkthrough" : "Login";
    if (
      action.payload.user.isUpdatePending &&
      action.payload.user.userDetails
    ) {
      switch (action.payload.user.userDetails.role) {
        case "Consumer":
          firstState = "CompleteProfile";
          break;
        default:
          firstState = "CompleteProfileService";
          break;
      }
    } else if (
      !action.payload.user.isUpdatePending &&
      action.payload.user.userDetails
    ) {
      if (action.payload.user.userDetails.role == "Consumer") {
        firstState = "Dashboard";
      } else if (action.payload.user.userDetails.admin_verified == "accepted") {
        firstState = "ServiceDashboard";
      } else {
        firstState = "UnderReview";
      }
    }
  }
  switch (action.type) {
    case Actions.ResetNavigator:
      return _navigator.AppNavigator.router.getStateForAction(
        _reactNavigation.NavigationActions.reset({
          index: 0,
          actions: [
            _reactNavigation.NavigationActions.navigate({ routeName: "Login" })
          ]
        }),
        state
      );
    case Actions.ResetDashboard:
      return _navigator.AppNavigator.router.getStateForAction(
        _reactNavigation.NavigationActions.reset({
          index: 0,
          actions: [
            _reactNavigation.NavigationActions.navigate({
              routeName: action.data.route,
              params: action.data.data ? action.data.data : {}
            })
          ]
        }),
        state
      );
    case Actions.GOBACK:
      return _navigator.AppNavigator.router.getStateForAction(
        _reactNavigation.NavigationActions.back(),
        state
      );
    case _reduxPersist.REHYDRATE:
      if (
        action.payload.nav &&
        (action.payload.nav.routes[action.payload.nav.routes.length - 1]
          .routeName === "ActiveService" ||
          action.payload.nav.routes[action.payload.nav.routes.length - 1]
            .routeName === "Invoice")
      ) {
        return _navigator.AppNavigator.router.getStateForAction(action, state);
      } else {
        return _navigator.AppNavigator.router.getStateForAction(
          _reactNavigation.NavigationActions.reset({
            index: 0,
            actions: [
              _reactNavigation.NavigationActions.navigate({
                routeName: firstState
              })
            ]
          }),
          state
        );
      }
    case Actions.GOTO:
      return _navigator.AppNavigator.router.getStateForAction(
        _reactNavigation.NavigationActions.navigate({
          routeName: action.data.route,
          params: action.data.params || {}
        }),
        state
      );
    case Actions.LOGOUT:
      return _navigator.AppNavigator.router.getStateForAction(
        _reactNavigation.NavigationActions.reset({
          index: 0,
          actions: [
            _reactNavigation.NavigationActions.navigate({ routeName: "Login" })
          ]
        }),
        state
      );
    default:
      return _navigator.AppNavigator.router.getStateForAction(action, state);
  }
}
