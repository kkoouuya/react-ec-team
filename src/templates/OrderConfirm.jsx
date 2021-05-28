import React,{ useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { orderError } from '../reducks/validation/operation';
import { useDispatch } from "react-redux";

const OrderConfirm = () => {

const dispatch = useDispatch();

const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [zipcode, setUserzipcode] = useState("")
const [address, setUseraddress] = useState("")
const [tel, setUsertel] = useState("")

const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
},[setEmail]);

const inputUsername = useCallback((e) => {
    setUsername(e.target.value)
},[setUsername]);

const inputZipcode = useCallback((e) => {
    setUserzipcode(e.target.value)
},[setUserzipcode]);

const inputAddress = useCallback((e) => {
    setUseraddress(e.target.value)
},[setUseraddress]);

const inputTel = useCallback((e) => {
    setUsertel(e.target.value)
},[setUsertel]);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="orderName"
            name="orderName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            placeholder="Enter your name"
            />
        </Grid>
          <Grid item xs={12}>
            <TextField
            required
            id="address1"
            name="address1"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mail"
            name="mail"
            label="Mail Address"
            fullWidth
            autoComplete="shipping mail"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel"
            name="tel"
            label="Phone Number"
            fullWidth
            autoComplete="shipping phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          id="datetime-local"
          label="delivery day"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          />
        </Grid>
        </Grid>
        <Button
            type="button"
            variant="contained"
            color="primary"
            name="button"
            // onClick={() => }
          >
            送信
          </Button>
    </React.Fragment>
  );
};

export default OrderConfirm;
