import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DesktopIcon from '@material-ui/icons/DesktopMac';
import PhoneIcon from '@material-ui/icons/PhoneIphone';

import RestoreIcon from '@material-ui/icons/Restore';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  root: {
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  primary: {
    fontSize:'14px',
  }
});

const selected ={
  color:'#000',
}

const iconSelected = {
  height:'18px',
  width:'18px',
  marginRight:'0',
  fill:'#000'
}

const icon = {
    height:'18px',
    width:'18px',
    marginRight:'0',
    fill:'#616161'
}

class NestedList extends React.Component {
  state = { openRecent: false, openSaved: false};

  handleClickRecent = () => {
    this.setState({ openRecent: !this.state.openRecent });
  };

  handleClickSaved = () => {
    this.setState({ openSaved: !this.state.openSaved });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
        >
          <ListItem button onClick={this.handleClickRecent}>
            <ListItemIcon>
              <RestoreIcon style={icon}/>
            </ListItemIcon>
            <ListItemText inset primary="Recent"/>
            {this.state.openRecent ? <ExpandLess style={icon}/> : <ExpandMore style={icon}/>}
          </ListItem>
          <Collapse in={this.state.openRecent} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <DesktopIcon style={icon}/>
                </ListItemIcon>
                <ListItemText inset primary="Desktop" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PhoneIcon style={icon}/>
                </ListItemIcon>
                <ListItemText inset primary="Mobile" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClickSaved}>
            <ListItemIcon>
              <LibraryBooksIcon style={icon}/>
            </ListItemIcon>
            <ListItemText inset primary="Saved"/>
            {this.state.openSaved ? <ExpandLess style={icon}/> : <ExpandMore style={icon}/>}
          </ListItem>
          <Collapse in={this.state.openSaved} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Saved Item 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Saved Item 2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Saved Item 3" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <EqualizerIcon style={iconSelected}/>
            </ListItemIcon>
            <ListItemText inset primary="Browsing Trends" style={selected} className='listItem-selected'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShareIcon style={icon}/>
            </ListItemIcon>
            <ListItemText inset primary="Shared Links" />
          </ListItem>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
