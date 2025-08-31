import React from 'react';
import { Product } from 'types/products';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Rating,
  CardMedia,
} from '@mui/material';

const currencyFormatter = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
});

export type SingleProductCardProps = {
  product: Product;
};

const SingleProductCard = React.memo(
  ({
    product: { name, price, category, rating, reviews, inStock, image },
  }: SingleProductCardProps) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ height: '100%' }}>
        {image ? (
          <CardMedia component="img" height="200" image={image} alt={name} />
        ) : null}
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
            mb={1}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {currencyFormatter.format(price)}
            </Typography>
            <Chip
              label={inStock ? 'In Stock' : 'Out of Stock'}
              color={inStock ? 'success' : 'error'}
              size="small"
              variant="outlined"
            />
          </Box>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Rating value={rating} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              ({reviews} reviews)
            </Typography>
          </Box>
          <Chip label={category} size="small" variant="outlined" />
        </CardContent>
      </Card>
    </Grid>
  )
);
export default SingleProductCard;
