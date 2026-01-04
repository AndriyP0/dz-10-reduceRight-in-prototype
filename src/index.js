function MyArray(...items) {
  this.length = 0;
  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
    this.length++;
  }
}

MyArray.prototype.reduceRight = function (callback, startValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  const hasStartValue = arguments.length > 1;
  let result;
  let i = this.length - 1;

  if (hasStartValue) {
    result = startValue;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    result = this[i];
    i--;
  }

  for (; i >= 0; i--) {
    result = callback(result, this[i], i, this);
  }

  return result;
};

const arr = new MyArray(1, 2, 3, 4);
const sum = arr.reduceRight((acc, val) => acc + val);
console.log(sum);
