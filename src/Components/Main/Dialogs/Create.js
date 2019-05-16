import React, { Fragment, Component } from "react";
import { Dialog, Button, TextField } from "material-ui";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import { Add } from "material-ui-icons";

export default class extends Component {
  state = {
    open: false,
    comanda: {
      id: "",
      dataComanda: "",
      observatii: "",
      adresaLivrare: "",
      discount: 0,
      cursValutar: 0,
      valoareCatalog: 0,
      valoareComanda: 0,
      valoareClientFinal: 0,
      stadiu: "NETRIMISA",
      idFirma: "",
      tipProdus: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => event => {
    this.setState({
      comanda: {
        ...this.state.comanda,
        [name]: this.event.target
      }
    });
  };

  dataFormat = data => {
    if (data) {
      const [shortDate, timpul] = [...data.split("T")];
      const [year, month, day] = [...shortDate.split("-")];
      return day.concat(".", month, ".", year);
    }
  };

  render() {
    const { open, comanda } = this.state;

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Adauga comanda noua</DialogTitle>
          <DialogContent>
            <DialogContentText>Va rog completati formularul.</DialogContentText>
            <form>
              <TextField
                label="Numar comanda"
                value={this.state.name}
                onChange={this.handleChange("comanda.id")}
                margin="normal"
              />
              <TextField
                style={{ display: "block" }}
                label="Data comanda"
                value={this.state.name}
                onChange={this.handleChange(comanda.dataComanda)}
                margin="normal"
              />
              <TextField
                style={{ display: "block" }}
                label="Client"
                value={this.state.name}
                onChange={this.handleChange(comanda.clientClient)}
                margin="normal"
              />
              <TextField
                label="Observatii"
                multiline
                rows="3"
                value={this.state.name}
                onChange={this.handleChange(comanda.observatii)}
                margin="normal"
              />
            </form>
          </DialogContent>

          <DialogActions>
            <Button color="primary" variant="raised">
              Abandon
            </Button>
            <Button color="primary" variant="raised">
              Salveaza
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
