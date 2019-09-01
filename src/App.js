// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// class App extends React.Component {

  

//     constructor(props) {
//       super(props)

//       this.state = {
//         anime: [],
//         store: [],
//       }
//     }

//    componentDidMount() {
//       axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
//       .then(response => {
//         const store = response.data.top;
//         console.log(store);
//         this.setState({ store });
//       })
      
//     }

//     render() {
//       return (
//       <div>
//           {this.state.store.map(list => <div><a href={list.url}>{list.title}</a> <br/> <img src={list.image_url} alt={list.title}/></div> )}
         
//       </div>
//       )
//     }
// }

// export default App;

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import CategoryIcon from '@material-ui/icons/Category'
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AnimeList from './Sidebar';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Advanture from './Category/Advanture';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <h3 style={{textAlign: 'center'}}>Genres</h3>
      <List>
        <Link to='/'>Home</Link>
        {[
          {text:'Advanture', link:'/Advanture'}, 
          {text:'Action', link:'/Action'}, 
          {text:'Comedy', link:'/Comedy'}, 
          {text:'Drama', link:'/Drama'}
        ].map((genre, index) => (
          <ListItem button key={genre.text}>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            {/* <ListItemText primary={genre.text} /> */}
            <ListItemText><Link to={genre.link}>{genre.text}</Link></ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Anime-lat
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Route path='/' exact component={AnimeList} />
          <Route path='/Advanture' exact component={Advanture} />
      </main>
    </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};

export default App;