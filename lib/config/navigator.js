Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNavigator = undefined;
var _jsxFileName = "src/config/navigator.js";
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
var _reactNavigation = require("react-navigation");
var _reactRedux = require("react-redux");
var _routes = require("./routes");
var _routes2 = _interopRequireDefault(_routes);
var _reactNative = require("react-native");
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
var stackNavigatorConfiguration = {
  headerMode: "none",
  mode: "card",
  navigationOptions: { gesturesEnabled: false }
};
var AppNavigator = (0, _reactNavigation.StackNavigator)(
  _routes2.default,
  stackNavigatorConfiguration
);
var AppWithNavigationState = (function(_Component) {
  _inherits(AppWithNavigationState, _Component);
  function AppWithNavigationState(props) {
    _classCallCheck(this, AppWithNavigationState);
    var _this = _possibleConstructorReturn(
      this,
      (
        AppWithNavigationState.__proto__ ||
        Object.getPrototypeOf(AppWithNavigationState)
      ).call(this, props)
    );
    _this.onBackPress = function() {
      var _this$props = _this.props,
        dispatch = _this$props.dispatch,
        nav = _this$props.nav;
      if (nav.index === 0) {
        _reactNative.Alert.alert(
          "Exit App",
          "Are you sure you want to exit?",
          [
            {
              text: "Cancel",
              onPress: function onPress() {
                return console.log("Cancel Pressed");
              },
              style: "cancel"
            },
            {
              text: "OK",
              onPress: function onPress() {
                _reactNative.BackHandler.exitApp();
                return true;
              }
            }
          ],
          { cancelable: false }
        );
        return true;
      }
      dispatch(_reactNavigation.NavigationActions.back());
      return true;
    };
    return _this;
  }
  _createClass(AppWithNavigationState, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        _reactNative.BackHandler.addEventListener(
          "hardwareBackPress",
          this.onBackPress
        );
      }
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _reactNative.BackHandler.removeEventListener(
          "hardwareBackPress",
          this.onBackPress
        );
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          dispatch = _props.dispatch,
          nav = _props.nav;
        return _react2.default.createElement(AppNavigator, {
          navigation: (0, _reactNavigation.addNavigationHelpers)({
            dispatch: dispatch,
            state: nav
          }),
          __source: { fileName: _jsxFileName, lineNumber: 68 }
        });
      }
    }
  ]);
  return AppWithNavigationState;
})(_react.Component);
exports.AppNavigator = AppNavigator;
var mapStateToProps = function mapStateToProps(state) {
  return { nav: state.nav };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(
  AppWithNavigationState
);
