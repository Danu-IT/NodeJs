import colors from "colors";

const consoleResult = process.argv[2];
let result;
const check = (a) => {
  const range = a.split(".");
  let arr = [];
  if (range.length !== 2) return "Неверно указан диапазон";
  if (Number(range[0]) > Number(range[1]))
    return "Первое число не может быть больше второго";
  for (let i = range[0]; i <= range[1] - range[0] + 2; i++)
    if (isPrime(i)) arr.push(Number(i));

  if (arr.length == 0) return "Значения диапазона не числа";
  return arr;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

result = check(consoleResult);

for (let i = 0; i < result.length; i++) {
  const elem = result[i];
  if (i % 3 == 0) {
    console.log(colors.green(elem));
  } else if (i % 3 == 1) {
    console.log(colors.yellow(elem));
  } else {
    console.log(colors.red(elem));
  }
}
