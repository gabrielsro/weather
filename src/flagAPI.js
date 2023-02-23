const endpoint = "https://countryflagsapi.com/svg/";
export function getFlag(code) {
  let src = `${endpoint}${code}`;
  return src;
}
