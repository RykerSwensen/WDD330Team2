import { getAllItems } from "./externalServices.mjs";

export async function search(query) {
  const items = await getAllItems();
  console.log(items);
  items.filter((item) => {
    if (item.Name.includes(query)) return true;
    else if (item.NameWithoutBrand.includes(query)) return true;
    else if (item.DescriptionHtmlSimple.includes(query)) return true;
    else return false;
  });
}
