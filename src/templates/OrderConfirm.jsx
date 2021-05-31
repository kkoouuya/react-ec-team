import React,{ useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// // import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from "react-redux";
import { OrderError } from '../reducks/validation/operation';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'

const OrderConfirm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '30ch',
        },
      },
  }));

  const classes = useStyles();
  const pattern = /^[0-9]{3}-[0-9]{4}$/;
  const pattern2 = /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

  //初期値
  const [destinationUserName, setDestinationUserName] = useState("")
  const [destinationEmail, setDestinationEmail] = useState("")
  const [destinationZipcode, setDestinationZipcode] = useState("")
  const [destinationAddress, setDestinationAddress] = useState("")
  const [destinationTel, setDestinationTel] = useState("")

  //配達日時
  const [destinationYear, setDestinationYear] = useState('');
  const [destinationMonth, setDestinationMonth] = useState('');
  const [destinationDay, setDestinationDay] = useState('');
  const [destinationHour, setDestinationHour] = useState('');

  const today = new Date();
  const hour = today.getHours();
  const numOrderDay = Number(destinationDay);
  const numOrderTime = Number(destinationHour);

  //firebaseへ格納用
  // const destinationTime = destinationYear + destinationMonth + destinationDay + destinationHour;
 

  //支払い方法ラジオボタン
  const [paymentMethods, setPaymentMethods] = useState('');
  
  //支払い方法
  const [cash , setCash] = useState('')
  const [creditCardNo, setCreditCardNo] = useState('')

  //入力値
  const inputOrderUserName = useCallback((e) => {
    setDestinationUserName(e.target.value)
  },[setDestinationUserName]);

  const inputOrderEmail = useCallback((e) => {
    setDestinationEmail(e.target.value)
  },[setDestinationEmail]);

  const inputOrderZipcode = useCallback((e) => {
    setDestinationZipcode(e.target.value)
  },[setDestinationZipcode]);

  const inputOrderAddress = useCallback((e) => {
    setDestinationAddress(e.target.value)
  },[setDestinationAddress]);

  const inputOrderTel = useCallback((e) => {
    setDestinationTel(e.target.value)
  },[setDestinationTel]);

  const inputOrderYear = useCallback((e) => {
    setDestinationYear(e.target.value)
  },[setDestinationYear]);

  const inputOrderMonth = useCallback((e) => {
    setDestinationMonth(e.target.value)
  },[setDestinationMonth]);

  const inputOrderDay = useCallback((e) => {
    setDestinationDay(e.target.value)
  },[setDestinationDay]);

  const inputOrderHour = useCallback((e) => {
    setDestinationHour(e.target.value)
  },[setDestinationHour]);

  const inputOrderPay = useCallback((e) => {
    setPaymentMethods(e.target.value)
  },[setPaymentMethods]);

  // const inputCash = useCallback((e) => {
  //   setCash(e.target.value)
  // },[setCash])

  const inputCreditCardNo = useCallback((e) => {
    setCreditCardNo(e.target.value)
  },[setCreditCardNo]);

//配達関連
const DeliveriesYears = [
  { value: '2021', label: '2021'},
  { value: '2022', label: '2022'},
]

const DeliveriesMonths = [
  { value: '1', label: '1'},
  { value: '2', label: '2'},
  { value: '3', label: '3'},
  { value: '4', label: '4'},
  { value: '5', label: '5'},
  { value: '6', label: '6'},
  { value: '7', label: '7'},
  { value: '8', label: '8'},
  { value: '9', label: '9'},
  { value: '10', label:'10'},
  { value: '11', label:'11'},
  { value: '12', label:'12'},
]

const DeliveriesDays = [
  { value: '01', label: '1'},
  { value: '02', label: '2'},
  { value: '3', label: '3'},
  { value: '4', label: '4'},
  { value: '5', label: '5'},
  { value: '6', label: '6'},
  { value: '7', label: '7'},
  { value: '8', label: '8'},
  { value: '9', label: '9'},
  { value: '10', label:'10'},
  { value: '11', label:'11'},
  { value: '12', label:'12'},
  { value: '13', label:'13'},
  { value: '14', label:'14'},
  { value: '15', label:'15'},
  { value: '16', label:'16'},
  { value: '17', label:'17'},
  { value: '18', label:'18'},
  { value: '19', label:'19'},
  { value: '20', label:'20'},
  { value: '21', label:'21'},
  { value: '22', label:'22'},
  { value: '23', label:'23'},
  { value: '24', label:'24'},
  { value: '25', label:'25'},
  { value: '26', label:'26'},
  { value: '27', label:'27'},
  { value: '28', label:'28'},
  { value: '29', label:'29'},
  { value: '30', label:'30'},
  { value: '31', label:'31'},
]

const DeliveriesTimes = [
  { value: '8', label:'8'},
  { value: '9', label:'9'},
  { value: '10', label:'10'},
  { value: '11', label:'11'},
  { value: '12', label:'12'},
  { value: '13', label:'13'},
  { value: '14', label:'14'},
  { value: '15', label:'15'},
  { value: '16', label:'16'},
  { value: '17', label:'17'},
  { value: '18', label:'18'},
]

//データ・画面遷移
  const orderClicked =(
    destinationUserName,
    destinationEmail,
    destinationZipcode,
    destinationAddress,
    destinationTel,
    destinationYear,
    destinationMonth,
    destinationDay,
    destinationHour,
    paymentMethods,
    creditCardNo
    ) => {
      dispatch(OrderError(
        destinationUserName,
        destinationEmail,
        destinationZipcode,
        destinationAddress,
        destinationTel,
        destinationYear,
        destinationMonth,
        destinationDay,
        destinationHour,
        paymentMethods,
        creditCardNo
        ))

        if(destinationUserName === '' ||
          destinationEmail === '' ||
          destinationZipcode  === '' ||
          destinationAddress === '' ||
          destinationTel === '' || 
          destinationYear === '' || 
          destinationMonth === '' || 
          destinationDay  === '' || 
          destinationHour === '' ||
          paymentMethods === '' ||
          creditCardNo === '') 
        {
          console.log('入力完了していません'); 

        } else if((destinationEmail.indexOf('@') === -1) || 
          !pattern.test(destinationZipcode) || 
          !pattern2.test(destinationTel) ||
          (destinationDay === numOrderDay && 
              (numOrderTime - hour <= 3) || 
              (numOrderTime - hour === 0))) {
            console.log('入力完了していません2'); 
        } else {
          history.push('/orderfinished');
        }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        お届け先情報入力
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="Name"
            fullWidth
            autoComplete="given-name"
            placeholder="Enter your name"
            onChange={inputOrderUserName}
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
              onChange={inputOrderEmail}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zipcode"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={inputOrderZipcode}
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={inputOrderAddress}
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
            onChange={inputOrderTel}
          />
        </Grid>

        <form className={classes.root} noValidate>
          <div>
            <TextField
                id="destinationYear"
                select
                label="Delivery Year"
                value={destinationYear}
                onChange={inputOrderYear}
              >
                {DeliveriesYears.map((year) => (
                  <MenuItem key={year.value} value={year.value}>
                    {year.label}
                  </MenuItem>
                ))}
            </TextField>

            <TextField
                id="destinationMonth"
                select
                label="Delivery Month"
                value={destinationMonth}
                onChange={inputOrderMonth}
              >
                {DeliveriesMonths.map((month) => (
                  <MenuItem key={month.value} value={month.value}>
                    {month.label}
                  </MenuItem>
                ))}
            </TextField>      
            <TextField
                id="destinationDay"
                select
                label="Delivery Day"
                value={destinationDay}
                onChange={inputOrderDay}
              >
                {DeliveriesDays.map((day) => (
                  <MenuItem key={day.value} value={day.value}>
                    {day.label}
                  </MenuItem>
                ))}
            </TextField>
            <TextField
                id="destinationHour"
                select
                label="Delivery Time"
                value={destinationHour}
                onChange={inputOrderHour}
              >
                {DeliveriesTimes.map((time) => (
                  <MenuItem key={time.value} value={time.value}>
                  {time.label}
                </MenuItem>
              ))}
          </TextField>
          </div>
        </form>
        </Grid>

        <div className={classes.root}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Payment</FormLabel>
            <RadioGroup aria-label="payment" name="payment" 
              value={paymentMethods} onChange={inputOrderPay}>
              <FormControlLabel value='1' 
                name="pay" id="0" control={<Radio />} 
                label="代金引換" />
              <FormControlLabel value="2" 
                name="pay" id="1" control={<Radio />} 
                label="クレジットカード" />
            </RadioGroup>
            {paymentMethods === '2' ? 
            <TextField 
              id="standard-basic" 
              label="Credit-card Number" 
              name="cardNumber"
              value={creditCardNo}
              onChange={inputCreditCardNo}
              /> 
            : ''}
          </FormControl>
        </div>
        <div className={classes.root}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            name="button"
            onClick={() => 
              orderClicked(destinationUserName,destinationEmail,destinationZipcode,destinationAddress,destinationTel,destinationYear,destinationMonth,destinationDay,destinationHour,paymentMethods,cash,creditCardNo)}
          >
            この内容で注文する
          </Button>
            <Link to="/cartlist">
              <Button variant="outlined">ショッピングカートに戻る</Button>
            </Link>
        </div>
    </React.Fragment>
  );
};

export default OrderConfirm;
