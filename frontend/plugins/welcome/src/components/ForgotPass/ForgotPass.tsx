import React, { FC, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2'; // alert
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
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

const Register: FC<{}> = () => {
  const classes = useStyles();
  const EmailhandleChange = (event: any) => {
    setEmail(event.target.value as string);
  };

  const PasswordhandleChange = (event: any) => {
    setPassword(event.target.value as string);
  };
  const TelhandleChange = (event: any) => {
    setTel(event.target.value as string);
  };
  const [email, setEmail] = React.useState(String);
  const [tel, setTel] = React.useState(String);
  const [userid, setUserid] = React.useState(Number);
  const [password, setPassword] = React.useState(String);

  var forgot = false;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  function forgetpass() {
    const user ={
      email : email,
      tel : tel,
    }
    console.log(email, tel);
    const apiUrl = 'http://localhost:8080/api/v1/users'+"/:"+{email}+"=?"+{tel};
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === true) {
          Toast.fire({
            icon: 'success',
            title: 'ดำเนินการเปลี่ยนพาสเวิดได้',
          });
          forgot = true;
          setUserid(data.data);
        } else {
          Toast.fire({
            icon: 'error',
            title: 'อีเมลล์หรือเบอร์โทรศัพท์ไม่ถูกต้อง',
          });
        }
      });
  }
  function changepassword() {
    
    const user ={
      id: userid,
      password : password,
    }
    console.log(userid, password);
    const apiUrl = 'http://localhost:8080/api/v1/users'+"/:"+{userid};
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === true) {
          Toast.fire({
            icon: 'success',
            title: 'ดำเนินการเปลี่ยนพาสเวิดได้',
          });
        } else {
          Toast.fire({
            icon: 'error',
            title: 'อีเมลล์หรือเบอร์โทรศัพท์ไม่ถูกต้อง',
          });
        }
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={classes.form}>
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
            onChange={EmailhandleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="tel"
            label="Phone number"
            type="text"
            id="tel"
            value={tel}
            onChange={TelhandleChange}
          />
          {!forgot && (
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={forgetpass}
            >
              Change My Password
            </Button>
          )}
          {forgot && (
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={changepassword}
            >
              Submit
            </Button>
          )}
          <Grid container>
            <Grid item>
              <Link href="/signin" variant="body2">
                {'Sign In'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
