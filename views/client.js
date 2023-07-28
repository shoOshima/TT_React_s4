"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _Iam = _interopRequireDefault(require("./Iam"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import CountUp from './CountUp'

// hydrate(<CountUp />,document.querySelector('#app'));

var domNode = document.getElementById('app');
(0, _client.hydrateRoot)(domNode, /*#__PURE__*/_react.default.createElement(_Iam.default, null));