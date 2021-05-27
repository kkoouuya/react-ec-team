import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


//   if(!this.loginForm.email){
//     this.errorFind.emailError = "メールアドレスを入力して下さい"
//     // console.log("メール変更")
//   } else if (this.loginForom.email.indexOf('@') == -1){
//     this.errorFind.emailError = "メールアドレスの形式が不正です"
//   } else {
//     this.errorFind.emailError = ""
//   }

//   if(!this.loginForm.postalcode) {
//     this.errorFind.postalcodeError = "郵便番号を入力して下さい"
//   } else if (this.loginForm.postalcode.match(/^[0-9]{3}-[0-9]{4}$/)){
//     // .match正規表現に関するマッチング
//     this.errorFind.postalcodeError = ""

//   } else {
//     this.errorFind.postalcodeError = "郵便番号はXXX-XXXXの形式で入力してください"
//   }

//    if(!this.loginForm.address){
//      this.errorFind.addressError = "住所を変更してください"
//   } else if (this.loginForm.address){
//     this.errorFind.addressError = ""
//   }

//   if(!this.loginForm.tel) {
//     this.errorFind.telError = "電話番号を入力して下さい"
//   } else if (this.loginForm.tel.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/)){
//     this.errorFind.telError = ""
//   } else {
//     this.errorFind.telError = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
//   }

export const OrderName = (orderName) => {
  if(orderName === ''){
    alert ("名前を変更してください");
  }
  return false;
}


const OrderConfirm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={orderName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
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
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OrderConfirm;
