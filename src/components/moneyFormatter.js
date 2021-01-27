// Money formatter function
function moneyFormatter(number) {
  const p = number.toFixed(2).split('.');
  return (
    `$ ${
      p[0]
        .split('')
        .reverse()
        .reduce((acc, num, i, orig) => (num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc), '')
    }.${
      p[1]}`
  );
}

export default moneyFormatter;
