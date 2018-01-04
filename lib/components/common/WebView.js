"use strict";
var _jsxFileName = "src/components/common/WebView.js";
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
var _reactNative2 = _interopRequireDefault(_reactNative);
var _reactNativeNavbar = require("react-native-navbar");
var _reactNativeNavbar2 = _interopRequireDefault(_reactNativeNavbar);
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
var _BackButton = require("./BackButton");
var _BackButton2 = _interopRequireDefault(_BackButton);
var _connection = require("../../config/connection");
var _connection2 = _interopRequireDefault(_connection);
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
var AboutUs = (function(_Component) {
  _inherits(AboutUs, _Component);
  function AboutUs(props) {
    _classCallCheck(this, AboutUs);
    var _this = _possibleConstructorReturn(
      this,
      (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call(this, props)
    );
    _this.renderError = function() {
      return _react2.default.createElement(
        _reactNative.View,
        {
          style: {
            flex: 1,
            backgroundColor: _constants2.default.Colors.White,
            justifyContent: "center"
          },
          __source: { fileName: _jsxFileName, lineNumber: 40 }
        },
        _react2.default.createElement(
          _reactNative.Text,
          {
            style: [
              {
                textAlign: "center",
                marginHorizontal: 15,
                color: _constants2.default.Colors.Black
              },
              _constants2.default.Fonts.subtitle
            ],
            __source: { fileName: _jsxFileName, lineNumber: 41 }
          },
          _constants2.default.i18n.common.no_internet
        )
      );
    };
    return _this;
  }
  _createClass(AboutUs, [
    {
      key: "render",
      value: function render() {
        var context = this;
        var titleConfig = {
          title: context.props.navigation.state.params.title,
          tintColor: "#fff"
        };
        var _props$navigation = this.props.navigation,
          goBack = _props$navigation.goBack,
          state = _props$navigation.state;
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: styles.container,
            __source: { fileName: _jsxFileName, lineNumber: 57 }
          },
          _react2.default.createElement(_reactNativeNavbar2.default, {
            leftButton: _react2.default.createElement(_BackButton2.default, {
              onPress: function onPress() {
                return goBack();
              },
              __source: { fileName: _jsxFileName, lineNumber: 59 }
            }),
            title: titleConfig,
            __source: { fileName: _jsxFileName, lineNumber: 58 }
          }),
          _react2.default.createElement(_reactNative.WebView, {
            renderError: function renderError() {
              return context.renderError();
            },
            onError: function onError() {
              return context.renderError();
            },
            source: {
              uri: _connection2.default.getStaticPageWithUrl(
                context.props.navigation.state.params.subLink
              )
            },
            __source: { fileName: _jsxFileName, lineNumber: 61 }
          })
        );
      }
    }
  ]);
  return AboutUs;
})(_react.Component);
var styles = _reactNative.StyleSheet.create({
  container: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT,
    width: _constants2.default.BaseStyle.DEVICE_WIDTH
  },
  text: {
    color: _constants2.default.Colors.White,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10
  }
});
module.exports = AboutUs;
