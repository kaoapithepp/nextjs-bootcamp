export const getData = async (path?: string) => {
  const res = await fetch("https://jsonplaceholder.typicode.com" + path);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
