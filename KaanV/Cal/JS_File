const addTextToInput = function (digit) {
  let mainText = document.getElementById("mainText");
  mainText.value = mainText.value + digit;
};
const getValue = function () {
  return +mainText.value;
};
const setValue = function (numericalValue) {
  mainText.value = numericalValue.toString();
};
const changeSign = function () {
  mainText.value = -mainText.value;
};
const onClear = function () {
  mainText.value = "";
};
var accumulator = 0;
var operation = "";
const minus = function () {
  accumulator = getValue();
  operation = "minus";
  onClear();
};
const plus = function () {
  accumulator = getValue();
  operation = "plus";
  onClear();
};
const multiply = function () {
  accumulator = getValue();
  operation = "multiply";
  onClear();
};
const division = function () {
  accumulator = getValue();
  operation = "division";
  onClear();
};
const equals = function () {
  switch (operation) {
    case "minus":
      setValue(accumulator - getValue());
      break;
    case "multiply":
      setValue(accumulator * getValue());
      break;
    case "division":
      setValue(accumulator / getValue());
      break;
    case "plus":
      setValue(accumulator + getValue());
      break;
  }
};
const onClickNumber = function (digit) {
  addTextToInput(digit);
};
