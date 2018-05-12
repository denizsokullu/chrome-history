import React from 'react';
import Card from './cards';
import Row from './rows';
// import * as scroller from 'react-scroll';

// import MoreVert from '@material-ui/icons/MoveVert';
import Close from '@material-ui/icons/Close';
import ViewModule from '@material-ui/icons/ViewModule';
import Star from '@material-ui/icons/Star';

//Bottom Icons
import Send from '@material-ui/icons/Send';
import ExitToApp from '@material-ui/icons/ExitToApp';
import CloudDownload from '@material-ui/icons/CloudDownload';

import Checkbox from 'material-ui/Checkbox';


var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.animateScroll;

const expandedCardData = [
  {
    title:'Nike. Just Do It',
    url:'https://www.nike.com/us/en_us/'
  },
  {
    title:'Nike Men’s Shoes, Clothing and Gear',
    url:'https://www.nike.com/us/en_us/c/men'
  },
  {
    title:'Men’s Shoes & Sneakers',
    url:'https://store.nike.com/us/en_us/pw/mens-shoes/7puZoi3'
  },
  {
    title:'Nike React Vapor Street Flyknit Men’s Shoe',
    url:'https://www.nike.com/t/react-vapor-street-flyknit-mens-shoe-nWVLgV/AQ1763-200'
  },
  {
    title:'Men’s Clothing',
    url:'https://store.nike.com/us/en_us/pw/mens-clothing/1mdZ7pu'
  },
  {
    title:'Nike Sportswear Tech Fleece Men’s Joggers',
    url:'https://www.nike.com/t/sportswear-tech-fleece-mens-joggers-gXTOoz1v/805162-328'
  },
  {
    title:'Nike Women',
    url:'https://www.nike.com/us/en_us/c/women'
  },
  {
    title:'Women’s Sneakers & Shoes',
    url:'https://store.nike.com/us/en_us/pw/womens-shoes/7ptZoi3'
  },
  {
    title:'Nike Air VaporMax Flyknit 2 Women’s Running Shoe',
    url:'https://www.nike.com/t/air-vapormax-flyknit-2-womens-running-shoe-qlEg1z/942843-002'
  },
  {
    title:'Nike React Vapor Street Flyknit Men’s Shoe',
    url:'https://www.nike.com/t/react-vapor-street-flyknit-mens-shoe-nWVLgV/AQ1763-200'
  },
]


export default class RecentContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked:false,
      expanding:false,
      y:0
    }
  }
  scrollTop(y,opening){
    scroller.scrollTo(y, {
      duration: 400,
      smooth: true,
      containerId: 'content'
    });
    // alert(opening);
    this.setState({y:198+y});
    if(opening){
      setTimeout(()=>{
        this.setState({clicked:!this.state.clicked});
      },400);
      setTimeout(()=>{
        this.setState({expanding:!this.state.expanding});
      },420)
    }
    else{
      this.setState({expanding:!this.state.expanding});
      setTimeout(()=>{
        this.setState({clicked:!this.state.clicked});
      },600);
    }

  }
  render(){
    return(
      <div className='content-container'>
        <div className='content' containerId='content' id='content' ref='content'>
            <Row scrollTop={this.scrollTop.bind(this)}/>
              <div className={`recent-large-card ${this.state.expanding ? 'open' : ''} ${this.state.clicked ? 'visible' : ''}`} style={{top:`${this.state.y}px`}}>
                <div className='header'>
                  <div className='title'>Nike</div>
                  <div className='icons'></div>
                </div>
                <div className='links'>
                  {
                    expandedCardData.map((data,index)=>{
                      return(

                        <div className='link-card'>
                          <Checkbox/>
                          {
                            <React.Fragment>
                            <img src={`/img/recent-data/fullCard/${index+1}.png`}/>
                            <div className={`card-content`}>
                              <div className='top-row'>
                                <span>{data.title}</span>
                                <span className='time'>2:22PM</span>
                              </div>
                              <div className='url'>
                                {data.url}
                              </div>
                              <div className='icons'>
                                <ExitToApp/>
                                <CloudDownload/>
                                <Send/>
                              </div>
                            <span className='close-icon'>
                              <Close/>
                            </span>
                            </div>
                            </React.Fragment>
                          }
                        </div>
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
