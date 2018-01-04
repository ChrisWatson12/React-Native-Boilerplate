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
var _jsxFileName = "src/components/common/InputText.js";
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
var InputText = (function(_Component) {
  _inherits(InputText, _Component);
  function InputText(props) {
    _classCallCheck(this, InputText);
    var _this = _possibleConstructorReturn(
      this,
      (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(
        this,
        props
      )
    );
    _this.state = { isFocused: false };
    return _this;
  }
  _createClass(InputText, [
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
              this.props.containerStyle,
              {
                borderBottomColor: this.state.isFocused
                  ? _constants2.default.Colors.AccentColor
                  : _constants2.default.Colors.GhostWhite
              }
            ],
            __source: { fileName: _jsxFileName, lineNumber: 53 }
          },
          _react2.default.createElement(
            _reactNative.Text,
            {
              style: [styles.labelStyle, this.props.labelStyle],
              __source: { fileName: _jsxFileName, lineNumber: 60 }
            },
            this.props.labelText
          ),
          _react2.default.createElement(
            _reactNative.View,
            {
              style: { flexDirection: "row", alignItems: "center" },
              __source: { fileName: _jsxFileName, lineNumber: 64 }
            },
            this.props.image0 &&
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                  hitSlop: _constants2.default.HIT_SLOP,
                  onPress: this.props.onImagePress,
                  __source: { fileName: _jsxFileName, lineNumber: 70 }
                },
                _react2.default.createElement(_reactNative.Image, {
                  resizeMode: "contain",
                  source: this.props.image0,
                  style: [styles.image0Style, this.props.image0Style],
                  __source: { fileName: _jsxFileName, lineNumber: 71 }
                })
              ),
            _react2.default.createElement(_reactNative.TextInput, {
              ref: "inputBox",
              autoFocus: this.props.autoFocus,
              autoCorrect: this.props.autoCorrect
                ? this.props.children.autoCorrect
                : false,
              autoCapitalize: this.props.autoCapitalize
                ? this.props.autoCapitalize
                : "none",
              keyboardType: this.props.keyboardType,
              placeholder: this.props.placeholder,
              placeholderTextColor: this.props.placeholderTextColor,
              onChangeText: this.props.onChangeText,
              onChange: function onChange(event) {
                return _this2.onChange(event);
              },
              value: this.props.value,
              editable: !this.props.editable,
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
              __source: { fileName: _jsxFileName, lineNumber: 78 }
            }),
            this.props.image &&
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                  onPress: this.props.onImagePress,
                  __source: { fileName: _jsxFileName, lineNumber: 102 }
                },
                _react2.default.createElement(_reactNative.Image, {
                  resizeMode: "contain",
                  source: this.props.image,
                  style: [styles.imageStyle, this.props.imageStyle],
                  __source: { fileName: _jsxFileName, lineNumber: 103 }
                })
              )
          )
        );
      }
    }
  ]);
  return InputText;
})(_react.Component);
exports.default = InputText;
var styles = _reactNative.StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    paddingVertical: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 2
  },
  labelStyle: _extends({}, _constants2.default.Fonts.tiny, {
    color: _constants2.default.Colors.Gray
  }),
  textInputStyle: _extends(
    {},
    _constants2.default.Fonts.regular,
    { marginTop: 3, flex: 1, color: _constants2.default.Colors.Black },
    _reactNative.Platform.select({
      android: {
        height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 7,
        marginLeft: -_constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 1
      },
      ios: { height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 4 }
    })
  ),
  imageStyle: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 3,
    width: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 3,
    marginLeft: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 6
  },
  image0Style: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 2,
    width: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 2,
    marginRight: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 5
  }
});
InputText.PropTypes = {
  returnKeyType: _react.PropTypes.string,
  keyboardType: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onChangeText: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onSubmitEditing: _react.PropTypes.func,
  style: _react.PropTypes.object,
  bool: _react.PropTypes.bool,
  image: _react.PropTypes.string,
  imageStyle: _react.PropTypes.object
};
