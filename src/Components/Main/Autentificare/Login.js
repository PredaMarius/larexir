import React from "react";
import SnackBar from "../Dialogs/SnackBar.js";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "material-ui";
import { Face, Fingerprint } from "material-ui-icons";
import Strapi from "strapi-sdk-javascript/build/main";

const apiUrl = process.env.API_URL || "http://5.189.183.44:1337";
const strapi = new Strapi(apiUrl);

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    open: false,
    mesaj: "",
    loading: false
  };

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    const { username, password } = this.state;
    if (!this.isFormEmpty(this.state)) {
      console.log("submitted");
      // Sign in user
      try {
        // set loading to true
        this.setState({ loading: true });
        // make request to sign in user with strapi
        const response = await strapi.login(username, password);
        // set loading to false
        this.setState({ loading: false });
        // put token (to manage user session) in local storage
        console.log(response);
        // redirect user to home page
        this.redirectUser("/");
      } catch (err) {
        // set loading to false
        this.setState({ loading: false });
        // show error message cu SnackBar
        this.setState({ open: true, mesaj: err.message });
      }
    } else {
      this.setState({
        open: true,
        mesaj: "Nu ati completat toate campurile necesare!"
      });
    }
  };

  redirectUser = path => this.props.history.push(path);

  handleClose = () => {
    this.setState({ open: false, mesaj: "" });
  };

  isFormEmpty = ({ username, password }) => {
    return !username || !password;
  };

  render() {
    const { mesaj, open } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <SnackBar mesaj={mesaj} open={open} handleClose={this.handleClose} />
        <div className={classes.margin}>
          <form>
            <Grid container justify="center" style={{ width: "250px" }}>
              <h2 style={{ marginLeft: "50px", color: "grey" }}>
                Autentificare
              </h2>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="username"
                  name="username"
                  label="Utilizator(e-mail)"
                  type="email"
                  // autoFocus
                  required
                  onChange={this.handleChange}
                  style={{ width: "250px" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Fingerprint />
              </Grid>
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                  id="password"
                  name="password"
                  label="Parola"
                  type="password"
                  required
                  onChange={this.handleChange}
                  style={{ width: "250px" }}
                />
              </Grid>
            </Grid>
            <Grid container alignItems="flex-start" justify="space-between">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ width: "300px" }}>
              <Button
                variant="raised"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </Grid>
          </form>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);
