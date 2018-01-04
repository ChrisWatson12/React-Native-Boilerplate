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
var _jsxFileName = "src/components/common/StarRating.js";
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
var _reactNative = require("react-native");
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
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
var StarRating = (function(_Component) {
  _inherits(StarRating, _Component);
  function StarRating(props) {
    _classCallCheck(this, StarRating);
    var _this = _possibleConstructorReturn(
      this,
      (StarRating.__proto__ || Object.getPrototypeOf(StarRating)).call(
        this,
        props
      )
    );
    _this.state = {
      rating: _this.props.rating ? _this.props.rating : 0,
      max: _this.props.max ? _this.props.max : 5,
      iconWidth: _this.props.iconWidth
        ? _this.props.iconWidth
        : _reactNative.Platform.OS === "ios"
          ? _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.8
          : _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.8,
      iconHeight: _this.props.iconHeight
        ? _this.props.iconHeight
        : _reactNative.Platform.OS === "ios"
          ? _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.8
          : _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.8,
      iconSelected: _this.props.iconSelected
        ? _this.props.iconSelected
        : _constants2.default.Images.ic_small_star,
      iconUnselected: _this.props.iconUnselected
        ? _this.props.iconUnselected
        : _constants2.default.Images.ic_small_grey_star,
      editable: _this.props.editable != null ? _this.props.editable : false
    };
    return _this;
  }
  _createClass(StarRating, [
    {
      key: "_onRate",
      value: function _onRate(rating) {
        this.setState({ rating: rating });
        if (this.props.onRate) {
          this.props.onRate(rating);
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var icons = [];
        var _loop = function _loop(i) {
          icons.push(
            _react2.default.createElement(
              _reactNative.TouchableWithoutFeedback,
              {
                disabled: !_this2.state.editable,
                key: i,
                style: {
                  height: _this2.state.iconHeight,
                  width: _this2.state.iconWidth
                },
                onPress: function onPress() {
                  return _this2._onRate(i);
                },
                __source: { fileName: _jsxFileName, lineNumber: 46 }
              },
              _react2.default.createElement(_reactNative.Image, {
                style: _extends(
                  {
                    height: _this2.state.iconHeight,
                    width: _this2.state.iconWidth
                  },
                  _this2.props.iconStyle,
                  {
                    marginHorizontal:
                      _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 0.5,
                    marginVertical:
                      _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 0.5
                  }
                ),
                source:
                  _this2.state.rating >= i
                    ? _this2.state.iconSelected
                    : _this2.state.iconUnselected,
                __source: { fileName: _jsxFileName, lineNumber: 52 }
              })
            )
          );
        };
        for (var i = 1; i <= this.state.max; i++) {
          _loop(i);
        }
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: [this.props.style, { flexDirection: "row" }],
            __source: { fileName: _jsxFileName, lineNumber: 70 }
          },
          icons
        );
      }
    }
  ]);
  return StarRating;
})(_react.Component);
exports.default = StarRating;
