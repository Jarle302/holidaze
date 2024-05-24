export default function configureFetch(method: string, reqBody: {} = {}) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    ...(Object.keys(reqBody)?.length > 0
      ? { body: JSON.stringify(reqBody) }
      : {}),
  };

  return options;
}
