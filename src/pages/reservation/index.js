import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";

export const Reservation = () => {
  return (
    <Grid
      style={{
        padding: "10px",
      }}
    >
        <Grid container gap={[5]}>
          <Grid>
            <TextField label={"Primeiro Nome"} id="first-name" helperText=" " />
          </Grid>
          <Grid>
            <TextField label={"Sobrenome"} id="last-name" helperText=" " />
          </Grid>
        </Grid>

        <Grid container gap={[5]}>
        <Grid>
          <TextField label={"E-mail"} id="email-address" helperText=" " />
        </Grid>
        <Grid>
          <TextField label={"Endereço"} id="address" helperText=" " />
        </Grid>
        </Grid>

        <Grid container gap={[5]}>
        <Grid >
          <TextField label={"CEP"} id="post-code" helperText=" " inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}/>
        </Grid>
        <Grid>
          <TextField label={"Cidade"} id="country" helperText=" " />
        </Grid>
        </Grid>

        <Grid>
          <TextField label={"Numero do Celular"} id="mobile-phone" helperText=" " inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}/>
        </Grid>

      <Button variant="contained">Ir para o Pagamento</Button>
    </Grid>
  );
};
