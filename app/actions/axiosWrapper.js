async function get(url, token) {
  try {
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    });
    if (!result.ok) {
      const text = await result.text().then((x) => x);
      const err = JSON.parse(text);

      throw err;
    }
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
async function post(url, data, token) {
  try {
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!result.ok) {
      const text = await result.text().then((x) => x);
      const err = JSON.parse(text);

      throw err[0];
    }
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
async function put(url, data, token) {
  try {
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
    if (!result.ok) {
      const text = await result.text().then((x) => x);
      const err = JSON.parse(text);

      throw err;
    }
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
async function del(url, token) {
  try {
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "DELETE",
    });
    if (!result.ok) {
      const text = await result.text().then((x) => x);
      const err = JSON.parse(text);

      throw err;
    }
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
export const axios = {
  get,
  post,
  put,
  del,
};
