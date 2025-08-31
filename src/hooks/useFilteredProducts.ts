import { useMemo } from 'react';
import { Product } from 'types/products';

export type Filters = {
  search: string;
  priceRange: [number, number];
  priceRangeRef: { current: { min: number; max: number } };
  minRating: number;
  inStock: boolean;
  selectedCategories: string[];
};

export default function useFilteredProducts(
  allProducts: Product[],
  filters: Filters
) {
  const {
    search,
    priceRange,
    priceRangeRef,
    minRating,
    inStock,
    selectedCategories,
  } = filters;
  return useMemo(() => {
    if (
      !search &&
      priceRange[0] === priceRangeRef.current.min &&
      priceRange[1] === priceRangeRef.current.max &&
      !minRating &&
      !inStock &&
      !selectedCategories.length
    ) {
      return allProducts;
    }

    return allProducts.filter((product) => {
      if (search && !product.nameLowerCase.includes(search)) {
        return false;
      }

      if (
        priceRange[0] !== priceRangeRef.current.min ||
        priceRange[1] !== priceRangeRef.current.max
      ) {
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
          return false;
        }
      }

      if (minRating && product.rating <= minRating) {
        return false;
      }

      if (inStock && !product.inStock) {
        return false;
      }

      if (
        selectedCategories.length &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      return true;
    });
  }, [allProducts, search, priceRange, minRating, inStock, selectedCategories]);
}
