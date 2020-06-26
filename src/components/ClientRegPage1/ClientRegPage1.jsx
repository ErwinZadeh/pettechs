import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  inputs: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    flexGrow: 1,
    marginRight: 10,
  },
  city: {
    width: "50%",
    marginRight: 10,
  },
  btn: {
    marginTop: 20,
    marginBottom: 40,
    height: 45,
    widith: 180,
    borderRadius: 12,
  },
  title: {
    marginTop: 50,
  },
  botBtn: {
    margin: "60px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
  em_phone: {
    width: "40%",
  },
  em_email: {
    width: "58%"
  },
  labels: {
    textAlign: "left",
    marginTop: 20,
    marginBottom: -5
  },
  section: {
    marginTop: 50,
    marginBottom: 10
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 40
  }
};

class ClientRegPage1 extends Component {
  state = {
    ...this.props.clientInfo,
  };

//autofill form
  autoFillForm = () => {
        this.setState({
            home_address_house: "8901 Portland Ave",
            apt_suite: "",
            city: "Bloomington",
            state: "MN",
            zip_code: "55420",
            about_client: "Loves Dogs and cats",
            about_home: "Single family home",
            contact_name_1: "Sam",
            contact_phone_1: "9999999",
            contact_email_1: "sam@in",
            vet_clinic: "Pet clinic",
            clinic_address: "60 E Broadway",
            clinic_phone: "889898",
            transport: false,
        })
    }

  handleChange = (event, property) => {
    console.log("in handleChange", event.target.value, property);
    if (event.target.value === "true" || event.target.value === "false") {
      this.setState({
        [property]: event.target.value === "true",
      });
    } else {
      this.setState({
        [property]: event.target.value,
      });
    }
  };

  handleUploadPhoto = () => {
    alert("Photo set up needs to be set up");
  };

  handleNext = () => {
    this.props.dispatch({
      type: "SET_CLIENT_DATA",
      payload: { ...this.state },
    });
    this.props.onNext();
  };

  // handleBack = () => {
  //   this.props.history.push("/register");
  // };
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="sm">
        <Typography variant="h4" className={classes.title}>
          Hi NAME! Let's set up your profile
          <Button onClick={this.autoFillForm}></Button>
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          This information will be displayed on your profile
        </Typography>
        <img src="/images/house-icon.png" alt="House" height="70" />
        <div className={classes.inputs}>
          <TextField
            label={"Home Address"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.home_address_house}
            onChange={(event) => this.handleChange(event, "home_address_house")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            label={"Apartment or Suite #"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.apt_suite}
            onChange={(event) => this.handleChange(event, "apt_suite")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            label={"City"}
            variant="outlined"
            value={this.state.city}
            color="secondary"
            onChange={(event) => this.handleChange(event, "city")}
            className={classes.city}
          />
          <TextField
            label={"State"}
            variant="outlined"
            value={this.state.state}
            color="secondary"
            onChange={(event) => this.handleChange(event, "state")}
            className={classes.flex}
          />
          <TextField
            label={"Zipcode"}
            variant="outlined"
            color="secondary"
            value={this.state.zip_code}
            onChange={(event) => this.handleChange(event, "zip_code")}
          />
        </div>
        <div>
          <Typography variant="h6" className={classes.section}>
            You look purr-fect! Let's add a photo for your profile!
          </Typography>
          <Button
            className={classes.btn}
            onClick={this.handleUploadPhoto}
            variant="contained"
            color="primary"
          >
            Select Photo to Upload
          </Button>
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.labels}>
            Help providers get to you know you and a bit about your animals that
            will be displayed on your profile - write a quick bio and whatever
            else you would like to add!
          </Typography>
          <TextField
            value={this.state.about_client}
            variant="outlined"
            className={classes.inputs}
            fullWidth
            color="secondary"
            multiline
            rows={5}
            onChange={(event) => this.handleChange(event, "about_client")}
          />
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.labels}>
            Describe a bit about your home environment and space for providers
            to get a sense of where they might provide services
          </Typography>
          <TextField
            value={this.state.about_home}
            variant="outlined"
            className={classes.inputs}
            fullWidth
            color="secondary"
            multiline
            rows={5}
            onChange={(event) => this.handleChange(event, "about_home")}
          />
        </div>
        <img
          src="/images/phone-icon.png"
          alt="Phone"
          height="70"
          className={classes.section}
        />
        <Typography variant="h6">
          Please enter emergency contact information
        </Typography>
        <Typography variant="subtitle1" className={classes.labels}>
          This person would be notified as ta person of contact for any
          emergencies or critical needs and would be contacted if you aren't
          able to be reached by the service provider.
        </Typography>
        <div className={classes.inputs}>
          <TextField
            fullWidth
            label={"Emergency Contact Name"}
            color="secondary"
            variant="outlined"
            value={this.state.contact_name_1}
            onChange={(event) => this.handleChange(event, "contact_name_1")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            label={"Emergency Contact Phone"}
            variant="outlined"
            value={this.state.contact_phone_1}
            color="secondary"
            onChange={(event) => this.handleChange(event, "contact_phone_1")}
            className={classes.em_phone}
          />
          <TextField
            label={"Emergency Contact Email"}
            variant="outlined"
            color="secondary"
            value={this.state.contact_email_1}
            onChange={(event) => this.handleChange(event, "contact_email_1")}
            className={classes.em_email}
          />
        </div>
        <img
          src="/images/pet-clinic-icon.png"
          alt="Phone"
          height="70"
          className={classes.section}
        />
        <Typography variant="h6">
          Please enter your preferred vet clinic information
        </Typography>
        <div className={classes.inputs}>
          <TextField
            label={"Vet Clinic Name"}
            variant="outlined"
            value={this.state.vet_clinic}
            color="secondary"
            onChange={(event) => this.handleChange(event, "vet_clinic")}
            fullWidth
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            label={"Vet Clinic Phone"}
            variant="outlined"
            value={this.state.clinic_phone}
            color="secondary"
            onChange={(event) => this.handleChange(event, "clinic_phone")}
            className={classes.em_phone}
          />
          <TextField
            label={"Vet Clinic Address (street & city)"}
            variant="outlined"
            color="secondary"
            value={this.state.clinic_address}
            onChange={(event) => this.handleChange(event, "clinic_address")}
            className={classes.em_email}
          />
        </div>
        <Typography variant="subtitle1" className={classes.labels}>
          Are you Ok with a Vet Tech transporting your animal to the Vet in an
          emergency?
        </Typography>
        <div className={(classes.input, classes.labels)}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="transport"
              name="transport"
              value={String(this.state.transport)}
              onChange={(event) => this.handleChange(event, "transport")}
              row
            >
              <FormControlLabel value="false" control={<Radio />} label="No" />
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </div>
        {/* <Button
          color="primary"
          variant="contained"
          className={classes.botBtn}
          onClick={this.handleBack}
        >
          Back
        </Button> */}
        <Button
          color="primary"
          variant="contained"
          className={classes.botBtn}
          onClick={this.handleNext}
        >
          Save and Continue
        </Button>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  clientInfo: {
    home_address_house: "",
    apt_suite: "",
    city: "",
    state: "",
    zip_code: "",
    about_client: "",
    about_home: "",
    contact_name_1: "",
    contact_phone_1: "",
    contact_email_1: "",
    vet_clinic: "",
    clinic_address: "",
    clinic_phone: "",
    transport: false,
    ...state.clientInfo,
  },
});

export default connect(mapStateToProps)(
  withStyles(styles)(ClientRegPage1));
