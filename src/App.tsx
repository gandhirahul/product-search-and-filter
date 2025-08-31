import { Container } from '@mui/material';
import ProductCard from 'components/ProductCard';
import LoadingComponent from '@components/LoadingComponent';
import ErrorComponent from 'components/ErrorComponent';
import Filters from 'components/Filters';
import SearchBar from 'components/SearchBar';
import SearchResults from 'components/SearchResults';
import useFilteredProducts from 'hooks/useFilteredProducts';
import useProducts from 'hooks/useProducts';
import './App.css';

export default function App() {
  const {
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
  } = useProducts();

  const filteredProducts = useFilteredProducts(allProducts, {
    search: search.toLowerCase(),
    priceRange,
    priceRangeRef,
    minRating,
    inStock,
    selectedCategories,
  });

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent message={error?.message} />;
  }

  return (
    <Container>
      <SearchBar search={search} setSearch={setSearch} />
      <Filters
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        minRating={minRating}
        setMinRating={setMinRating}
        inStock={inStock}
        setInStock={setInStock}
        priceRange={priceRange}
        priceRangeDefault={priceRangeRef.current}
        setPriceRange={setPriceRange}
      />
      <SearchResults
        count={filteredProducts.length}
        resetFilters={resetFilters}
      />
      <ProductCard products={filteredProducts} />
    </Container>
  );
}
