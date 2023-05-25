function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getData(category = "tents") {
  const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
  console.log(baseURL);
  const response = await fetch(baseURL + "products/search/" + category)
  console.log(response)
    const data = await convertToJson(response);
    return data.Result;
   

}

export async function findProductById(id) {
  const products = await getData();
  return products.find((item) => item.Id === id);
}
