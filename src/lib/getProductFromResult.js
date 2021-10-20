// {
//   ({ result: { sync_product, sync_variants } }) => ({
//     ...sync_product,
//     variants: sync_variants.map(({ name, ...variant }) => ({
//       name,
//       ...variant,
//     })),
//   });
// }

/// create a function that takes product from result object
export const getProductFromResult = ({
  result: { sync_product, sync_variants },
}) => {
  return {
    ...sync_product,
    variants: sync_variants.map(({ name, ...variant }) => ({
      name,
      ...variant,
    })),
  };
};
