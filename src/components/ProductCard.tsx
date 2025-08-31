import React from 'react';
import SingleProductCard from 'components/SingleProductCard';
import { Product } from 'types/products';
import { Grid } from '@mui/material';

export type ProductCardProps = {
  products: Product[];
};

export function ProductCard({ products }: ProductCardProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <SingleProductCard product={product} key={product.id} />
      ))}
    </Grid>
  );
}

export default React.memo(ProductCard);
