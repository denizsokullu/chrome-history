import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import LinkedTab from './LinkedTab';
import Typography from 'material-ui/Typography';
import {withRouter} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    // borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'uppercase',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomizedTabs extends React.Component {

  constructor(props) {
    super(props)
    this.route = this.route.bind(this)
    this.state = {
      value:this.mapPathToIndex(this.props.current)
    };
  }

  componentWillReceiveProps(nP){
    this.setState({value:this.mapPathToIndex(nP.current)})
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mapPathToIndex(path){
    return path === '/browsing-trends/numbers' ? 0 : 1
  }

  route(path) {
    this.props.onClick(path);
    this.props.history.push(path)
  }

  render() {

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab onClick={()=>{ this.route('/browsing-trends/numbers') }}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Numbers"
          />
          <Tab onClick={()=>{ this.route('/browsing-trends/memories') }}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Memories"
          />
        </Tabs>
      </div>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(CustomizedTabs));
