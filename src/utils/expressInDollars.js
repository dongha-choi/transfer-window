export default function expressInDollars(str) {
  let expressInDollars = '';
  for (let i = 1; i <= str.length; i++) {
    expressInDollars = str[str.length - i] + expressInDollars;
    if (i % 3 === 0 && i < str.length) {
      expressInDollars = ',' + expressInDollars;
    }
  }
  expressInDollars = '$' + expressInDollars;
  return expressInDollars;
}
