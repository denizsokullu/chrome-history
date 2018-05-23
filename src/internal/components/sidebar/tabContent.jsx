import React from 'react';

import LaptopIcon from 'material-ui-icons/Laptop';
import PhoneIcon from 'material-ui-icons/PhoneIphone';

import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';


import DataCard from './dataCard'

class RecentlyClosed extends React.Component {
  content = [
    {
      title:'In the Ambulence With Gaza\'s Protest Paramedics',
      url:'nytimes.com',
      time:'12:18 AM',
      icon:'/sidebar/favicons/nytimes.png',
    },
    {
      title:'Figma: the collaborative interface design tool.',
      url:'figma.com',
      time:'12:17 AM',
      icon:'/sidebar/favicons/figma.png',
    },
    {
      title:'Google Flights',
      url:'google.com/flights',
      time:'11:52 AM',
      icon:'/sidebar/favicons/flights.png',
    },
    {
      title:'Log in | Tumblr',
      url:'tumblr.com',
      time:'8:18 PM',
      icon:'/sidebar/favicons/tumblr.png',
    },
    {
      title:'First Take reacts to Warriors beating Rockets in Game 1 | First Take | ESPN',
      url:'youtube.com',
      time:'7:36 PM',
      icon:'/sidebar/favicons/youtube.png',
    },
    {
      title:'Facebook',
      url:'facebook.com',
      time:'7:32 PM',
      icon:'/sidebar/favicons/facebook.png',
    },
    {
      title:'Men\'s Nike React Running Shoes.',
      url:'nike.com',
      time:'7:28 PM',
      icon:'/sidebar/favicons/nike.png',
    },
  ]
  render(){
    return (
      <div className='tab-content' id='recently-closed'>
        <DataCard title='Today - May 10, 2018' data={this.content}/>
      </div>
    )
  }
}

class Sessions extends React.Component {
  render(){
    return (
      <div className='tab-content'>
        Sessions!
      </div>
    )
  }
}

class OtherDevices extends React.Component {
  content = {
    mobile:[
      {
        title:'Golden State Warriors Basketball - Warriors News, Scores, Stats, Rumors\'s & More',
        url:'espn.com',
        time:'8:18 PM',
        icon:'/sidebar/favicons/espn.png',
      },
      {
        title:'Living on an Active Volcano',
        url:'newyorker.com',
        time:'9:32 AM',
        icon:'/sidebar/favicons/newyorker.png',
      },
      {
        title:'Like Black Panther\'s Suit? These Are The VFX Tricks That Made It Awesome' ,
        url:'wired.com',
        time:'9:37 PM',
        icon:'/sidebar/favicons/wired.png',
      },
      {
        title:'adidas Harden Vol. 2 Shoes - Black | adidas uS',
        url:'adidas.com',
        time:'12:06 PM',
        icon:'/sidebar/favicons/adidas.png',
      },
      {
        title:'Head Porter Vapor Day Pack',
        url:'endclothing.com',
        time:'12:17 PM',
        icon:'/sidebar/favicons/endclothing.png',
      },
      {
        title:'In Chad, the Elephants(So Many Elephants) Are Back',
        url:'nytimes.com',
        time:'3:18 PM',
        icon:'/sidebar/favicons/nytimes.png',
      },
      {
        title:'Google Flights',
        url:'google.com/flights',
        time:'7:28 PM',
        icon:'/sidebar/favicons/flights.png',
      },
      {
        title:'Gallery Home',
        url:'material.io',
        time:'9:32 PM',
        icon:'/sidebar/favicons/material.png',
      },
      {
        title:'Freediver Ascent Image | National Geographic Your Shot Photo of the Day',
        url:'nationalgeographic.com',
        time:'10:14 PM',
        icon:'/sidebar/favicons/natgeo.png',
      },
      {
        title:'Birkenstock \'Arizona Soft\' Slide (Men) | Nordstrom',
        url:'nordstrom.com',
        time:'10:13 PM',
        icon:'/sidebar/favicons/nordstrom.png',
      },
    ]
  }
  render(){
    return (
      <div className='tab-content' id='recently-closed'>
        <DataCard title={`Max Stein\'s iPhone`} data={this.content.mobile}/>
      </div>
    )
  }
}

class Usage extends React.Component {
  render(){
    return (
      <div className='tab-content' id='usage'>
        <div className='wrapper'>
          <div className='title'>
            Browsing Overview
          </div>
          <div className='date-selector'>
            <ChevronLeft/>
            <div className='date'>
              Today - May 10, 2018
            </div>
            <ChevronRight/>
          </div>
          <div className='content'>
            <div className='big-word'>
              <p className='small-title'>Time Spent</p>
              <div>
                <span>2h 16m</span>
                <span>3h 4m daily</span>
              </div>
            </div>
            <div className='big-word'>
              <p className='small-title'>Searches</p>
              <div>
                <span>197</span>
                <span>294 daily</span>
              </div>
            </div>
            <div className='split-line'></div>
            <div className='device-breakdown'>
              <span id='laptop'>
                <LaptopIcon/>
              </span>
              <div className='breakdown-details'>
                <p className='breakdown-title'>
                  Max’s MacBook Pro
                </p>
                <p>1h 4m</p>
                <p>183 Searches</p>
              </div>
            </div>
            <div className='split-line'></div>
            <div className='device-breakdown'>
              <span id='phone'>
                <PhoneIcon/>
              </span>
              <div className='breakdown-details'>
                <p className='breakdown-title'>
                  Max Stein's Iphone
                </p>
                <p>1h 12m</p>
                <p>14 Searches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default { RecentlyClosed, Sessions, OtherDevices, Usage }
