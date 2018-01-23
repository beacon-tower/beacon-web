/**
 * 校验手机号格式是否正确
 * @param _vm this
 * @param value
 * @returns {boolean}
 */
const validatePhone = function (_vm, value) {
  const phoneReg = /^1[3|5|7|8]\d{9}$/;//手机号
  if (value.match(phoneReg)) {
    _vm.errTip = '';
    return true;
  } else {
    _vm.errTip = '手机号格式不正确';
    return false;
  }
}
export {
  validatePhone
}
