module.exports = function reverse (n) {
  const positiveNumber = Math.abs(n);
  const arr = positiveNumber.toString().split('');
  const reverseNumbers = parseInt(arr.reverse().join(''));
  console.log('n', typeof reverseNumbers)
  return reverseNumbers;
  
}
