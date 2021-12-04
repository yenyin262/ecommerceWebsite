import { PrintfulClient } from "printful-request";
export const printful = new PrintfulClient(process.env.PRINTFUL_API_KEY);
//map here is a data struture
// can also be assigned to empty object - however, set, get properties wont be used here
const productCache = new Map();
let productsCache;

async function get(id) {
  let response;
  try {
    response = await printful.get(`sync/products/${id}`);
  } catch (e) {
    const timeout = 6000;
    setTimeout(async () => {
      response = await get(id);
    }, timeout);
  }

  return response;
}

export async function getProduct(productId) {
  //   console.log(
  //     "🚀 ~ file: printful-client.js ~ line 10 ~ getProduct ~ productCache",
  //     productCache.has(productId)
  //   );
  if (productCache.has(productId)) {
    return productCache.get(productId);
  }

  const response = await printful.get(`sync/products/${productId}`);

  //const response =  await get(productId)

  productCache.set(productId, response);
  //productCache[productId] = response
  return response;
}

export async function getProducts() {
  //   console.log(
  //     "🚀 ~ file: printful-client.js ~ line 10 ~ getProduct ~ products",
  //     !!productsCache
  //   );
  if (productsCache) {
    return productsCache;
  }
  const response = await printful.get("sync/products");

  productsCache = response;

  return response;
}
