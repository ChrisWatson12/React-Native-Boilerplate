"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIsSoSInOpenedAgain = exports.setSoSInBooking = exports.setActiveBooking = undefined;
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
var _Actions = require("../Actions");
var setActiveBooking = (exports.setActiveBooking = function setActiveBooking(
  data
) {
  return { type: _Actions.SET_BOOKING_DATA, data: data };
});
var setSoSInBooking = (exports.setSoSInBooking = function setSoSInBooking(
  data
) {
  return { type: _Actions.BOOKING_DATA_IS_SOS, data: data };
});
var setIsSoSInOpenedAgain = (exports.setIsSoSInOpenedAgain = function setIsSoSInOpenedAgain(
  data
) {
  return { type: _Actions.IS_SOS_OPENED_AGAIN, data: data };
});
var initialState = { booking: null, isSoS: false, isSOSOpenedAgain: false };
function reducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];
  switch (action.type) {
    case _Actions.SET_BOOKING_DATA:
      return _extends({}, state, {
        booking: _extends({}, state.booking, action.data)
      });
    case _Actions.BOOKING_DATA_IS_SOS:
      return _extends({}, state, { isSoS: action.data });
    case _Actions.IS_SOS_OPENED_AGAIN:
      return _extends({}, state, { isSOSOpenedAgain: action.data });
    case _Actions.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
