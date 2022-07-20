"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMapbox;

var _react = require("react");

var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useMapbox() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "map";
  var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [37.61192, 55.76199];
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  _mapboxGl["default"].accessToken = "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
  (0, _react.useLayoutEffect)(function () {
    console.log("Hello");
    var map = new _mapboxGl["default"].Map({
      container: container,
      style: "mapbox://styles/mapbox/dark-v10",
      center: center,
      zoom: zoom
    });
  }, []);
}