async function fetchData(token) {
  console.log(token);
  try {
    const result = await fetch("http://localhost:5038/api/Admin", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    });
    if (!result.ok) {
      const text = await result.text().then((x) => x);
      const err = JSON.parse(text);

      throw err[0];
    }
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("result is not  ok");
    console.log(error);
    // throw new Error(error);
  }
}
export { fetchData };
