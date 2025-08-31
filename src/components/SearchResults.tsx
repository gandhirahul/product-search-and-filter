import { Box, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type NoResultsFoundProps = {
  resetFilters: () => void;
};
type SearchResultsProps = NoResultsFoundProps & {
  count: number;
};

function NoResultsFound({ resetFilters }: NoResultsFoundProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 12,
        px: 4,
        textAlign: 'center',
        border: '1px solid',
        borderColor: 'info.main',
        borderRadius: 2,
        backgroundColor: '#fff',
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        fontWeight="bold"
        gutterBottom
      >
        No products found
      </Typography>
      <Button
        variant="contained"
        startIcon={<ClearIcon />}
        onClick={resetFilters}
      >
        Remove filters
      </Button>
    </Box>
  );
}

export default function SearchResults({
  count,
  resetFilters,
}: SearchResultsProps) {
  let message =
    count > 1 ? `${count} products found` : `${count} product found`;
  if (count === 0) {
    return <NoResultsFound resetFilters={resetFilters} />;
  }
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
