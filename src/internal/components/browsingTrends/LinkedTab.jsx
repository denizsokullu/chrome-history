import React from 'react';
import { Tab } from 'material-ui/Tabs';
import {withRouter} from 'react-router-dom'

class LinkedTab extends React.Component {
  constructor(props) {
    super(props)
    this.route = this.route.bind(this)
  }

  route() {
    this.props.onClick(this.props.to);
    this.props.history.push(this.props.to)
  }

  render() {
    return (
        <Tab onClick={this.route}>
          {this.props.children}
        </Tab>

    )
  }
}

export default withRouter(LinkedTab)
