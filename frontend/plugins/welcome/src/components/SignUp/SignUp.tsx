import React, { FC, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2'; // alert
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { DefaultApi } from '../../services/apis'; // Api Gennerate From Command
import { EntUser } from '../../services/models/EntUser'; // import interface User

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
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
  const http = new DefaultApi();
  const classes = useStyles();
  const [fname, setFname] = React.useState(String);
  const [sname, setSname] = React.useState(String);
  const [email, setEmail] = React.useState(String);
  const [password, setPassword] = React.useState(String);
  const [tel, setTel] = React.useState(String);
  const [birthdate, setBirthdate] = React.useState(String);

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

  const EmailhandleChange = (event: any) => {
    setEmail(event.target.value as string);
  };

  const PasswordhandleChange = (event: any) => {
    setPassword(event.target.value as string);
  };
  const FnamehandleChange = (event: any) => {
    setFname(event.target.value as string);
  };
  const SnamehandleChange = (event: any) => {
    setSname(event.target.value as string);
  };
  const TelhandleChange = (event: any) => {
    setTel(event.target.value as string);
  };
  const BirthdatehandleChange = (event: any) => {
    setBirthdate(event.target.value as string);
  };
  // function validate
  // function validate() {
  //   // if (tel.length != 10) {
  //   //   setTel('');
  //   //   Toast.fire({
  //   //     icon: 'error',
  //   //     title: 'Telephone number is incorrect!',
  //   //   });
  //   // }

  //   if (typeof tel !== 'undefined') {
  //     var pattern = new RegExp(/^[0-9\b]+$/);
  //     if (!pattern.test(tel)) {
  //       Toast.fire({
  //         icon: 'error',
  //         title: 'Please enter only number.',
  //       });
  //     } else if (tel.length != 10) {
  //       Toast.fire({
  //         icon: 'error',
  //         title: 'Please enter valid phone number.',
  //       });
  //     }
  //   }
  // }
  // function user's register
  function register() {
    const user = {
      fname: fname,
      sname: sname,
      email: email,
      password: password,
      tel: tel,
      birthdate:birthdate + "T00:00:00Z",
    };

    console.log(user);
    // validate();

    const apiUrl = 'http://localhost:8080/api/v1/users';
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
            title: 'บันทึกข้อมูลสำเร็จ',
          });
        } else {
          Toast.fire({
            icon: 'error',
            title: 'บันทึกข้อมูลไม่สำเร็จ',
          });
        }
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
          <TextField
            error
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
            error
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
            onChange={PasswordhandleChange}
          />
          <TextField
            error
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Firstname"
            label="Firstname"
            type="text"
            id="fname"
            value={fname}
            onChange={FnamehandleChange}
          />
          <TextField
            error
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Surname"
            label="Surname"
            type="text"
            id="sname"
            value={sname}
            onChange={SnamehandleChange}
          />
          <TextField
            error
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Telephone"
            label="Telephone Number"
            type="text"
            id="tel"
            value={tel}
            onChange={TelhandleChange}
          />
          <TextField
            label="Birthday"
            name="birthdate"
            type="date"
            value={birthdate}
            onChange={BirthdatehandleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signin" variant="body2">
                {'Already have an account? Sign In!'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
