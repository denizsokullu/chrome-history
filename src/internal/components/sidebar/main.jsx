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
import ArchiveIcon from 'material-ui-icons/Archive';
import Tabs from './tabs';

import Button from 'material-ui/Button';

import HistoryIcon from 'material-ui-icons/History';

import TextField from 'material-ui/TextField';

import WindowCard from './windowCard';

export default class MainComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:true,
      saveWindow:false,
      saveWindowHidden:false,
      text:'',
    }
    this.handleCancelClick = this.handleCancelClick.bind(this);

    this.windowData ={
      window1:[
        {
          icon:'/sidebar/window-ss/1.png',
          title:'Men’s Nike React Running Shoes',
          url:'nike.com'
        },
        {
          icon:'/sidebar/window-ss/2.png',
          title:'Nike X Acronym',
          url:'endclothing.com'
        },
        {
          icon:'/sidebar/window-ss/4.png',
          title:'Birkenstock ‘Arizona Soft’ Slide (Men) | Nordstrom',
          url:'shop.nordstrom.com'
        },
        {
          icon:'/sidebar/window-ss/5.png',
          title:'adidas NMD_CS1 Parley Primeknit Shoes - Black | adidas US',
          url:'adidas.com'
        },
        {
          icon:'/sidebar/window-ss/6.png',
          title:'adidas NMD_CS2 Primeknit Shoes - Black | adidas US',
          url:'adidas.com'
        },
      ],
      window2:[
        {
          icon:'/sidebar/window-ss/7.png',
          title:'North Korea Postpones Talks With South, Hinting Kim-Trump Summit Is in Peril',
          url:'nytimes.com'
        },
        {
          icon:'/sidebar/window-ss/8.png',
          title:'Twitter Will Begin Hiding All Tweets From Suspect Accounts',
          url:'wired.com'
        },
        {
          icon:'/sidebar/window-ss/9.png',
          title:'Americans Can’t Have Audi’s Super Capable Self-Driving System',
          url:'wired.com'
        },
        {
          icon:'/sidebar/window-ss/10.png',
          title:'The Untold Story of Robert Mueller’s Time in Combat',
          url:'wired.com'
        },
        {
          icon:'/sidebar/window-ss/11.png',
          title:'How Fortnite Captured Teens’ Hearts and Minds',
          url:'newyorker.com'
        },
      ],
    }
  }
  handleClick(){
    this.setState({open:!this.state.open})
  }
  handleSaveClick(){
    this.setState({saveWindow:true,saveWindowHidden:true});
  }
  handleCancelClick(){
    this.setState({saveWindow:false});
    setTimeout(()=>{
          this.setState({saveWindowHidden:false});
    },300)
  }
  handleTextChange(e){
    this.setState({text:e.target.value})
  }
  render(){
    return(
      <div className='sidebar-wrapper'>
        <div className={`sidebar-container ${this.state.open ? 'open' : ''}`}>
          <div className='navbar'>
            <span style={{display:'flex',alignItems:'center',marginLeft:'.5rem'}}>
              {/* <img src='/img/logo.svg' style={{width:'70px',marginRight:'.3rem',paddingTop:'1px'}}/> */}
              <span style={{fontWeight:500}}></span>
              History
            </span>
            <HistoryIcon/>
          </div>
          <Tabs/>
          <div className='save-session'>
            <Button variant='raised' onClick={this.handleSaveClick.bind(this)}>
              Save Session
            </Button>
          </div>
          <div className='save-window-wrapper'>
            <div className={`save-window ${this.state.saveWindow ? 'open' : ''} ${!this.state.saveWindowHidden ? 'hidden' : ''}`}>
              <div className='save-window-content'>
                <div className='header'>
                  <div className='title'>
                    Save Session
                  </div>
                  <TextField
                    id="helperText"
                    helperText={`${this.state.text.length}/50`}
                    margin="normal"
                    placeholder="Session Title"
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                    fullWidth
                  />
                </div>
                {/* <div className='content'> */}
                  <WindowCard title='Window 1' data={this.windowData.window1}/>
                  <WindowCard title='Window 2' data={this.windowData.window2}/>
                {/* </div> */}
                <div className='actions'>
                  <span className='action-button' onClick={this.handleCancelClick}>
                    CANCEL
                  </span>
                  <span className='action-button' onClick={this.handleCancelClick}>
                    SAVE
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='iframe-container' onClick={this.handleClick.bind(this)}>
          {/* <a href='/recent' target="_blank"> */}
            <img src='/img/sidebar/nytimes.png'/>
          {/* </a> */}
        </div>
      </div>

    )
  }
}
