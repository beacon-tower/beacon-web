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
const validateEmail = function (_vm, value) {
  const emailReg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;//邮箱
  if (value.match(emailReg)) {
    _vm.errTip = '';
    return true;
  } else {
    _vm.errTip = '邮箱格式不正确';
    return false;
  }
}
/**
 * 判断是否有值
 * @param val
 * @returns {boolean}
 */
const isnull = function (val) {
  if (val === null || val === 'null' || val === '' || val === undefined || val === 'undefined'|| val === -1) {
    return true;
  } else {
    return false;
  }
}
/**
 * 校验是否为空（登录相关使用）
 * @param values
 * @param tiptxt
 */
const validateEmpty = function (values) {
  let count = 0;
  for (var key in values) {
    if (isnull(values[key])) {
      count++;
    }
  }
  if (count > 0) {//表单中的所有项都填了
    return true;
  } else {//包含空值
    return false
  }
}
export {
  validatePhone,
  isnull,
  validateEmpty,
  validateEmail
}
