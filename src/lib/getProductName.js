export const getProductName = (variantName) => {
  //put , in first index of array means to not include the first arg of the array
  const [, name] = variantName.split(" - ");
  //   const splitName = variantName.split(" - ");
  //   const name = splitName[1];

  return name ? name : "One style";
};
