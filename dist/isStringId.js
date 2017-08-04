"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStringId;
function isStringId(str) {
  return (/^[a-z\d-]+$/.test(str)
  );
}
module.exports = exports["default"];