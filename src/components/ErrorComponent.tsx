import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type ErrorComponentProps = {
  message: string;
};

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
        px: 4,
        textAlign: 'center',
        border: '1px solid',
        borderColor: 'error.main',
        borderRadius: 2,
        backgroundColor: '#fff',
        gap: 2,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 60, color: 'error.main' }} />
      <Typography variant="h4" color="error.main" fontWeight="bold">
        Something went wrong.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
        {message}
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => window.location.reload()}
      >
        Retry
      </Button>
    </Box>
  );
}
