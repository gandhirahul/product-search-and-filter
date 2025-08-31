import { useEffect, useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useDebounce } from 'hooks/useDebounce';

export type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
};

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  const [value, setValue] = useState(search);
  const debouncedSearch = useDebounce(value);

  useEffect(() => {
    if (search !== value) setValue(search);
  }, [search]);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Box display="grid" gap={2} gridTemplateColumns="1fr max-content">
      <TextField
        fullWidth
        size="small"
        placeholder="Search products..."
        value={value}
        sx={{ bgcolor: '#fff' }}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="outlined"
        startIcon={<ClearIcon />}
        onClick={() => {
          setValue('');
          setSearch('');
        }}
      >
        Clear
      </Button>
    </Box>
  );
}
