import { printful } from "../../../src/lib/printful-client";

export default async (req, res) => {
  const { eventName, content } = req.body;
  console.log("🚀 ~ file: tax.js ~ line 5 ~ eventName", eventName);

  if (eventName !== "taxes.calculate") return res.status(200).end();

  if (content.items.length === 0)
    return res.status(200).json({
      errors: [
        {
          key: "no_items",
          message: "No items in cart to calculate taxes.",
        },
      ],
    });

  const {
    items: cartItems,
    shippingAddress,
    shippingRateUserDefinedId,
  } = content;

  if (!shippingAddress)
    return res.status(200).json({
      errors: [
        {
          key: "no_address",
          message: "No address to calculate taxes.",
        },
      ],
    });

  const { address1, address2, city, country, province, postalCode, phone } =
    shippingAddress;

  const recipient = {
    ...(address1 && { address1 }),
    ...(address2 && { address2 }),
    ...(city && { city: city }),
    ...(country && { country_code: country }),
    ...(province && { state_code: province }),
    ...(postalCode && { zip: postalCode }),
    ...(phone && { phone }),
  };

  const items = cartItems.map((item) => ({
    external_variant_id: item.id,
    quantity: item.quantity,
  }));

  try {
    console.log("🚀 ~ file: tax.js ~ line 39 ~ recipient", recipient);
    const { result } = await printful.post("orders/estimate-costs", {
      shipping: shippingRateUserDefinedId,
      recipient,
      items,
    });
    console.log("🚀 ~ file: tax.js ~ line 58 ~ result", result);

    res.status(200).json({
      taxes: [
        {
          name: "VAT",
          amount: result.costs.vat,
          rate: 0,
        },
      ],
    });
  } catch ({ error }) {
    console.log(error);
    res.status(200).json({
      errors: [
        {
          key: error?.reason,
          message: error?.message,
        },
      ],
    });
  }
};
