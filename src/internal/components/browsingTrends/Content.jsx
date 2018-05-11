import React from 'react';
import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { TabBar } from 'rmwc';

import { browserHistory } from 'react-router';

import LinkedTab from './LinkedTab';
import Numbers from './Numbers';
import Memories from './Memories';
import { MenuAnchor, Menu} from 'rmwc/Menu';
import {  MenuItem } from 'material-ui/Menu';
import { Button } from 'rmwc/Button';
import Ripple from 'rmwc/Ripple';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import ListIcon from '@material-ui/icons/ViewList';

import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFilled from '@material-ui/icons/Favorite';

import Tabs from './Tabs';

const iconStyle = {}

export default class Content extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      menuIsOpen:false,
      currentLocation:'/browsing-trends/numbers',
      currentDate:'last24',
      shadow:false,
      currentChart:'timeSpent',
      fav:false,
      dates:{
        '/browsing-trends/numbers':{
                    'last24':{
                      pretty:'Last 24 Hours',
                      date:'Apr 29 8:32 AM - Now'
                    },
                    'last7':{
                      pretty:'Last Week',
                      date:'Apr 23 - Apr 30, 2018'
                    },
                    'last30':{
                      pretty:'Last Month',
                      date:'Mar 30 - Apr 30, 2018'
                    },
                    'last12':{
                      pretty:'Last Year',
                      date:'Apr 30, 2017 - Apr 30, 2018'
                    },
                    'allTime':{
                      pretty:'Lifetime',
                      date:'May 21, 2010 - Apr 30, 2018'
                    }
                  },
        '/browsing-trends/memories':{
                    'last12':{
                      pretty:'Last Year',
                      date:'Apr 30, 2017 - Apr 30, 2018'
                    },
                    'allTime':{
                      pretty:'All Time',
                      date:'May 21, 2010 - Apr 30, 2018'
                    },
                  }
      }
    }
    // console.log(window.location.pathname.split('/'));
    if(window.location.pathname.split('/')[2] === 'memories'){
      this.state.currentDate = 'allTime';
      this.state.currentLocation = '/browsing-trends/memories';
    }
    else{
      this.state.currentDate = 'last24';
      this.state.currentLocation = '/browsing-trends/numbers';
    }


    this.setRoute = this.setRoute.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.resetHeight = this.resetHeight.bind(this);
    this.handleChartChange = this.handleChartChange.bind(this);

  }

  handleChartChange(newChart){
    this.setState({currentChart:newChart});
  }

  // componentWillUpdate(){
  //   if(window.location.pathname.split('/')[2] === 'memories'){
  //     this.setState({currentDate:'allTime',currentLocation:'/browsing-trends/memories'})
  //   }
  //   else{
  //     this.setState({currentDate:'last24',currentLocation:'/browsing-trends/numbers'})
  //   }
  // }

  fav(){
    this.setState({fav:!this.state.fav});
  }

  componentWillReceiveProps(){
      if(window.location.pathname.split('/')[2] === 'memories'){
        this.setState({currentDate:'allTime',currentLocation:'/browsing-trends/memories'})
      }
      else{
        this.setState({currentDate:'last24',currentLocation:'/browsing-trends/numbers'})
      }
  }

  handleScrollCallback(evt) {
    // DEF
    // this is the shadow for the secondary menu - it changes the state
    // TASK
    // figure out a way to not mess up the data when
    // this event changes the state.

    // if(!this.state.shadow && this.refs.content.scrollTop >= 85){
    //   this.setState({shadow:true});
    // }
    // else if(this.state.shadow && this.refs.content.scrollTop < 85){
    //   this.setState({shadow:false});
    // }
  }

  resetHeight(){
    this.refs.content.scrollTop = 0;
  }


  setRoute(path){

    if(path === '/browsing-trends/memories'){
      this.setState({currentDate:'allTime',currentLocation:path});
    }
    else{
      this.setState({currentDate:'last24',currentLocation:path});
    }

  }

  handleDateChange(evt,index){
    this.setState({currentDate:Object.keys(this.state.dates[this.state.currentLocation])[index]})
  }

  render(){
    let dates = this.state.dates[this.state.currentLocation];
    return(
      <div className='content-container'>
        <div className={`top-navigation ${this.state.shadow ? 'shadow-active' : ''}`}>
          <Tabs current={this.state.currentLocation} onClick={this.setRoute}/>
        <Switch>
          <Route path='/browsing-trends/numbers' component={()=>{
            return(
              <DateSelector
                dates={this.state.dates['/browsing-trends/numbers']}
                currentDate={this.state.currentDate}
                handleDateChange={this.handleDateChange}/>
            )
          }}/>
          <Route path='/browsing-trends/memories' component={()=>{
            return(
            <React.Fragment>
              <div className='memories-tab-icons'>
                <ListIcon style={iconStyle}/>
                {this.state.fav
                 ?
                <FavoriteFilled style={iconStyle} onClick={this.fav.bind(this)}/>
                 :
                <FavoriteIcon style={iconStyle} onClick={this.fav.bind(this)}/>
                }
              </div>
              <DateSelector
                dates={this.state.dates['/browsing-trends/memories']}
                currentDate={this.state.currentDate}
                handleDateChange={this.handleDateChange}/>
              </React.Fragment>
            )
          }}/>
        </Switch>
        </div>
        <div className='content' ref="content" onScroll={this.handleScrollCallback}>
            <Route path='/browsing-trends/numbers' component={()=>{
              return(
                <Numbers timeSelected={this.state.currentDate} chartChange={this.handleChartChange} selectedChart={this.state.currentChart}/>
              )
            }}/>
            <Route path='/browsing-trends/memories' component={()=>{
              return(
                <Memories clickHandler={this.resetHeight}/>
              )
            }}/>
            <div className='bottom'></div>
        </div>
      </div>
    )
  }
}

class DateSelector extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuIsOpen:false,
      currentDate:this.props.currentDate
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({currentDate:nextProps.currentDate});
  }

  render(){
    let dates = this.props.dates;
    return(
      <MenuAnchor>
        <Menu
          open={this.state.menuIsOpen}
          onClose={() => { this.setState({menuIsOpen: false}) } }
        >
          {
            Object.keys(dates).map( (date,index) => {
              return(
                <MenuItem
                  selected={ date === this.state.currentDate }
                  onClick={ (event) => { this.props.handleDateChange(event,index) } }
                  >
                    { dates[date].pretty }
                </MenuItem>
              )
            })
          }
        </Menu>
        <span id="date-selector" onClick={()=>{this.setState({menuIsOpen:true})}}>
          <Ripple>
            <div>
              <p className='exact-date'>{dates[this.state.currentDate].date}</p>
              <p className='date-type'>
              {
                dates[this.state.currentDate].pretty
              }
              </p>
              <ArrowDropDown/>
            </div>
          </Ripple>
        </span>
      </MenuAnchor>

    )
  }
}
