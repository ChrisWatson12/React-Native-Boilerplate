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
var _jsxFileName = "src/components/common/FormTextInput.js";
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
var _FontAwesome = require("react-native-vector-icons/FontAwesome");
var _FontAwesome2 = _interopRequireDefault(_FontAwesome);
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
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
var FormTextInput = (function(_Component) {
  _inherits(FormTextInput, _Component);
  function FormTextInput(props) {
    _classCallCheck(this, FormTextInput);
    var _this = _possibleConstructorReturn(
      this,
      (FormTextInput.__proto__ || Object.getPrototypeOf(FormTextInput)).call(
        this,
        props
      )
    );
    _this.state = { isFocused: false };
    return _this;
  }
  _createClass(FormTextInput, [
    {
      key: "onFocus",
      value: function onFocus() {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
          this.props.onFocus();
        }
      }
    },
    {
      key: "focus",
      value: function focus() {
        this.refs.inputBox.focus();
      }
    },
    {
      key: "onChange",
      value: function onChange(event) {
        if (this.props.onChange) {
          this.props.onChange(event);
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: [
              styles.containerStyle,
              this.props.style,
              {
                borderColor: this.state.isFocused
                  ? _constants2.default.Colors.AccentColor
                  : _constants2.default.Colors.BlurGrey
              }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 54 }
          },
          this.props.icon &&
            _react2.default.createElement(_reactNative.Image, {
              resizeMode: "contain",
              source: this.props.icon,
              style: [styles.iconStyle, this.props.iconStyle],
              __source: { fileName: _jsxFileName, lineNumber: 57 }
            }),
          this.props.price &&
            _react2.default.createElement(
              _reactNative.Text,
              {
                style: [styles.price, this.props.priceStyle],
                __source: { fileName: _jsxFileName, lineNumber: 61 }
              },
              _constants2.default.i18n.common.pound
            ),
          _react2.default.createElement(
            _reactNative.View,
            {
              style: { flex: 1 },
              __source: { fileName: _jsxFileName, lineNumber: 63 }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              ref: "inputBox",
              autoCorrect: this.props.autoCorrect
                ? this.props.children.autoCorrect
                : false,
              autoCapitalize: this.props.autoCapitalize
                ? this.props.autoCapitalize
                : "none",
              keyboardType: this.props.keyboardType,
              placeholder: this.props.placeholder,
              placeholderTextColor: this.props.placeholderTextColor
                ? this.props.placeholderTextColor
                : _constants2.default.Colors.Gray,
              onChangeText: this.props.onChangeText,
              onChange: function onChange(event) {
                return _this2.onChange(event);
              },
              value: this.props.value,
              onFocus: function onFocus() {
                return _this2.onFocus();
              },
              onBlur: function onBlur() {
                return _this2.setState({ isFocused: false });
              },
              style: [styles.textInputStyle, this.props.textInputStyle],
              returnKeyType: this.props.returnKeyType,
              onSubmitEditing: this.props.onSubmitEditing,
              secureTextEntry: this.props.secureTextEntry,
              maxLength: this.props.maxLength,
              selectionColor: _constants2.default.Colors.AccentColor,
              underlineColorAndroid: _constants2.default.Colors.Transparent,
              autoFocus: this.props.autoFocus,
              __source: { fileName: _jsxFileName, lineNumber: 64 }
            })
          )
        );
      }
    }
  ]);
  return FormTextInput;
})(_react.Component);
var styles = _reactNative.StyleSheet.create({
  containerStyle: _extends(
    { borderBottomWidth: 1, flexDirection: "row", alignItems: "center" },
    _reactNative.Platform.select({
      android: {
        height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 7
      },
      ios: { height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 5 }
    })
  ),
  textInputStyle: _extends(
    {},
    _constants2.default.Fonts.regular,
    _reactNative.Platform.select({
      android: {
        height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 7
      },
      ios: { height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 5 }
    })
  ),
  iconStyle: {
    width: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.9,
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.9,
    marginRight: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 5
  },
  price: _extends({}, _constants2.default.Fonts.regular, {
    color: _constants2.default.Colors.Gray,
    marginRight: 5
  })
});
FormTextInput.defaultProps = { autoFocus: false };
FormTextInput.PropTypes = {
  returnKeyType: _react.PropTypes.string,
  icon: _react.PropTypes.string.isRequired,
  keyboardType: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onChangeText: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onSubmitEditing: _react.PropTypes.func,
  style: _react.PropTypes.object,
  textInputStyle: _react.PropTypes.object,
  placeholderTextColor: _react.PropTypes.string,
  iconStyle: _react.PropTypes.object
};
exports.default = FormTextInput;
