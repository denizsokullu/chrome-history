import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    width:'100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display:'inline-block'
  },
});

class DateSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
      selectedIndex: 1,
      options:this.props.options
    };
  }

  button = undefined;

  componentWillReceiveProps(nextProps){
    this.setState({options:nextProps.options})
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="When device is locked"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="When device is locked"
              secondary={this.state.options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.state.options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(DateSelector);
