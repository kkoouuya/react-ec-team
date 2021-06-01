import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { addPaymentInfo } from '../reducks/users/operations';
import { getUserId } from '../reducks/users/selector';

const OrderConfirm = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const sumPrice = useLocation().state.sumPrice;
  const uid = getUserId(selector);
  const history = useHistory();

  const [destinationUserName, setDestinationUserName] = useState('');
  const [destinationZipcode, setDestinationZipcode] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [destinationTel, setDestinationTel] = useState('');
  const [destinationDate, setDestinationDate] = useState('');
  const [creditCardNo, setCreditCardNo] = useState('');
  const [paymentValue, setPaymentValue] = useState('');

  //名前
  const inputOrderUserName = useCallback(
    (e) => {
      setDestinationUserName(e.target.value);
    },
    [setDestinationUserName]
  );

  //郵便番号
  const inputOrderZipcode = useCallback(
    (e) => {
      setDestinationZipcode(e.target.value);
    },
    [setDestinationZipcode]
  );

  //メールアドレス
  const inputOrderAddress = useCallback(
    (e) => {
      setDestinationAddress(e.target.value);
    },
    [setDestinationAddress]
  );

  //電話番号
  const inputOrderTel = useCallback(
    (e) => {
      setDestinationTel(e.target.value);
    },
    [setDestinationTel]
  );

  //配達日
  const inputOrderDate = useCallback(
    (e) => {
      setDestinationDate(e.target.value);
    },
    [setDestinationDate]
  );

  //支払い方法
  const changePaymentValue = useCallback(
    (e) => {
      setPaymentValue(e.target.value);
    },
    [setPaymentValue]
  );

  //カード番号
  const inputCreditCardNo = useCallback(
    (e) => {
      setCreditCardNo(e.target.value);
    },
    [setCreditCardNo]
  );
  // メール
  // const destinationEmailChange = useCallback(
  //   (e) => {
  //     setDestinationEmail(e.target.value);
  //   },
  //   [setDestinationEmail]
  // );

  //配達希望時間
  // const destinationPreTimeChange = useCallback(
  //   (e) => {
  //     setDestinationPreTime(e.target.value);
  //   },
  //   [setDestinationPreTime]
  // );

  // const clear = () => {
  //   console.log('クリアボタンが発動しました');
  //   setDestinationUserName('');
  //   setDestinationZipcode('');
  //   setDestinationAddress('');
  //   setDestinationTel('');
  //   setDestinationDate('');
  //   setCreditCardNo('');
  //   setPaymentValue('');
  // };

  //エラーメッセージ
  // if (!destinationUserName) {
  //   errorMessages.errorName = '名前を入力してください';
  // } else {
  //   errorMessages.errorName = '';
  // }

  // if (!destinationEmail) {
  //   errorMessages.errorEmail = 'メールアドレスを入力してください';
  //   //     //indexOfは文字列から引数が見つからなかったら-1を返す
  // } else if (destinationEmail.indexOf('@') === -1) {
  //   errorMessages.errorEmail = 'メールアドレスの形式が不正です';
  // } else {
  //   errorMessages.errorEmail = '';
  // }

  // if (!destinationZipcode) {
  //   errorMessages.errorZipcode = '郵便番号を入力してください';
  // } else if (!destinationZipcode.match(/^[0-9]{3}-[0-9]{4}$/)) {
  //   errorMessages.errorZipcode = '郵便番号の形式が不正です';
  // } else {
  //   errorMessages.errorZipcode = '';
  // }

  // if (!destinationAddress) {
  //   errorMessages.errorAddress = '住所を入力してください';
  // } else {
  //   errorMessages.errorAddress = '';
  // }

  // if (!destinationTel) {
  //   errorMessages.errorTel = '電話番号を入力してください';
  // } else if (!destinationTel.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)) {
  //   errorMessages.errorTel = '電話番号の形式が不正です';
  // } else {
  //   errorMessages.errorTel = '';
  // }

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
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        お届け先情報入力
      </Typography>
      {/* <Grid>
        <form className={classes.root}>
        <TextField
          error={inputError}
          inputProps={{ pattern: '^[a-zA-Z0-9_]+$' }}
          inputRef={inputRef}
          defaultValue=""
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          helperText={inputRef?.current?.validationMessage}
          onChange={handleChange}
        />
        </form>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="名前"
            fullWidth
            autoComplete="given-name"
            placeholder="Enter your name"
            onChange={inputOrderUserName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            required
            id="mail"
            name="mail"
            label="Mail Address"
            fullWidth
            autoComplete="shipping mail"
            onChange={inputOrderEmail}
          /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="郵便番号"
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
            label="住所"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={inputOrderAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="tel"
            name="tel"
            label="電話番号"
            fullWidth
            autoComplete="shipping phone"
            onChange={inputOrderTel}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            required
            id="tel"
            name="tel"
            label="配達日時"
            fullWidth
            autoComplete="shipping phone"
            onChange={inputOrderTel}
          />
        </Grid> */}
        <Grid item xs={12}>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="配達日"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={inputOrderDate}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={8}>
          <FormLabel component="legend">
            配達時間
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="10時"
                labelPlacement="end"
                control={<Radio color="primary" />}
                label="10時"
              />
              <FormControlLabel
                value="11時"
                control={<Radio color="primary" />}
                label="11時"
              />
              <FormControlLabel
                value="12時"
                control={<Radio color="primary" />}
                label="12時"
              />
              <FormControlLabel
                value="13時"
                control={<Radio color="primary" />}
                label="13時"
              />
              <FormControlLabel
                value="14時"
                control={<Radio color="primary" />}
                label="14時"
              />
              <FormControlLabel
                value="15時"
                control={<Radio color="primary" />}
                label="15時"
              />
              <FormControlLabel
                value="16時"
                control={<Radio color="primary" />}
                label="16時"
              />
              <FormControlLabel
                value="17時"
                control={<Radio color="primary" />}
                label="17時"
              />
              <FormControlLabel
                value="18時"
                control={<Radio color="primary" />}
                label="18時"
              />
            </RadioGroup>
          </FormLabel>
        </Grid>
        {/* <form className={classes.root} noValidate>
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
        </form> */}
        <Grid item xs={12}>
          <div className={classes.root}>
            <FormControl component="fieldset">
              <FormLabel component="legend">支払い方法</FormLabel>
              <RadioGroup
                aria-label="payment"
                name="payment"
                value={paymentValue}
                // onChange={inputOrderPay}
              >
                <FormControlLabel
                  onChange={changePaymentValue}
                  value="1"
                  name="pay"
                  id="0"
                  control={<Radio />}
                  label="代金引換"
                />
                <FormControlLabel
                  onChange={changePaymentValue}
                  value="2"
                  name="pay"
                  id="1"
                  control={<Radio />}
                  label="クレジットカード"
                />
              </RadioGroup>
              {paymentValue === '2' ? (
                <TextField
                  id="standard-basic"
                  label="Credit-card Number"
                  name="cardNumber"
                  value={creditCardNo}
                  onChange={inputCreditCardNo}
                />
              ) : (
                ''
              )}
            </FormControl>
          </div>
        </Grid>
      </Grid>

      <div className={classes.root}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          name="button"
          onClick={() => {
            history.push('/orderfinished');
            dispatch(
              addPaymentInfo(
                uid,
                destinationUserName,
                destinationZipcode,
                destinationAddress,
                destinationTel,
                destinationDate,
                creditCardNo,
                sumPrice,
                Number(paymentValue)
              )
            );
          }}
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
