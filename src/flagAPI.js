export function getFlag(code) {
  let src = `${endpoint}${code}`;
  let src2 = `https://flagcdn.com/${code.toLowerCase()}.svg`;
  return src2;
}
