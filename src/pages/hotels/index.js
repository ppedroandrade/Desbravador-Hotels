import { Grid, TextField } from "@mui/material";

export const FindHotels = () => {
  return (
    <Grid container>
      <Grid>
        <TextField label={"Sobrenome"} id="last-name" helperText=" " />
      </Grid>
    </Grid>
  );
};
