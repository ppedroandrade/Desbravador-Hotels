import { Grid, TextField, Button } from "@mui/material";

export const FindHotels = () => {
  return (
    <Grid container lg={24}>
      <Grid>
        <TextField label="Local" />
      </Grid>
      <Grid>
        <TextField label="Data de Reserva"/>
      </Grid>
      <Button variant="contained">Buscar Hotel</Button>
    </Grid>
  );
};
