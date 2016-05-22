import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => {
  return (
    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    titleStyle={{textAlign: 'center'}}
    />
  )
}

export default Header;
