const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

async function convertToJson(res) {
  let jsonData = await res.json();
  if (res.ok) {
    return jsonData;
  } else {
    throw { name: "servicesError", message: jsonData };
  }
}

export async function getDataByCategory(category = "tents") {
  const response = await fetch(baseURL + "products/search/" + category);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(baseURL + "checkout", options);
  return convertToJson(response);
}

export async function getAllItems() {
  let items = [];
  const categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];
  categories.forEach(async (cate) => {
    items.push(...(await getDataByCategory(cate)));
  });
  return items;
}
