/*
Parameter is a string
Need to return a Number from a string
i.e filter all letters out
use regEx

*/

function filterString(value) {
  return Number(value.replace(/\D/g, ''));
}
