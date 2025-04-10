export default function generateRandomString(): string {
  const result = Math.random().toString(36).slice(2, 7);
  return result;
}
