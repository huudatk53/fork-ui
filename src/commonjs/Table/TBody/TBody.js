"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var TBody = function TBody(_ref) {
  var className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className"]);
  return /*#__PURE__*/_react["default"].createElement("tbody", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-table-tbody', className)
  }, otherProps));
};

var _default = TBody;
exports["default"] = _default;