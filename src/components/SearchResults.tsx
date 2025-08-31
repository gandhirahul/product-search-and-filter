import { Box, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import NoResultsFound, { NoResultsFoundProps } from 'components/NoResultsFound';

type SearchResultsProps = NoResultsFoundProps & {
  count: number;
};

export default function SearchResults({
  count,
  resetFilters,
}: SearchResultsProps) {
  if (count === 0) {
    return <NoResultsFound resetFilters={resetFilters} />;
  }
  const message = `${count} ${count > 1 ? 'products' : 'prodcut'} found`;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
      }}
    >
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
        {message}
      </Typography>
      <Button
        size="small"
        variant="outlined"
        startIcon={<ClearIcon />}
        onClick={resetFilters}
      >
        Remove filters
      </Button>
    </Box>
  );
}
