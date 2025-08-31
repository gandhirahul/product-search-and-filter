import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Skeleton,
} from '@mui/material';

export default function LoadingComponent() {
  const productSkeletons = Array.from({ length: 12 });
  const filterSkeletons = Array.from({ length: 5 });

  return (
    <Container sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <Skeleton variant="rectangular" height={40} width="100%" />
      </Box>

      <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {filterSkeletons.map((_, idx) => (
          <Skeleton key={idx} variant="rectangular" width={120} height={40} />
        ))}
      </Box>

      <Grid container spacing={3}>
        {productSkeletons.map((_, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Card>
              <Skeleton variant="rectangular" height={140} />
              <CardContent>
                <Skeleton width="80%" height={20} sx={{ mb: 1 }} />
                <Skeleton width="60%" height={20} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
