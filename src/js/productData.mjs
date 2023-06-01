const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getData(category = "tents") {
  const response = await fetch(baseURL + "products/search/" + category);
  const data = await convertToJson(response);
  console.log(data);
  return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}
