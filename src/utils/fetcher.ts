export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  if (!res.ok) {
    const error = new Error(`HTTP error! status: ${res.status}`);
    throw error;
  }
  return res.json();
}
