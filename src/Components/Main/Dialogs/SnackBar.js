import React from "react";
import { Snackbar } from "material-ui";

class SnackBar extends React.Component {
  render() {
    const { mesaj, open, handleClose } = this.props;
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{mesaj}</span>}
      />
    );
  }
}

export default SnackBar;
