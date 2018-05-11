import React from 'react';
import Card from './cards';
import Row from './rows';

export default class RecentContent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='content-container'>
        <div className='content'>
          <Row/>
        </div>
      </div>
    )
  }
}
