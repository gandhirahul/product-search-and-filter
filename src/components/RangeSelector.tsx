import { useEffect, useState } from 'react';
import { useDebounce } from 'hooks/useDebounce';
import { Box, TextField, Typography } from '@mui/material';

export type RangeSelectorProps = {
  values: [number, number];
  defaultValues: { min: number; max: number };
  setPriceRange: (values: [number, number]) => void;
};

export default function RangeSelector({
  values,
  defaultValues,
  setPriceRange,
}: RangeSelectorProps) {
  const [minValue, setMinValue] = useState(values[0]);
  const [maxValue, setMaxValue] = useState(values[1]);
  const { min: MIN, max: MAX } = defaultValues;

  const debouncedMinValue = useDebounce(minValue);
  const debouncedMaxValue = useDebounce(maxValue);

  const isMinError = minValue < MIN || minValue > MAX || minValue > maxValue;
  const isMaxError = maxValue < MIN || maxValue > MAX || maxValue < minValue;

  useEffect(() => {
    setPriceRange([debouncedMinValue, debouncedMaxValue]);
  }, [debouncedMinValue, debouncedMaxValue]);

  useEffect(() => {
    if (values[0] !== minValue) setMinValue(values[0]);
    if (values[1] !== maxValue) setMaxValue(values[1]);
  }, [values]);

  return (
    <Box>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
        align="left"
      >
        Price Range
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField
          type="number"
          inputProps={{
            min: MIN,
            max: MAX,
          }}
          size="small"
          error={isMinError}
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
          label="Min"
          sx={{ width: 100, background: '#fff' }}
        />
        <Typography>-</Typography>
        <TextField
          type="number"
          inputProps={{
            min: MIN,
            max: MAX,
          }}
          size="small"
          value={maxValue}
          error={isMaxError}
          onChange={(e) => setMaxValue(Number(e.target.value))}
          label="Max"
          sx={{ width: 100, background: '#fff' }}
        />
      </Box>
    </Box>
  );
}
