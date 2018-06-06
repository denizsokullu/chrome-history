import React from 'react';
import uuidv1 from 'uuid/v1';

import { Button } from 'rmwc/Button';
import { Elevation } from 'rmwc/Elevation';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import styled from 'styled-components';
import ArrowBack from 'material-ui-icons/ArrowBack';

import FavoriteFilled from 'material-ui-icons/Favorite';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import MoreIcon from 'material-ui-icons/MoreVert';

import ChevronRight from 'material-ui-icons/ChevronRight';

import LongMenu from './LongMenu';

import Ripple from 'rmwc/Ripple';

const StyledLink = styled(Link)`
    text-decoration: none;
    display:block;
    color:inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    };
    svg:hover{
      color:black;
      fill:black;
    }
`;


export default class Memories extends React.Component{
  constructor(props) {
    super(props)
    this.linkHandler = this.linkHandler.bind(this);
  }
  linkHandler(){

  }
  render() {
    return (
      <div className='memories-wrapper'>
        {/* <Switch> */}
          <Route exact path='/browsing-trends/memories' component={()=>{
            return(
              <React.Fragment>
                <div className='page-container-title'>
                  2018
                </div>
                {
                  memoryCardData.map((memory,index)=>{
                    return(
                      <MemoryCard {...memory} key={index} clickHandler={this.props.clickHandler}></MemoryCard>
                    )
                  })
                }
                <div className='memories-spacing'/>
                <div className='page-container-title'>
                  2017
                </div>
                {
                  memoryCardData2017.map((memory,index)=>{
                    return(
                      <MemoryCard {...memory} key={index} clickHandler={this.props.clickHandler}></MemoryCard>
                    )
                  })
                }
                <div className='memories-spacing'/>
                <div className='page-container-title'>
                  2016
                </div>
                {
                  memoryCardData2016.map((memory,index)=>{
                    return(
                      <MemoryCard {...memory} key={index} clickHandler={this.props.clickHandler}></MemoryCard>
                    )
                  })
                }
              </React.Fragment>
            )
          }}/>
          <Route path="/browsing-trends/memories/:id" component={
            ({ match }) => {
              let memory = memoryCardData.concat(memoryCardData2017).concat(memoryCardData2016).filter(m=>{
                return m.id === match.params.id
              })[0];
              return(
                <MemoryCardExpanded {...memory}/>
              )
            }
          }/>
        {/* </Switch> */}
    </div>
    )
  }
}

const faroeDetails = {

  summary:`During Jan - Mar 2018 your searches trended towards things relating to Faroe Islands. Your 832 searches took you to 74 new websites across 3 Google products and during this time faroe islands consisted of 12% of your total searches.`,

  topSitesVisited:[
    {
      url:'juliebazar.com/faroe-islands',
      itemCount:24,
      img:'1',
    },
    {
      url:'visitfaroeislands.com',
      img:'2',
      itemCount:71
    },
    {
      url:'youtube.com/robstrok',
      img:'3',
      itemCount:38
    },
    {
      url:'youtube.com/chrisburkard',
      img:'4',
      itemCount:46
    },
  ],

  topSearches:[
    {
      query:'Faroe islands in march',
      itemCount:12
    },
    {
      query:'Amazing photos Gasaladur',
      itemCount:46
    },
    {
      query:'Hotels faroe',
      itemCount:38
    },
    {
      query:'Faroe islands travel gear',
      itemCount:18
    },
    {
      query:'Faroe islands travel ideas',
      itemCount:23
    },
  ]


}
const memoryCardData2016 = [
  {
    size:'large',
    image:'2016/travelBig.png',
    title:'Travel Research',
    date:'Sep - Nov 2016',
    searchCount:'1403',
    id:"a1e693e0-4ceb-11e8-bc71-7b7151f5f4fa",
  },
  {
    size:'small',
    image:'2016/cameraSmall.png',
    title:'Camera Design',
    date:'Aug 2016',
    searchCount:'547',
    first:true,
    id:"a1d6baf0-4ceb-11e8-cc71-7b7151f5f4fa",
  },
  {
    size:'small',
    image:'2016/icelandSmall.jpg',
    title:'Iceland',
    date:'Feb - May 2016',
    searchCount:'478',
    id:"a1d6baf1-4ceb-11e8-bc71-7b7151f6f4fa",
  },
  {
    size:'large',
    image:'2016/portraitBig.png',
    title:'Portrait Photography',
    date:'Jan 2016',
    searchCount:'1643',
    id:"a1d6baf1-4ceb-11e8-bc71-7b7151f5f4fb",
  },
].map(d=>{
  d.details = faroeDetails;
  return d
})

const memoryCardData2017 = [
  {
    size:'large',
    image:'2017/datavizLarge.png',
    title:'Data Visualization',
    date:'Jun - Sep 2017',
    searchCount:'3417',
    id:"a1e693e0-4ceb-11e8-bc71-7b7151f5f4fa",
  },
  {
    size:'small',
    image:'2017/musicSmall.png',
    title:'Music',
    date:'May - Jun 2017',
    searchCount:'1988',
    first:true,
    id:"a1d6baf0-4ceb-11e8-bc72-7b7151f5f4fa",
  },
  {
    size:'small',
    image:'2017/quoappSmall.png',
    title:'Quo App',
    date:'Mar - Apr 2017',
    searchCount:'1198',
    id:"a1d6baf1-4cfb-11e8-bc71-7b7151f5f4fa",
  },
  {
    size:'large',
    image:'2017/jobsBig.png',
    title:'Jobs',
    date:'Jan - Mar 2017',
    searchCount:'1443',
    id:"a1d6baf1-4ceb-11e8-bc71-7b7152f5f4fa",
  },
].map(d=>{
  d.details = faroeDetails;
  return d
})
const memoryCardData = [
    {
      size:'large',
      image:'faroe.jpg',
      title:'Faroe Islands',
      date:'Jan - Mar 2018',
      searchCount:'2261',
      id:"a1d693e0-4ceb-11e8-bc71-7b7151f5f4fa",
    },
    {
      size:'small',
      image:'apartment.jpg',
      title:'Seattle Apartments',
      date:'Mar 2018',
      searchCount:'547',
      first:true,
      id:"a1d6baf0-4ceb-11e8-bc71-7b7151f5f4fa",
    },
    {
      size:'small',
      image:'starwars.jpg',
      title:'Star Wars',
      date:'Jan - Mar 2018',
      searchCount:'965',
      id:"a1d6baf1-4ceb-11e8-bc71-7b7151f5f4fa",
    },
    {
      size:'large',
      image:'sloth.jpg',
      title:'News',
      date:'Jan 2018',
      searchCount:'1842',
      id:"a1d6baf2-4ceb-11e8-bc71-7b7151f5f4fa"
    },
    {
      size:'small',
      image:'dominic.png',
      title:'Dominican Republic',
      date:'Jan 2018',
      searchCount:'344',
      first:true,
      id:"cfe24c24-4ceb-11e8-a707-4586f74e9b93",
    },
    {
      size:'small',
      image:'sneakers.jpg',
      title:'Sneakers',
      date:'Jan - Mar 2018',
      searchCount:'274',
      id:"cfe24c25-4ceb-11e8-a707-4586f74e9b93",
    },
].map(d=>{
  d.details = faroeDetails;
  return d
})

class MemoryCardExpanded extends React.Component{
  constructor(props){
    super(props);
    this.state={
      elevation:3,
    }
  }
  render(){
    return(
      <div className={`memory-card new memory-card-${this.props.size} ${this.props.first ? 'first' : ''}`}>
        <Elevation
          z={this.state.elevation}
          >
        {/*  */}
          <div className='expanded-compartment first'>
            <StyledLink to='/browsing-trends/memories'> <ArrowBack/> </StyledLink>
            <div className='memory-card-content'>
              <p className='memory-card-title'>{this.props.title}</p>
              <p className='memory-card-meta'>{this.props.date} <span style={{fontSize:'8px',position:'relative',top:'-2px'}}>●</span> {this.props.searchCount} Related</p>
              <p className='memory-card-action'>
                <Button theme="background text-hint-on-background">
                  Explore
                </Button>
              </p>
              <span className='memory-card-icons'>

              </span>
            </div>
          </div>
          <div className='expanded-compartment'>
            <div className='compartment-title'>Details</div>
            <div className={`summary-img`}>
              <img src={`/img/${this.props.image}`}/>
            </div>
            <div className={`summary-text`}>
              {this.props.details.summary}
              <div>
                <Button theme="background text-hint-on-background">
                  READ MORE
                </Button>
            </div>

            </div>
          </div>
          <div className='expanded-compartment topSites'>
            <div className='compartment-title'>Top Sites Visited</div>
            {this.props.details.topSitesVisited.map(site=>{
              return(
                <div className='topSites-block'>
                  <div className='topSites-img'>
                    <img  src={`/img/${site.img}.png`}/>
                  </div>
                  <p>{site.url}</p>
                  <p className='itemCount'>{site.itemCount} items</p>
                </div>
              )
            })}
            <span className='chevron'>
              <ChevronRight/>
            </span>
          </div>
          <div className='expanded-compartment last'>
            <div className='compartment-title'>Top Searches</div>
            {this.props.details.topSearches.map((search,index)=>{
              return(
              <div className='search-result'>
                <p><span className='search-index'>{index+1}</span> {search.query}</p>
                <p className='itemCount'>{search.itemCount} items</p>
              </div>
              )
            })}
            <div className='search-more'>
            <Button theme="background text-hint-on-background">
              MORE
            </Button>
            </div>
          </div>
        </Elevation>
      </div>
    )
  }
}
class MemoryCard extends React.Component{
  constructor(props){
    super(props);
    this.state = { elevation:3, favorite:false}
  }

  handleFavorite(event){
    this.setState({favorite:!this.state.favorite});
    event.preventDefault();
    event.stopPropagation();
  }

  render(){
    return(
      <div className={`memory-card new memory-card-${this.props.size} ${this.props.first ? 'first' : ''}`} onClick={this.props.clickHandler}>
        <StyledLink to={`/browsing-trends/memories/${this.props.id}`}>
          <Elevation
            z={this.state.elevation}
            transition
            onMouseOver={() => this.setState({elevation: 8})}
            onMouseOut={() => this.setState({elevation: 3})}
            >
          <div className={`memory-card-img`}>
            <img src={`/img/${this.props.image}`}/>
          </div>
          <div className='memory-card-content'>
            <p className='memory-card-title'>{this.props.title}</p>
            <p className='memory-card-meta'>{this.props.date} <span style={{fontSize:'8px',position:'relative',top:'-2px'}}>●</span> {this.props.searchCount} Related</p>
            <p className='memory-card-action'>
              <Button theme="background text-hint-on-background">
                Explore
              </Button>
            </p>
            <span className='memory-card-icons'>
              <Ripple>
              {
                this.state.favorite
                ? <FavoriteFilled onClick={this.handleFavorite.bind(this)}/>
                : <FavoriteIcon onClick={this.handleFavorite.bind(this)}/>
              }
            </Ripple>
              <LongMenu/>
            </span>
          </div>
          </Elevation>
        </StyledLink>
      </div>


    )
  }
}
