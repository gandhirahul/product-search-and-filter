import {
  Box,
  Select,
  MenuItem,
  FormControl,
  Switch,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material';
import RangeSelector from './RangeSelector';

export type FiltersProps = {
  priceRange: [number, number];
  setPriceRange: (ranges: [number, number]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  inStock: boolean;
  setInStock: (inStock: boolean) => void;
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceRangeDefault: { min: number; max: number };
};

export default function Filters({
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  inStock,
  setInStock,
  categories,
  priceRangeDefault,
  selectedCategories,
  setSelectedCategories,
}: FiltersProps) {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        alignItems: 'end',
        background: '#fff',
        p: 2,
      }}
    >
      <RangeSelector
        values={priceRange}
        setPriceRange={setPriceRange}
        defaultValues={priceRangeDefault}
      />
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
          align="left"
        >
          Rating
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={minRating}
            onChange={(event) => setMinRating(Number(event.target.value))}
            sx={{ background: '#fff' }}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={4}>4 & up</MenuItem>
            <MenuItem value={3}>3 & up</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
          align="left"
        >
          Availability
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={inStock}
              onChange={(event) => setInStock(event.target.checked)}
            />
          }
          label="In Stock Only"
        />
      </Box>

      <Box sx={{ textAlign: 'left' }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
          align="left"
        >
          Category
        </Typography>
        {categories.map((category) => {
          return (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() =>
                    setSelectedCategories((prevState) =>
                      prevState.includes(category)
                        ? prevState.filter((state) => state !== category)
                        : [...prevState, category]
                    )
                  }
                />
              }
              label={category}
            />
          );
        })}
      </Box>
    </Box>
  );
}
``;
