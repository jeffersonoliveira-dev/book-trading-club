import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';

class Messages extends Component {
  render() {
    return (
      <IconButton color="inherit">
        <Badge badgeContent={0} color="secondary">
          <Link to="/messages">
            <MailIcon />
          </Link>
        </Badge>
      </IconButton>
    );
  }
}
// trade box here
// classes here

export default Messages;
