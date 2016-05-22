import React from 'react';
import AppBar from 'material-ui/AppBar';
import {pink500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import Edit from 'material-ui/svg-icons/image/edit';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router';

import TextField from 'material-ui/TextField';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink500,
  },
});

const style = {
  height: 100,
  width: '23%',
  margin: '1%',
  display: 'inline-block',
};

const styles = {
  container: {
    width: '1024px',
    margin: '0 auto'
  },
  title: {
    width: '100%'
  }
}

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
  handleClose() {
    this.setState({open: false});
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <AppBar
        title="Title"
        titleStyle={{textAlign: 'center'}}
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={<Link to="/template/test"><IconButton><Edit /></IconButton></Link>}
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
      <section style={styles.container}>
      <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
      fullWidth={true}
      />
      <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      fullWidth={true}
      rows={2}
      />
      </section>
      </div>
      </MuiThemeProvider>
    );
  }
}
