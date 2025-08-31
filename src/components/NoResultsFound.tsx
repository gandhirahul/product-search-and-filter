import { Box, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export type NoResultsFoundProps = {
  resetFilters: () => void;
};

export default function NoResultsFound({ resetFilters }: NoResultsFoundProps) {
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
