import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Content from '../../internal/components/Content';
import Sidebar from '../../internal/components/Sidebar';

import { TabBar } from 'rmwc';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';


import FilterListIcon from '@material-ui/icons/FilterList';
import FullScreenExitIcon from '@material-ui/icons/FullscreenExit';

import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle
} from 'rmwc/Toolbar';


import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from 'rmwc/Drawer';

import {
  List,
  ListItem,
  ListItemText
} from 'rmwc/List';



export default class Base extends Component {
  render() {
    return (
        <Router>
          <MuiThemeProvider>
          <div className="ic-root">
            <main className="ic-content">
              <CardWrapper/>
              <div>
                <Toolbar>
                  <ToolbarRow>
                    <ToolbarTitle>
                      <span style={{display:'flex',alignItems:'center',marginLeft:'.5rem'}}>
                        <img src='/img/logo.svg' style={{width:'70px',marginRight:'.3rem',paddingTop:'1px'}}/>
                        <span style={{fontWeight:500}}></span>
                        History
                      </span>
                      <div className='search-wrapper'>
                        <div className='search'>
                          <div className='search-bar'>
                            <SearchIcon className='search-icon'/>
                            <input placeholder="Search Trends"></input>
                            <FilterListIcon className='filter-icon'/>
                          </div>
                          <SettingsIcon/>
                          <FullScreenExitIcon/>
                        </div>
                    </div>
                    <span className='profile-photo'>
                      <img src='/img/profile.png'/>
                    </span>
                    </ToolbarTitle>
                  </ToolbarRow>
                </Toolbar>
                <div className='main-wrapper'>
                  <Drawer permanent>
                    <Sidebar/>
                  </Drawer>
                  <Route path='/' component={
                    ()=>{
                      return(
                        <Content/>
                      )
                    }
                  }/>
                </div>
              </div>
            </main>
          </div>
          </MuiThemeProvider>
        </Router>
    );
  }
}

const cardData = [
  {
    primaryText:'Welcome to Browsing Trends',
    img:'screen1.svg',
    secondaryText:'Your data can be powerful in your hands. Take a look at your browsing in a light you’ve never seen before and be reminded of amazing things that Google has helped you learn and discover. '
  },
  {
    primaryText:'Your Numbers',
    img:'screen2.svg',
    secondaryText:'See the places you spend the most time on when you browse, learn something unexpected, and become aware of your online habits.'
  },
  {
    primaryText:'Your Memories',
    img:'screen3.svg',
    secondaryText:'A chance to peek back at what has defined your Google Chrome experience and what you have accomplished using Google.'
  }
]

class CardWrapper extends Component{
  constructor(props){

    super(props);

    this.state ={
      current:0,
      disabled:false
    }

    if(!window.localStorage.getItem('chrome-history-tour')){
      window.localStorage.setItem('chrome-history-tour',true);
    }

    else{
      this.state.disabled = true;
    }

    this.next =  this.next.bind(this);
    this.prev =  this.prev.bind(this);
  }

  next(){

    let current = this.state.current;
    if(current + 1 == cardData.length){
      this.setState({disabled:true});
    }
    else{
      this.setState({current:current+1});
    }

  }

  prev(){

    let current = this.state.current;
    if(current === 0){
      // this.setState({disabled:true});
      return
    }
    else{
      this.setState({current:current-1});
    }

  }

  render(){
    let card = cardData[this.state.current];
    return(
    <div className='card-wrapper' style={this.state.disabled ? {display:'none'} : {}}>
      <div className='card-carousel'>
        {
          this.state.current !== 0
          ?
          <span className='chevron chevron-left' onClick={this.prev}>
            <ChevronLeft/>
          </span>
          :
          null
        }
        <span className='chevron chevron-right' onClick={this.next}>
          <ChevronRight/>
        </span>
        <div className='tour-card'>
          <img src={`/img/${card.img}`} alt='image 1'/>
          <h3>
            {card.primaryText}
          </h3>
          <p>
            {card.secondaryText}
          </p>
          <div>
            {
              cardData.map((c,i)=>{
                return(
                  <span className={`dot ${this.state.current === i ? 'current' : ''}`}></span>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
  }
}
