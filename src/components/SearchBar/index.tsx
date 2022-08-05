import { Box, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

type Props = {
  searchHandler: (e: any) => void;
};

const SearchBar = ({ searchHandler }: Props) => {
  return (
    <Box>
      <TextField
        sx={{
          "& fieldset": {
            borderRadius: "8px",
          },
        }}
        onChange={searchHandler}
        placeholder="Buscar libro"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
