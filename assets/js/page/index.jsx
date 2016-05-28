import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//drawer
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//react-router
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
const mui = getMuiTheme({});

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
    return (
      <MuiThemeProvider muiTheme={mui}>
      <section>
      <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this.handleToggle}
      />
      <Drawer
      docked={false}
      width={200}
      open={this.state.open}
      onRequestChange={(open) => this.setState({open})}
      >
      <MenuItem onTouchTap={this.handleClose}>
        <Link to="/template/page1">Menu Item</Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
        <Link to="/template/page2">Menu Item 2</Link>
      </MenuItem>
      </Drawer>
      </section>
      </MuiThemeProvider>
    )
  }
}
