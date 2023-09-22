export function regex(username: string) {
  return /^[a-zA-Z]{16}$/.test(username);
}
