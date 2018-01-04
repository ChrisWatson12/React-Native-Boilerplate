"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var _jsxFileName = "src/components/common/Location.js";
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactMixin = require("react-mixin");
var _reactMixin2 = _interopRequireDefault(_reactMixin);
var _reactTimerMixin = require("react-timer-mixin");
var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
var _BackButton = require("./BackButton");
var _BackButton2 = _interopRequireDefault(_BackButton);
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactNativeReduxToast = require("react-native-redux-toast");
var _reactNativeNavbar = require("react-native-navbar");
var _reactNativeNavbar2 = _interopRequireDefault(_reactNativeNavbar);
var _lodash = require("lodash");
var _lodash2 = _interopRequireDefault(_lodash);
var _reactNativeGooglePlacesAutocomplete = require("react-native-google-places-autocomplete");
var _location = require("../../redux/modules/location");
var locationActions = _interopRequireWildcard(_location);
var _reactNativeGeocoder = require("react-native-geocoder");
var _reactNativeGeocoder2 = _interopRequireDefault(_reactNativeGeocoder);
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var Location = (function(_Component) {
  _inherits(Location, _Component);
  function Location(props) {
    _classCallCheck(this, Location);
    var _this = _possibleConstructorReturn(
      this,
      (Location.__proto__ || Object.getPrototypeOf(Location)).call(this, props)
    );
    _this.getAddress = function() {
      var context = _this;
      if (context.state.text.trim().length < 4) {
        context.props.navigation.dispatch(
          _reactNativeReduxToast.ToastActionsCreators.displayInfo(
            "Please enter minimum 4 digit postal code."
          )
        );
        return;
      }
      context.props.locationActions.fetchLocation(context.state.text);
    };
    _this.onRequestPress = function(data) {
      var context = _this;
      var goBack = _this.props.navigation.goBack;
      var position = {
        lat: data.latitude,
        lng: data.longitude,
        address:
          data.line_1.capitalizeEachLetter() +
          " " +
          data.line_2.capitalizeEachLetter(),
        postalCode: data.postcode,
        city: data.post_town.capitalizeEachLetter()
      };
      context.props.locationActions.selectedLocation(position);
      goBack();
    };
    _this.renderItem = function(_ref) {
      var item = _ref.item,
        index = _ref.index;
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          hitSlop: _constants2.default.HIT_SLOP,
          style: defaultStyles.row,
          activeOpacity: 0.9,
          onPress: function onPress() {
            return _this.onRequestPress(item);
          },
          __source: { fileName: _jsxFileName, lineNumber: 77 }
        },
        _react2.default.createElement(
          _reactNative.Text,
          {
            style: { color: _constants2.default.Colors.Black },
            numberOfLines: 3,
            __source: { fileName: _jsxFileName, lineNumber: 82 }
          },
          item.line_1.capitalizeEachLetter() +
            " " +
            item.line_2.capitalizeEachLetter() +
            " " +
            item.post_town.capitalizeEachLetter()
        )
      );
    };
    _this._keyExtractor = function(item, index) {
      return item.udprn;
    };
    _this.state = { text: "" };
    return _this;
  }
  _createClass(Location, [
    {
      key: "render",
      value: function render() {
        var context = this;
        var _props$navigation = this.props.navigation,
          goBack = _props$navigation.goBack,
          state = _props$navigation.state,
          dispatch = _props$navigation.dispatch;
        var titleConfig = { title: "Search Location", tintColor: "#fff" };
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: [defaultStyles.container],
            __source: { fileName: _jsxFileName, lineNumber: 101 }
          },
          _react2.default.createElement(_reactNativeNavbar2.default, {
            leftButton: _react2.default.createElement(_BackButton2.default, {
              onPress: function onPress() {
                return goBack();
              },
              __source: { fileName: _jsxFileName, lineNumber: 103 }
            }),
            title: titleConfig,
            __source: { fileName: _jsxFileName, lineNumber: 102 }
          }),
          _react2.default.createElement(
            _reactNative.View,
            {
              style: [defaultStyles.textInputContainer],
              __source: { fileName: _jsxFileName, lineNumber: 106 }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              style: defaultStyles.textInputStyle,
              onChangeText: function onChangeText(text) {
                return context.setState({ text: text });
              },
              value: context.state.text,
              onSubmitEditing: function onSubmitEditing() {
                return context.getAddress();
              },
              placeholder: "Enter postal code here.",
              placeholderTextColor: _constants2.default.Colors.Gray,
              autoCapitalize: "characters",
              autoCorrect: false,
              autoFocus: true,
              underlineColorAndroid: _constants2.default.Colors.Transparent,
              __source: { fileName: _jsxFileName, lineNumber: 107 }
            })
          ),
          _react2.default.createElement(_reactNative.FlatList, {
            data:
              context.props.location.addresses.length > 0
                ? context.props.location.addresses
                : [],
            renderItem: this.renderItem,
            showsVerticalScrollIndicator: false,
            keyExtractor: this._keyExtractor,
            __source: { fileName: _jsxFileName, lineNumber: 120 }
          })
        );
      }
    }
  ]);
  return Location;
})(_react.Component);
var defaultStyles = {
  container: { backgroundColor: _constants2.default.Colors.White, flex: 1 },
  inputContainer: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    width: _constants2.default.BaseStyle.DEVICE_WIDTH
  },
  inputStyle: _extends(
    {
      height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 10,
      paddingHorizontal: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 6
    },
    _constants2.default.Fonts.subtitle_bold,
    {
      color: _constants2.default.Colors.White,
      backgroundColor: _constants2.default.Colors.Transparent
    }
  ),
  listContainer: {
    marginHorizontal: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 6,
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 10
  },
  currentContainer: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 10,
    borderBottomColor: _constants2.default.Colors.GhostWhite,
    borderBottomWidth: 0.5,
    justifyContent: "center"
  },
  listStyle: {},
  crossIcon: {
    height: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 4.2,
    width: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 4
  },
  textStyle: _extends(
    { color: _constants2.default.Colors.White },
    _constants2.default.Fonts.normal,
    {
      paddingVertical: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 0.2,
      paddingHorizontal: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1
    }
  ),
  placeholderStyle: {
    width: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 12,
    height: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 12,
    alignSelf: "center",
    borderRadius: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 6,
    justifyContent: "center"
  },
  textInputStyle: {
    backgroundColor: "#FFFFFF",
    height: 28,
    borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 15,
    flex: 1
  },
  textInputContainer: {
    backgroundColor: "#C9C9CE",
    height: 44,
    borderTopColor: "#7e7e7e",
    borderBottomColor: "#b5b5b5",
    borderTopWidth: 1 / _reactNative.PixelRatio.get(),
    borderBottomWidth: 1 / _reactNative.PixelRatio.get(),
    flexDirection: "row"
  },
  row: {
    padding: 13,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: _constants2.default.Colors.GhostWhite,
    backgroundColor: _constants2.default.Colors.White
  }
};
(0, _reactMixin2.default)(Location.prototype, _reactTimerMixin2.default);
var mapStateToProps = function mapStateToProps(state) {
  return { location: state.location };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    locationActions: (0, _redux.bindActionCreators)(locationActions, dispatch)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  Location
);
