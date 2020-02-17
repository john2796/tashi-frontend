import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import MaterialUiTable from './MaterialUiTable';
import { getStudent } from '../store/actions/studentAction';
import BackropLoader from './BackdropLoader';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo.png';
import SubjectContainer from './SubjectContainer';
import NavbarGrid from './NavbarGrid';
import apple from '../assets/appleDownload.png';
import googlePlay from '../assets/google-play-badge.png';
const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: -1
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    background: '#f4f6f8',
    height: '100vh',
    paddingTop: '10rem'
  },
  toolbar: theme.mixins.toolbar,
  noContent: {
    textAlign: 'center',
    color: '#9E9E9E'
  },
  listItem: {
    height: '40px'
  },
  marginRight: {
    marginRight: '10px'
  },
  mlAuto: {
    marginLeft: 'auto',
    color: 'gray',
    '&:hover': {
      color: 'black'
    }
  },
  cross: {
    color: 'red',
    '&:hover': {
      color: 'white',
      background: 'red',
      borderRadius: '50%'
    }
  },
  addBtn: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: 'red'
    }
  },
  horizonIcon: {
    color: 'gray'
  },
  title: {
    color: 'black',
    cursor: 'pointer',
    marginRight: 'auto'
  },
  logo: {
    width: '6rem'
  },
  drawerContent: {
    height: '100%',
    display: 'flex',
    justifyContent: ' center',
    flexDirection: 'column',
    alignSelf: 'flex-end'
  },
  apple: {
    maxWidth: '75%',
    padding: ' 1rem',
    marginTop: ' auto',
    marginBottom: '-59px'
  },
  googleplay: { maxWidth: '94%' }
}));

export default function DashBoard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.studentReducer);
  useEffect(() => {
    dispatch(getStudent());
  }, []);
  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#fff' }}>
        <Toolbar>
          <img alt="logo" className={classes.logo} src={logo} />
          <Typography
            className={classes.title}
            noWrap
            onClick={() => props.history.push('/dashboard')}
            variant="h6">
            Tok Health University
          </Typography>
          <NavbarGrid />
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        className={classes.drawer}
        variant="permanent">
        {/* <div className={classes.toolbar} /> */}
        <div className={classes.drawerContent}>
          <img alt="apple dowload" className={classes.apple} src={apple} />
          <img
            alt="google play"
            className={classes.googleplay}
            src={googlePlay}
          />
        </div>
      </Drawer>

      <main className={classes.content}>
        <Paper elevation={3}>
          <Route
            exact
            path="/dashboard"
            render={props => <MaterialUiTable />}
          />
          <Route component={SubjectContainer} path="/dashboard/subject/:id" />
        </Paper>
      </main>
      <BackropLoader loading={isLoading} />
    </div>
  );
}
