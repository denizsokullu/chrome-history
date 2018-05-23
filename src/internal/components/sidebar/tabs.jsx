import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import DesktopIcon from 'material-ui-icons/DesktopMac';
import PhoneIcon from 'material-ui-icons/PhoneIphone';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';

import Tab from './tab';
import Content from './tabContent';

import ReplayIcon from 'material-ui-icons/Replay';
import PhotoLibraryIcon from 'material-ui-icons/PhotoLibrary';
import DataUsageIcon from 'material-ui-icons/DataUsage';
import DevicesOtherIcon from 'material-ui-icons/DevicesOther';

export default class SidebarTabs extends React.Component{
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.tabs = [
      {
        title:'Recently Closed',
        icon:ReplayIcon,
        content:Content.RecentlyClosed
      },
      {
        title:'Sessions',
        icon:PhotoLibraryIcon,
        content:Content.Sessions
      },
      {
        title:'Other Devices',
        icon:DevicesOtherIcon,
        content:Content.OtherDevices
      },
      {
        title:'Usage',
        icon:DataUsageIcon,
        content:Content.Usage
      }
    ];
  }

  handleScroll(e){
    this.tabs.map(tab=>{
      this.refs[tab.title].handleScroll(e);
    })
  }

  render(){
    return(
      <div className='tabs-container' onScroll={this.handleScroll}>
            {
              this.tabs.map((tab,index)=>{
                const Icon = tab.icon
                return (
                  <Tab index={index} data={tab} ref={tab.title}/>
                )
              })
            }
            <div className='test'></div>
          </div>
    )
  }
}
