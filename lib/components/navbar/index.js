Object.defineProperty(exports, "__esModule", { value: true });
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
var _jsxFileName = "src/components/navbar/index.js";
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _propTypes = require("prop-types");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _buttons = require("./buttons");
var _buttons2 = _interopRequireDefault(_buttons);
var _style = require("./style");
var _style2 = _interopRequireDefault(_style);
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
var ButtonShape = {
  title: _propTypes2.default.string.isRequired,
  style: _reactNative.View.propTypes.style,
  handler: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};
var TitleShape = {
  title: _propTypes2.default.string.isRequired,
  tintColor: _propTypes2.default.string
};
var StatusBarShape = {
  style: _propTypes2.default.oneOf(["light-content", "default"]),
  hidden: _propTypes2.default.bool,
  tintColor: _propTypes2.default.string,
  hideAnimation: _propTypes2.default.oneOf(["fade", "slide", "none"]),
  showAnimation: _propTypes2.default.oneOf(["fade", "slide", "none"])
};
function getButtonElement(data, style) {
  return _react2.default.createElement(
    _reactNative.View,
    {
      style: _style2.default.navBarButtonContainer,
      __source: { fileName: _jsxFileName, lineNumber: 35 }
    },
    !data || data.props
      ? data
      : _react2.default.createElement(_buttons2.default, {
          title: data.title,
          style: [data.style, style],
          tintColor: data.tintColor,
          handler: data.handler,
          accessible: data.accessible,
          accessibilityLabel: data.accessibilityLabel,
          __source: { fileName: _jsxFileName, lineNumber: 37 }
        })
  );
}
function getTitleElement(data) {
  if (!data || data.props) {
    return _react2.default.createElement(
      _reactNative.View,
      {
        style: _style2.default.customTitle,
        __source: { fileName: _jsxFileName, lineNumber: 52 }
      },
      data
    );
  }
  var colorStyle = data.tintColor ? { color: data.tintColor } : null;
  return _react2.default.createElement(
    _reactNative.View,
    {
      style: _style2.default.navBarTitleContainer,
      __source: { fileName: _jsxFileName, lineNumber: 56 }
    },
    _react2.default.createElement(
      _reactNative.Text,
      {
        style: [_style2.default.navBarTitleText, data.style, colorStyle],
        __source: { fileName: _jsxFileName, lineNumber: 57 }
      },
      data.title
    )
  );
}
var NavigationBar = (function(_Component) {
  _inherits(NavigationBar, _Component);
  function NavigationBar() {
    _classCallCheck(this, NavigationBar);
    return _possibleConstructorReturn(
      this,
      (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(
        this,
        arguments
      )
    );
  }
  _createClass(NavigationBar, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.customizeStatusBar();
      }
    },
    {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps() {
        this.customizeStatusBar();
      }
    },
    {
      key: "customizeStatusBar",
      value: function customizeStatusBar() {
        var statusBar = this.props.statusBar;
        if (_reactNative.Platform.OS === "ios") {
          if (statusBar.style) {
            _reactNative.StatusBar.setBarStyle(statusBar.style);
          }
          var animation = statusBar.hidden
            ? statusBar.hideAnimation
            : statusBar.showAnimation;
          _reactNative.StatusBar.showHideTransition = animation;
          _reactNative.StatusBar.hidden = true;
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          containerStyle = _props.containerStyle,
          tintColor = _props.tintColor,
          title = _props.title,
          leftButton = _props.leftButton,
          rightButton = _props.rightButton,
          style = _props.style;
        var customTintColor = tintColor ? { backgroundColor: tintColor } : null;
        var customStatusBarTintColor = this.props.statusBar.tintColor
          ? { backgroundColor: this.props.statusBar.tintColor }
          : null;
        var statusBar = null;
        if (_reactNative.Platform.OS === "ios") {
          statusBar = !this.props.statusBar.hidden
            ? _react2.default.createElement(_reactNative.View, {
                style: [_style2.default.statusBar, customStatusBarTintColor],
                __source: { fileName: _jsxFileName, lineNumber: 143 }
              })
            : null;
        }
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: [
              _style2.default.navBarContainer,
              containerStyle,
              customTintColor
            ],
            __source: { fileName: _jsxFileName, lineNumber: 147 }
          },
          statusBar,
          _react2.default.createElement(
            _reactNative.View,
            {
              style: [_style2.default.navBar, style],
              __source: { fileName: _jsxFileName, lineNumber: 149 }
            },
            getTitleElement(title),
            getButtonElement(leftButton, { marginLeft: 8 }),
            getButtonElement(rightButton, { marginRight: 8 })
          )
        );
      }
    }
  ]);
  return NavigationBar;
})(_react.Component);
NavigationBar.propTypes = {
  style: _reactNative.View.propTypes.style,
  tintColor: _propTypes2.default.string,
  statusBar: _propTypes2.default.shape(StatusBarShape),
  leftButton: _propTypes2.default.oneOfType([
    _propTypes2.default.shape(ButtonShape),
    _propTypes2.default.element,
    _propTypes2.default.oneOf([null])
  ]),
  rightButton: _propTypes2.default.oneOfType([
    _propTypes2.default.shape(ButtonShape),
    _propTypes2.default.element,
    _propTypes2.default.oneOf([null])
  ]),
  title: _propTypes2.default.oneOfType([
    _propTypes2.default.shape(TitleShape),
    _propTypes2.default.element,
    _propTypes2.default.oneOf([null])
  ]),
  containerStyle: _reactNative.View.propTypes.style
};
NavigationBar.defaultProps = {
  style: {},
  tintColor: "",
  leftButton: null,
  rightButton: null,
  title: null,
  statusBar: {
    style: "light-content",
    hidden: false,
    hideAnimation: "slide",
    showAnimation: "slide"
  },
  containerStyle: {}
};
exports.default = NavigationBar;
