import React,{ useCallback, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router'; 
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducks/users/operations';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [email,  setEmail] = useState(''),
        [password, setPassword] = useState('')

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
  },[setEmail]);

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value)
  },[setPassword]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const LinkToHome = path => history.push(path);
  const selector = useSelector(state => state)
  console.log(selector)

  // return async (dispatch) => {
  //       // Validations
  //       if(!isValidRequiredInput(email, password)) {
  //           alert('必須項目が未入力です。');
  //           return false
  //       }

        // if(!isValidEmailFormat(email)) {
        //     alert('メールアドレスの形式が不正です。もう1度お試しください。')
        //     return false
        // }
        // if (password !== ) {
        //     alert('パスワードが一致しません。もう1度お試しください。')
        //     return false
        // }
        // if (password.length < 6) {
        //     alert('パスワードは6文字以上で入力してください。')
        //     return false
        // }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={inputEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={inputPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => 
                {LinkToHome('/')}}
            >
              ログイン
            </Button>
          </form>
        </div>
      </Container>
    );
  // }
}

export default Login;