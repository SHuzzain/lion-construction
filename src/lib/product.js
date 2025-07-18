import slugify from "slugify";

// Get products by category, type, and limit
export const getProducts = (products, category, type, limit) => {
  const filteredProducts = products.filter((product) => {
    if (category && type) {
      return product.category?.includes(category) && product[type];
    }
    if (category) {
      return product.category?.includes(category);
    }
    if (type) {
      return product[type];
    }
    return true;
  });

  return limit ? filteredProducts.slice(0, limit) : filteredProducts;
};

// Generate product slug
export const productSlug = (title, options = {}) => {
  return slugify(title, {
    lower: options.lower !== false,
    strict: true,
    ...options,
  });
};

// Get discounted price
export const getDiscountPrice = (price, discount) => {
  return discount ? price - (price * discount) / 100 : price;
};

// Get sorted products
export const getSortedProducts = (products, sortType, sortValue) => {
  if (sortType && sortValue) {
    if (sortType === "filterSort") {
      if (sortValue === "default") {
        return products;
      }
      if (sortValue === "priceHighToLow") {
        return products.slice().sort((a, b) => b.price - a.price);
      }
      if (sortValue === "priceLowToHigh") {
        return products.slice().sort((a, b) => a.price - b.price);
      }
    }
    if (sortType === "category") {
      return products.filter((product) =>
        product.category?.includes(sortValue)
      );
    }
    if (sortType === "tag") {
      return products.filter((product) =>
        product.tag?.includes(sortValue)
      );
    }
    if (sortType === "priceRange") {
      return products.filter((product) =>
        product.priceRange?.includes(sortValue)
      );
    }
  }
  return products;
};

// Check cart item stock
export const cartItemStock = (item, color, size) => {
  if (item.variation) {
    const colorVariation = item.variation.find((v) => v.color === color);
    if (colorVariation) {
      const sizeVariation = colorVariation.size.find((s) => s.name === size);
      return sizeVariation ? sizeVariation.stock : 0;
    }
  }
  return item.stock || 0;
};