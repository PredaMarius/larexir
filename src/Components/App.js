import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Main from "./Main";
import { produse, comenzi } from "../store.js";
import "../styles.css";

export default class extends Component {
  state = {
    comenzi,
    categorie: "JV",
    comanda: {}
  };

  getComenziByProdus() {
    return Object.entries(
      this.state.comenzi.reduce((comenzi, comanda) => {
        const { tipProdus } = comanda;
        comenzi[tipProdus] = comenzi[tipProdus]
          ? [...comenzi[tipProdus], comanda]
          : [comanda];
        return comenzi;
      }, {})
    );
  }

  handleCategorieSelectata = categorie => {
    this.setState({
      categorie
    });
  };

  handleComandaSelectata = id => {
    this.setState(prevState => ({
      comanda: prevState.comenzi.find(com => com.id === id)
    }));
  };

  dataFormat = data => {
    if (data) {
      const [shortDate, timpul] = [...data.split("T")];
      const [year, month, day] = [...shortDate.split("-")];
      return day.concat(".", month, ".", year);
    }
  };

  render() {
    const comenzi = this.getComenziByProdus(),
      { categorie, comanda } = this.state;
    return (
      <Fragment>
        <Main
          dataFormat={this.dataFormat}
          comanda={comanda}
          comenzi={comenzi}
          categorie={categorie}
          onSelect={this.handleComandaSelectata}
        />
        <Footer
          categorie={categorie}
          produse={produse}
          onSelect={this.handleCategorieSelectata}
        />
      </Fragment>
    );
  }
}
