export default function isStringId(str) {
  return /^[a-z\d-]+$/.test(str);
}
