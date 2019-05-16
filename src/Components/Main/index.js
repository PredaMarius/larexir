import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";
const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    marginBootom: 10,
    height: 600,
    overflow: "auto"
  }
};

const dataFormat = data => {
  if (data) {
    const [shortDate, timpul] = [...data.split("T")];
    const [year, month, day] = [...shortDate.split("-")];
    return day.concat(".", month, ".", year);
  }
};

export default ({
  comenzi,
  categorie,
  onSelect,
  dataFormat,
  comanda: {
    id,
    clientClient,
    valoareCatalog,
    discount,
    cursValutar,
    valoareComanda,
    valoareClientFinal,
    observatii,
    adresaLivrare,
    idFirma,
    dataComanda,
    tipProdus
  }
}) => (
  <Grid container sm={12}>
    {/* --------------------------------------------LeftPane */}
    <Grid item sm={3}>
      <Paper style={styles.Paper}>
        {comenzi.map(([grup, comenzi]) =>
          !categorie || categorie === grup ? (
            <Fragment key={grup}>
              <Typography
                variant="subheading"
                style={{ textTransform: "capitalize" }}
              >
                {grup}
              </Typography>
              <List component="ul">
                {comenzi.map(comanda => (
                  <ListItem
                    key={comanda.id}
                    button
                    onClick={() => onSelect(comanda.id)}
                  >
                    <ListItemText
                      primary={
                        comanda.id +
                        "/" +
                        dataFormat(comanda.dataComanda) +
                        " - " +
                        comanda.clientClient
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    {/* --------------------------------------------End */}
    {/* --------------------------------------------RighttPane */}
    <Grid item sm={8}>
      <Paper style={styles.Paper}>
        <Typography variant="subheading">
          Numar comanda :<strong>{id}</strong>
        </Typography>
        <Typography variant="subheading">
          Data comanda:<strong>{dataFormat(dataComanda)} </strong>
        </Typography>
        <Typography variant="subheading">
          Client: <strong>{clientClient}</strong>
        </Typography>
        <Typography variant="subheading">
          Observatii: <strong>{observatii}</strong>
        </Typography>
        <Typography variant="subheading">
          Adresa livrare: <strong>{adresaLivrare}</strong>
        </Typography>

        <Typography variant="subheading">
          Alte informatii:{" "}
          <strong>
            {"Discount:" +
              discount +
              "%" +
              " ; " +
              "Curs valutar:" +
              cursValutar}
          </strong>
        </Typography>

        <div>Continut bon comanda</div>

        <div>
          <Typography
            variant="subheading"
            style={{ display: "inline", marginRight: "20px" }}
          >
            Valoare catalog: <strong>{valoareCatalog}</strong>
          </Typography>
          <Typography
            variant="subheading"
            style={{ display: "inline", marginRight: "20px" }}
          >
            Valoare comanda: <strong>{valoareComanda}</strong>
          </Typography>
          <Typography
            variant="subheading"
            style={{ display: "inline", marginRight: "20px" }}
          >
            Valoare client final: <strong>{valoareClientFinal}</strong>
          </Typography>
        </div>
      </Paper>
    </Grid>
  </Grid>
);
