import { useState, useEffect, useRef, useMemo } from 'react';
import { ProductAPI } from 'external-api/product-api';
import { Product } from 'types/products';

export default function useProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [inStock, setInStock] = useState(false);

  const priceRangeRef = useRef({ min: 0, max: 0 });

  const resetFilters = () => {
    setSearch('');
    setSelectedCategories([]);
    setPriceRange([priceRangeRef.current.min, priceRangeRef.current.max]);
    setMinRating(0);
    setInStock(false);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: Product[] = await ProductAPI.getProducts();
        const products = response.map((product) => ({
          ...product,
          nameLowerCase: product.name.toLowerCase(),
        }));
        setAllProducts(products);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    async function fetchFilters() {
      const [categoriesRes, rangeRes] = await Promise.allSettled([
        ProductAPI.getCategories(),
        ProductAPI.getPriceRange(),
      ]);

      if (categoriesRes.status === 'fulfilled') {
        setCategories(categoriesRes.value);
      }
      if (rangeRes.status === 'fulfilled') {
        const { min, max } = rangeRes.value;
        setPriceRange([min, max]);
        priceRangeRef.current = { min, max };
      }
    }

    fetchProducts();
    fetchFilters();
  }, []);

  return {
    allProducts,
    categories,
    priceRange,
    priceRangeRef,
    loading,
    error,

    search,
    setSearch,
    selectedCategories,
    setSelectedCategories,
    minRating,
    setMinRating,
    inStock,
    setInStock,
    setPriceRange,
    resetFilters,
  };
}
