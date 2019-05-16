import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

export default ({ produse, categorie, onSelect }) => {
  const index = categorie
    ? produse.findIndex(produse => produse === categorie)
    : 0;

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "JV" : produse[index]);

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {produse.map(produs => (
          <Tab key={produs} label={produs} />
        ))}
      </Tabs>
    </Paper>
  );
};
