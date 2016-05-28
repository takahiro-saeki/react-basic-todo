import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//drawer
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
const mui = getMuiTheme({});

export default class Hoge extends Component {
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
      <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
      <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>
      <div>ページ1</div>
      </section>
      </MuiThemeProvider>
    )
  }
}
