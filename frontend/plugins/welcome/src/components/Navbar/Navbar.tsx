import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Header } from '@backstage/core';
import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const HeaderCustom = {
  minHeight: '50px',
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      paddingRight: 100,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

export type NavbarProps = {
  title: string;
};

function Navbar({ title }: NavbarProps) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const handleAuth = () => {
    setAuth(true);
  };
  return (
    <Header style={HeaderCustom} title={title}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="ค้นหา"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div>
        {!auth && (
          <Button variant="outlined" color="primary" onClick={handleAuth}>
            Sign In
          </Button>
        )}
        {auth && (
          <IconButton href="/profile">
            <Avatar
              alt="Profile"
              src="https://png.pngitem.com/pimgs/s/339-3390436_transparent-kaneki-png-ken-kaneki-png-png-download.png"
            />
          </IconButton>
        )}
      </div>
    </Header>
  );
}

export default Navbar;
