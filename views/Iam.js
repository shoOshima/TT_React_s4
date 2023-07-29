"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Iam = function Iam() {
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    lanJp = _useState2[0],
    setLanJp = _useState2[1];
  var _useState3 = (0, _react.useState)('大●　●生'),
    _useState4 = _slicedToArray(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];
  var _useState5 = (0, _react.useState)(32),
    _useState6 = _slicedToArray(_useState5, 2),
    old = _useState6[0],
    setOld = _useState6[1];
  var labelArrayStr = [['name', 'old', 'hobby', '日本語へ', 'The background image is a picture of a frozen runny nose.'], ['名前', '年齢', '趣味', 'English', '背景は、鼻水が凍った時の写真です。']];
  var _useState7 = (0, _react.useState)(labelArrayStr[lanJp]),
    _useState8 = _slicedToArray(_useState7, 2),
    labelText = _useState8[0],
    setLabelText = _useState8[1];
  var hobbyArrayStr = [['anime', 'games', 'sleep', 'be lazy'], ['アニメ', 'ゲーム', '寝る', '怠惰する']];
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    hobbyNo = _useState10[0],
    setHobbyNo = _useState10[1];
  var _useState11 = (0, _react.useState)(hobbyArrayStr[lanJp][hobbyNo]),
    _useState12 = _slicedToArray(_useState11, 2),
    hobby = _useState12[0],
    setHobby = _useState12[1];
  var lanChage = function lanChage() {
    var lanNo = 0;
    if (lanJp == 0) {
      setLanJp(1);
      lanNo = 1;
      setName('大● ●生');
    } else {
      setLanJp(0);
      lanNo = 0;
      setName('S●o Oh●');
    }
    setLabelText(labelArrayStr[lanNo]);
    setHobby(hobbyArrayStr[lanNo][hobbyNo]);
  };
  var hobbyChage = function hobbyChage() {
    var hNo = hobbyNo + 1;
    hNo >= hobbyArrayStr[lanJp].length ? hNo = 0 : '';
    setHobbyNo(hNo);
    setHobby(hobbyArrayStr[lanJp][hNo]);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "IAM"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "IAM-Button",
    onClick: lanChage
  }, labelText[3]), /*#__PURE__*/_react.default.createElement("h3", null, "The\u81EA\u5DF1\u7D39\u4ECB"), /*#__PURE__*/_react.default.createElement("p", null, labelText[0], " : ", name), /*#__PURE__*/_react.default.createElement("button", {
    className: "IAM-Button",
    onClick: function onClick() {
      return setOld(old + 1);
    }
  }, "+"), /*#__PURE__*/_react.default.createElement("button", {
    className: "IAM-Button",
    onClick: function onClick() {
      return setOld(old - 1);
    }
  }, "-"), /*#__PURE__*/_react.default.createElement("p", null, labelText[1], " : ", old), /*#__PURE__*/_react.default.createElement("button", {
    className: "IAM-Button",
    onClick: hobbyChage
  }, "\u25B6"), /*#__PURE__*/_react.default.createElement("p", null, labelText[2], " : ", hobby), /*#__PURE__*/_react.default.createElement("p", null, labelText[4], " "));
};
var _default = Iam;
exports.default = _default;