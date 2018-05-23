import React from 'react';
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
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import ShareIcon from '@material-ui/icons/Share';


class Tab extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false , shadow: false, border:false, scrollValues:[0,0]};
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll(e){

    //   console.log(this.refs.tabTest.offsetTop)

    if(this.refs.tabContent.offsetTop - this.refs.tabTest.offsetTop + this.refs.tabContent.offsetHeight - 45 <= 0){
      this.setState({border:true});
    }
    else{
      this.setState({border:false});
    }

    if(this.refs.tabContent.offsetTop - this.refs.tabTest.offsetTop < 37){
      this.setState({shadow:true});
    }
    else{
      this.setState({shadow:false});
    }
  }

  handleClickRecent = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const Icon = this.props.data.icon;
    const Title = this.props.data.title;
    const Content = this.props.data.content;

    return (
      <React.Fragment>

        <div className={`tab-header ${this.state.shadow ? 'shadow' : ''} ${this.state.border ? 'border' : ''} ${this.state.open ? 'open' : ''}`} style={{top:`${(this.props.index*45)}px`}} ref='tabTest'>
          <ListItem button onClick={this.handleClickRecent}>
            <ListItemIcon>
              <Icon/>
            </ListItemIcon>
            <ListItemText primary={Title}/>
            {this.state.open ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

        </div>
                  <div ref='tabContent'>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>

            <Content/>

        </Collapse>
                  </div>
     </React.Fragment>
    );
  }
}


export default Tab
