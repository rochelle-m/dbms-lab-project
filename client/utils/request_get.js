export const request = async function (url, key, ...params) {
  const res = await fetch(url + "?q=" + params.join(""), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + key,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};
