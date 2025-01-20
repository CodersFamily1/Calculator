let result = document.getElementById("result");

function apendFun(number) {
  result.value += number
}
function apenddel() {
  result.value = ''
}
function res(number) {
  try {
    result.value = eval(result.value);
  } catch (error) {
    window.location.href = 'funk.html';
  }
}
function popfun() {
result.value = result.value.slice(0,-1)
}